import React from "react";
import { useNavigate } from "react-router-dom";
import { FaAward, FaFileLines } from "react-icons/fa6";

const certs = [
  "Python Programming, United Institute of Technology",
  "Web Development, United Institute of Technology",
  "Web Development, MSME Govt. Certified Qualification Test",
];
const roles = [
  "Head, Soft Computing Research Society: organized peer knowledge-sharing sessions for the group.",
  "Team Participant, TARBANG Competition: competed in a campus-wide technical challenge.",
];

export default function Certificate() {
  const navigate = useNavigate();
  const items = [
    { Icon: FaAward, title: "Certificate", text: "View my certificates", to: "/CertificatePage" },
    { Icon: FaFileLines, title: "Resume", text: "View my resume", to: "/Resume" },
  ];
  return (
    <section name="Achievements" className="sec">
      <div className="wrap">
        <h2 className="h2">Achievements</h2>
        <div className="mb-4 grid gap-4 md:grid-cols-2">
          <div className="panel">
            <h3 className="mb-4 font-display text-xl font-extrabold text-mint">Certifications (3)</h3>
            <ul className="list-disc space-y-2 pl-5 text-slate-300 marker:text-mint">{certs.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
          <div className="panel">
            <h3 className="mb-4 font-display text-xl font-extrabold text-mint">Leadership & Activities</h3>
            <ul className="list-disc space-y-2 pl-5 text-slate-300 marker:text-mint">{roles.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map(({ Icon, title, text, to }) => (
            <button key={title} onClick={() => navigate(to)} className="panel group flex items-center gap-5 text-left transition hover:border-mint/60 hover:bg-white/[0.07]">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-mint/15 text-2xl text-mint"><Icon /></span>
              <span>
                <span className="block font-display text-2xl font-extrabold text-white">{title}</span>
                <span className="text-slate-400">{text}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
