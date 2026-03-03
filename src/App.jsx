import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import WebDevelopment from "./pages/WebDevelopment";
import VideoEditing from "./pages/VideoEditing";

import Preloader from "./components/Preloader";
import useSmoothScroll from "./hooks/useSmoothScroll";

function App() {

  // ✅ Smooth scroll hook
  useSmoothScroll();

  // ✅ Loader state
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* ================= PRELOADER ================= */}
      {loading && (
        <Preloader onFinish={() => setLoading(false)} />
      )}

      {/* ================= WEBSITE ================= */}
      {!loading && (
        <Router>

          {/* GLOBAL TOAST SYSTEM */}
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#111",
                color: "#fff",
                border: "1px solid #00ff88",
                padding: "14px 18px",
                fontSize: "14px",
              },
            }}
          />

          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />

              {/* WORK SUB PAGES */}
              <Route path="/webdevelopment" element={<WebDevelopment />} />
              <Route path="/work/video" element={<VideoEditing />} />

              {/* OPTIONAL PLACEHOLDERS */}
              <Route path="/work/ui-ux" element={<div>UI UX Showcase</div>} />
              <Route path="/work/video-editing" element={<div>Video Editing Showcase</div>} />
            </Routes>
          </MainLayout>

        </Router>
      )}
    </>
  );
}

export default App;