import fs from "fs/promises";
import path from "path";
import { getStore } from "@netlify/blobs";

const DATA_DIR = path.join(process.cwd(), "data");
const STATS_FILE = path.join(DATA_DIR, "site-stats.json");
const LEGACY_RESUME_FILE = path.join(DATA_DIR, "resume-downloads.json");
const STATS_KEY = "site-stats";

/** @returns {{ resumeDownloads: number, visits: number, contactSubmissions: number, updatedAt: string | null }} */
function defaultStats() {
  return {
    resumeDownloads: 0,
    visits: 0,
    contactSubmissions: 0,
    updatedAt: null,
  };
}

function normalize(parsed) {
  const d = defaultStats();
  if (!parsed || typeof parsed !== "object") return d;
  for (const key of ["resumeDownloads", "visits", "contactSubmissions"]) {
    const n = parsed[key];
    d[key] = typeof n === "number" && Number.isFinite(n) && n >= 0 ? Math.floor(n) : 0;
  }
  d.updatedAt = typeof parsed.updatedAt === "string" ? parsed.updatedAt : null;
  return d;
}

function isNetlifyRuntime() {
  return process.env.NETLIFY === "true";
}

/** Serialize file reads/writes to avoid lost updates under concurrent requests. */
let fileQueue = Promise.resolve();

function withFile(fn) {
  const next = fileQueue.then(fn, fn);
  fileQueue = next.catch(() => {});
  return next;
}

async function ensureDataDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function createInitialStatsFromLegacy() {
  let resumeDownloads = 0;
  try {
    const leg = await fs.readFile(LEGACY_RESUME_FILE, "utf8");
    const p = JSON.parse(leg);
    const c = p?.count;
    resumeDownloads = typeof c === "number" && c >= 0 ? Math.floor(c) : 0;
  } catch {
    /* no legacy file or invalid */
  }
  const initial = { ...defaultStats(), resumeDownloads, updatedAt: new Date().toISOString() };
  await ensureDataDir();
  await fs.writeFile(STATS_FILE, JSON.stringify(initial, null, 2), "utf8");
  return initial;
}

async function readStatsFromDisk() {
  await ensureDataDir();
  let raw;
  try {
    raw = await fs.readFile(STATS_FILE, "utf8");
  } catch (e) {
    if (e?.code === "ENOENT") {
      return createInitialStatsFromLegacy();
    }
    throw e;
  }
  try {
    return normalize(JSON.parse(raw));
  } catch {
    return createInitialStatsFromLegacy();
  }
}

async function writeStats(stats) {
  const next = { ...normalize(stats), updatedAt: new Date().toISOString() };
  await ensureDataDir();
  await fs.writeFile(STATS_FILE, JSON.stringify(next, null, 2), "utf8");
  return next;
}

function getBlobStore() {
  return getStore("portfolio-stats");
}

async function readStatsFromBlob() {
  const store = getBlobStore();
  const raw = await store.get(STATS_KEY, { type: "json" });
  if (!raw) {
    const initial = { ...defaultStats(), updatedAt: new Date().toISOString() };
    await store.setJSON(STATS_KEY, initial);
    return initial;
  }
  return normalize(raw);
}

async function writeStatsToBlob(stats) {
  const store = getBlobStore();
  const next = { ...normalize(stats), updatedAt: new Date().toISOString() };
  await store.setJSON(STATS_KEY, next);
  return next;
}

export async function readStats() {
  return withFile(async () => {
    if (isNetlifyRuntime()) {
      return readStatsFromBlob();
    }
    return readStatsFromDisk();
  });
}

/** @deprecated — prefer readStats().resumeDownloads */
export async function getResumeDownloadCount() {
  const s = await readStats();
  return s.resumeDownloads;
}

async function bumpField(field) {
  return withFile(async () => {
    const stats = isNetlifyRuntime()
      ? await readStatsFromBlob()
      : await readStatsFromDisk();
    stats[field] = (stats[field] || 0) + 1;
    if (isNetlifyRuntime()) {
      await writeStatsToBlob(stats);
    } else {
      await writeStats(stats);
    }
    return stats[field];
  });
}

export function incrementResumeDownloads() {
  return bumpField("resumeDownloads");
}

export function incrementVisits() {
  return bumpField("visits");
}

export function incrementContactSubmissions() {
  return bumpField("contactSubmissions");
}
