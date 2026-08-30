import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["case-studies/ai-video-transcription"];

const SOLUTION_FLOW = `Video URL
   │
   ▼
Video/Audio Extraction
   │
   ▼
Audio Processing
   │
   ▼
Speech-to-Text Model
   │
   ▼
Transcript
   │
   ▼
Text Processing / Analysis`;

const EXTENSION_FLOW = `Video
 ↓
Transcript
 ↓
Summary
 ↓
Key Insights
 ↓
Social Content
 ↓
Blog
 ↓
Knowledge Base`;

const WHISPER_SNIPPET = `whisper.load_model(...)`;

const PIPELINE_NEEDS = [
  "Video URL input",
  "Audio extraction",
  "Speech recognition",
  "Transcription",
  "Error handling",
  "Text output",
];

const DEPENDENCY_LESSONS = [
  "Dependency validation",
  "Package identification",
  "Environment reproducibility",
  "Version compatibility",
  "Runtime diagnostics",
];

const DOWNSTREAM_USES = [
  "Summarization",
  "Content repurposing",
  "LinkedIn post generation",
  "Blog generation",
  "Search",
  "Knowledge extraction",
  "AI analysis",
];

const TECHNOLOGIES = [
  "Python",
  "Speech-to-Text",
  "Whisper",
  "Video Processing",
  "AI",
  "NLP",
  "Automation",
];

const KEYWORDS = [
  "AI Transcription",
  "Speech-to-Text",
  "Whisper",
  "Python Automation",
  "Video Processing",
  "NLP",
  "AI Content Pipeline",
];

function AiVideoTranscriptionCaseStudy() {
  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title="AI Video-to-Text Transcription Pipeline"
        lead="A Python-based pipeline for extracting textual content from online videos — converting video/audio into usable text for downstream AI processing."
        actions={
          <Link className="btn btn--ghost" href="/case-studies">
            ← All Case Studies
          </Link>
        }
      />

      <section className="section">
        <div className="section__inner case-study">
          <Reveal as="article" className="case-block">
            <p className="case-card__status">Featured</p>
            <h2>Overview</h2>
            <p>A Python-based pipeline for extracting textual content from online videos.</p>
            <p>
              The goal was not to download and store videos as the final output, but to convert
              video/audio content into usable text for downstream processing.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Problem</h2>
            <p>Video contains valuable information, but extracting that information manually is time-consuming.</p>
            <p>A useful automation pipeline needs to handle:</p>
            <ul>
              {PIPELINE_NEEDS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Solution</h2>
            <p>The workflow follows:</p>
            <pre className="code-block">{SOLUTION_FLOW}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Engineering Challenge</h2>
            <p>
              One issue encountered during implementation was a mismatch between the installed Whisper
              package and the expected API.
            </p>
            <p>For example, code using:</p>
            <pre className="code-block">{WHISPER_SNIPPET}</pre>
            <p>
              can fail when the imported <code>whisper</code> package is not the intended OpenAI Whisper
              implementation.
            </p>
            <p>This highlighted the importance of:</p>
            <div className="chip-grid">
              {DEPENDENCY_LESSONS.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Final Direction</h2>
            <p>The pipeline was designed around the actual business requirement:</p>
            <p>
              <strong>Video → Text</strong>
            </p>
            <p>rather than:</p>
            <p>
              <strong>Video → Downloaded Video File</strong>
            </p>
            <p>That distinction simplifies downstream use cases such as:</p>
            <div className="chip-grid">
              {DOWNSTREAM_USES.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Potential Extension</h2>
            <p>The transcription layer can become the first stage of a larger AI content pipeline:</p>
            <pre className="code-block">{EXTENSION_FLOW}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Technologies</h2>
            <div className="chip-grid">
              {TECHNOLOGIES.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="chip-grid">
            {KEYWORDS.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AiVideoTranscriptionCaseStudy;
