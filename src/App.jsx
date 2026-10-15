import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Certificate from "./components/Certificate";
import Experiance from "./components/Experiance";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CertificatePage from "./components/CertificatePage";
import Resume from "./Resume";

function Main() {
  const bar = useRef(null);
  useLayoutEffect(() => {
    document.documentElement.classList.add("js");
    const els = document.querySelectorAll(".panel, section .h2");
    els.forEach((e) => e.classList.add("reveal"));
    const io = new IntersectionObserver(
      (list) => list.forEach((x) => x.isIntersecting && (x.target.classList.add("in"), io.unobserve(x.target))),
      { threshold: 0.12 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    const move = (e) => {
      const p = e.target.closest && e.target.closest(".panel");
      if (!p) return;
      const r = p.getBoundingClientRect();
      p.style.setProperty("--x", e.clientX - r.left + "px");
      p.style.setProperty("--y", e.clientY - r.top + "px");
    };
    const scroll = () => {
      const h = document.documentElement;
      const v = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      if (bar.current) bar.current.style.transform = `scaleX(${v})`;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("scroll", scroll, { passive: true });
    return () => { window.removeEventListener("pointermove", move); window.removeEventListener("scroll", scroll); };
  }, []);
  return (
    <>
      <div ref={bar} className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left scale-x-0 bg-gradient-to-r from-mint to-violet" />
      <Navbar />
      <Home />
      <About />
      <Experiance />
      <Projects />
      <Skills />
      <Certificate />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/CertificatePage" element={<CertificatePage />} />
      <Route path="/Resume" element={<Resume />} />
    </Routes>
  );
}
