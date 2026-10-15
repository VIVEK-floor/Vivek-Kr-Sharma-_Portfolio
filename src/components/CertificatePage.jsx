import React from "react";
import { useNavigate } from "react-router-dom";

const images = [
  { src: "/images/img1.jpg", title: "Java certificate" },
  { src: "/images/img2.jpg", title: "Java + Web Development Certificate" },
  { src: "/images/img3.jpg", title: "Java certificate" },
  { src: "/images/img4.jpg", title: "Java + Web Development Certificate" },
  { src: "/images/img5.jpg", title: "Java + Web Development Certificate" },
];

export default function CertificatePage() {
  const navigate = useNavigate();
  return (
    <main className="wrap min-h-screen py-12">
      <button className="btn mb-8" onClick={() => navigate("/")}>Go-Back</button>
      <h1 className="h2">My Certificates</h1>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <div key={i} className="panel !p-3 transition hover:-translate-y-1 hover:border-mint/60">
            <img src={img.src} alt={img.title} className="w-full rounded-2xl bg-white object-contain" />
          </div>
        ))}
      </div>
    </main>
  );
}
