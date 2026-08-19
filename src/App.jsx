import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout, ThemeProvider } from "./shared";
import Home from "./pages/Home";
import About from "./pages/About";
import Expertise from "./pages/Expertise";
import CaseStudies from "./pages/CaseStudies";
import InsuranceCaseStudy from "./pages/case-studies/InsuranceCaseStudy";
import ADKCaseStudy from "./pages/case-studies/ADKCaseStudy";
import N8nCaseStudy from "./pages/case-studies/N8nCaseStudy";
import Projects from "./pages/Projects";
import Architecture from "./pages/Architecture";
import AIAutomation from "./pages/AIAutomation";
import Industries from "./pages/Industries";
import Experience from "./pages/Experience";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="expertise" element={<Expertise />} />
            <Route path="case-studies" element={<CaseStudies />} />
            <Route path="case-studies/insurance-platform" element={<InsuranceCaseStudy />} />
            <Route path="case-studies/dialogflow-google-adk" element={<ADKCaseStudy />} />
            <Route path="case-studies/ai-n8n-automation" element={<N8nCaseStudy />} />
            <Route path="projects" element={<Projects />} />
            <Route path="architecture" element={<Architecture />} />
            <Route path="ai-automation" element={<AIAutomation />} />
            <Route path="industries" element={<Industries />} />
            <Route path="experience" element={<Experience />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
            <Route path="skills" element={<Navigate to="/expertise" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
