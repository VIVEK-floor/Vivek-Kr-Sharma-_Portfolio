import React from "react";

const points = [
  "Delivered a full-stack Online Document & Merchandise Printing System covering document/image upload, order placement, and home delivery for end users.",
  "Implemented secure upload for 2 file types (PDF and image) with complete order management and real-time order tracking, plus a configurable UI spanning 4 print options (paper size, quantity, color, binding).",
  "Architected backend services in Node.js and PHP integrated with a MySQL database, powering 2 core modules: user authentication and printing-request management.",
  "Coordinated development across an 8-part stack: HTML, CSS, JavaScript, PHP, AJAX, Bootstrap, MySQL, and Node.js.",
  "Communicated progress and blockers with the development team throughout the 6-month internship, aligning on requirements and delivery timelines.",
];

export default function Experiance() {
  return (
    <section name="Experience" className="sec">
      <div className="wrap">
        <h2 className="h2">Experience</h2>
        <div className="panel border-l-4 !border-l-mint">
          <div className="flex flex-col justify-between gap-1 md:flex-row md:items-start">
            <div>
              <h3 className="font-display text-2xl font-extrabold text-white">Full Stack Developer, Internship</h3>
              <p className="text-mint">Prapti Infotech Pvt. Ltd · STPI, MNNIT, Prayagraj</p>
            </div>
            <span className="chip">Nov 2025 – May 2026 · 6 months</span>
          </div>
          <ul className="mt-6 list-disc space-y-3 pl-5 leading-relaxed text-slate-300 marker:text-mint">
            {points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
