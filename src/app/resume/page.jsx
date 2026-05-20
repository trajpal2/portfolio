import Link from "next/link";
import { resume } from "@/constants";
import { siteDescription, siteName, siteTitle, siteUrl } from "@/config/site";
import ResumeDownloadButton from "@/components/ResumeDownloadButton";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: `Resume | ${siteName}`,
  description: `Download or view the CV of ${siteName}. ${siteDescription}`,
  alternates: {
    canonical: `${siteUrl}/resume`,
  },
  openGraph: {
    title: `Resume | ${siteName}`,
    description: siteDescription,
    url: `${siteUrl}/resume`,
    siteName,
    locale: "en_IN",
    type: "website",
    images: [{ url: `${siteUrl}/herobg.png`, width: 1200, height: 630, alt: siteTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Resume | ${siteName}`,
    description: siteDescription,
    images: [`${siteUrl}/herobg.png`],
  },
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-28 pb-10">
        <p className="text-secondary text-sm uppercase tracking-wider mb-2">Credentials</p>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">{resume.title}</h1>
        <p className="text-secondary max-w-2xl mb-8">
          View the PDF below, open it in a new tab, or download a copy to your device.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <a
            href={resume.file}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/15 bg-white/[0.04] py-3 px-8 text-white font-semibold text-[16px] transition-colors hover:border-white/25 hover:bg-white/[0.08]"
          >
            View in browser
          </a>
          <ResumeDownloadButton
            fileUrl={resume.file}
            downloadName={resume.downloadName}
            className="rounded-xl border border-accent/35 bg-accent/10 py-3 px-8 text-accent font-semibold text-[16px] shadow-md transition-colors hover:border-accent/50 hover:bg-accent/20"
          >
            Download resume
          </ResumeDownloadButton>
          <Link
            href="/"
            className="rounded-xl border border-white/10 py-3 px-8 text-secondary font-semibold text-[16px] transition-colors hover:text-white hover:border-white/20"
          >
            Back to portfolio
          </Link>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-card bg-black-100">
          <iframe
            src={`${resume.file}#toolbar=1&navpanes=0`}
            title={resume.title}
            className="w-full h-[calc(100vh-320px)] min-h-[520px] bg-white"
          />
        </div>

        <p className="mt-6 text-secondary text-sm text-center">
          Preview not loading?{" "}
          <a
            href={resume.file}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-white hover:underline transition-colors"
          >
            Open PDF directly
          </a>{" "}
          or use{" "}
          <ResumeDownloadButton
            fileUrl={resume.file}
            downloadName={resume.downloadName}
            className="text-accent hover:text-white hover:underline bg-transparent border-none cursor-pointer text-sm p-0 font-inherit inline transition-colors"
          >
            Download resume
          </ResumeDownloadButton>
          .
        </p>
      </main>
    </div>
  );
}
