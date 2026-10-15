import React from "react";

const edu = [
  ["B.Tech, Computer Science & Engineering", "United Institute of Technology, Prayagraj", "2021 – 2025"],
  ["CBSE, Class XII (79%)", "Bal Bharati School and College, Prayagraj", "2020 – 2021"],
  ["CBSE, Class X (74%)", "Bal Bharati School and College, Prayagraj", "2018 – 2019"],
];
const soft = ["Communication", "Team Collaboration", "Leadership", "Event Management", "Problem Solving"];

export default function About() {
  return (
    <section name="About" className="sec">
      <div className="wrap">
        <h2 className="h2">About</h2>
        <div className="grid gap-4 md:grid-cols-6">
          <div className="panel md:col-span-4">
            <p className="text-lg leading-relaxed text-slate-200">
              Hello, I'm Vivek Kumar Sharma, a Full Stack Developer with 6 months of internship experience building a production-style web application using Node.js, PHP, and MySQL, including secure authentication, order-management workflows, and live status tracking. I have built 4 projects spanning the MERN stack, e-commerce, computer vision and data structures (including AI-assisted work), and hold 3 professional certifications in Python and web development.
            </p>
          </div>
          <div className="panel md:col-span-2">
            <h3 className="mb-3 font-display text-xl font-extrabold text-mint">Quick facts</h3>
            <p className="text-slate-300">Prayagraj, India</p>
            <p className="mt-1 text-slate-300">+91 7571071790</p>
            <a className="mt-1 block break-all text-white underline decoration-mint/60 underline-offset-4" href="mailto:vivekkumarsharma6388@gmail.com">vivekkumarsharma6388@gmail.com</a>
          </div>
          <div className="panel md:col-span-4">
            <h3 className="mb-4 font-display text-xl font-extrabold text-mint">Education</h3>
            <ul className="space-y-4">
              {edu.map(([t, s, y]) => (
                <li key={t} className="flex flex-col justify-between gap-1 sm:flex-row">
                  <div><p className="font-semibold text-white">{t}</p><p className="text-slate-400">{s}</p></div>
                  <span className="text-sm text-slate-400">{y}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="panel md:col-span-2">
            <h3 className="mb-4 font-display text-xl font-extrabold text-mint">Soft skills</h3>
            <div className="flex flex-wrap gap-2">{soft.map((i) => <span key={i} className="chip">{i}</span>)}</div>
          </div>
          <div className="panel font-mono text-sm md:col-span-6 !p-0">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" /><span className="h-3 w-3 rounded-full bg-yellow-400/80" /><span className="h-3 w-3 rounded-full bg-green-400/80" />
              <span className="ml-3 text-xs text-slate-400">vivek@portfolio: ~</span>
            </div>
            <div className="space-y-2 p-5 text-slate-300">
              {[["whoami", "Vivek Kumar Sharma"], ["role", "Full Stack Developer"], ["stack --list", "React · Node.js · Express · MongoDB · PHP · MySQL"], ["ai --usage", "AI-assisted development · AI image generation"], ["status", "open to full-stack roles"]].map(([c, o]) => (
                <p key={c}><span className="text-mint">$</span> {c} <span className="text-slate-500">→</span> <span className="text-white">{o}</span></p>
              ))}
              <p><span className="text-mint">$</span> <span className="caret inline-block h-4 w-2 translate-y-0.5 bg-mint" /></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
