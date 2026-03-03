import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import React, { useState, useEffect } from "react";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import WebDevelopment from "./pages/WebDevelopment";
import VideoEditing from "./pages/VideoEditing";

import useSmoothScroll from "./hooks/useSmoothScroll";
import Preloader from "./components/Preloader";

function App() {
  useSmoothScroll();

  const [loading, setLoading] = useState(true);

  // ✅ FORCE loader to stop (failsafe)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <Toaster position="top-center" />

      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/webdevelopment" element={<WebDevelopment />} />
          <Route path="/work/video" element={<VideoEditing />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;