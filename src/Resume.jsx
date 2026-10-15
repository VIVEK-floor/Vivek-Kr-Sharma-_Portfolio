import React from "react";
import { useNavigate } from "react-router-dom";

export default function Resume() {
  const navigate = useNavigate();
  return (
    <main className="wrap min-h-screen py-12">
      <button className="btn mb-8" onClick={() => navigate("/")}>Go-Back</button>
      <h1 className="h2">Resume</h1>
      <iframe src="/assests/Vivek_Kumar_Sharma_Resume.pdf" title="PDF Viewer" className="h-[80vh] w-full rounded-3xl border border-white/10 bg-white" />
    </main>
  );
}
