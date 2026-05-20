"use client";

/**
 * Records a resume download on the server, then triggers the browser download.
 * Does not show any count in the UI.
 */
export default function ResumeDownloadButton({ fileUrl, downloadName, className, children }) {
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/resume-download", { method: "POST" });
    } catch {
      /* still allow download if tracking fails */
    }
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = downloadName;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
