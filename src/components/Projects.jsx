import React from "react";

const snippet = `pq = PersistentPriorityQueue("data.json")
pq.insert("deploy build", priority=2)
pq.insert("fix bug", priority=1)
pq.extract_min()   # lowest priority first
pq.update(item_id, new_priority=0)`;

const projects = [
  {
    file: "mistvale/index.html",
    title: "Mistvale Tea Co. — AI-Assisted E-Commerce Store",
    tag: "Personal Project",
    cover: "/projects/mistvale/images/hero-banner.jpg",
    demo: "/projects/mistvale/index.html",
    tech: ["HTML5", "CSS3", "JavaScript", "AI Image Generation", "SEO / JSON-LD"],
    points: [
      "Built a responsive tea storefront with live search, category filters, sorting, a cart with quantity controls, coupon and free-shipping rules, and a pincode delivery check.",
      "Used AI image generation to create 8 consistent product visuals and a hero banner, then reviewed every image against the real product data, rejecting AI output that did not match and optimizing the final assets for fast loading.",
      "Added an accessible quick-view drawer, newsletter validation, and an FAQ accordion with structured data for search engines.",
    ],
  },
  {
    file: "module.py",
    title: "Persistent Priority Queue — AI-Assisted Data Structure",
    tag: "Personal Project",
    code: snippet,
    tech: ["Python", "Binary Heap", "JSON Storage", "Unit Testing", "AI-Assisted Development"],
    points: [
      "Implemented a binary min-heap priority queue whose state persists between runs through file-based JSON storage, so no task is lost on restart.",
      "Supports insert, extract min/max, peek, update priority, and delete by ID, with unique IDs generated automatically.",
      "Built with AI-assisted development and verified with an 8-test unit suite; handles missing or corrupted storage files gracefully.",
    ],
  },
  {
    file: "dashboard/server.js",
    title: "E-Commerce Dashboard",
    tag: "Personal Project",
    tech: ["MongoDB", "Node.js", "Express.js", "HTML", "CSS", "JavaScript"],
    points: [
      "Engineered a secure authentication system covering 3 account flows: signup, login, and access control.",
      "Crafted a responsive UI validated across 2 device categories, desktop and mobile, for consistent usability.",
    ],
  },
  {
    file: "attendance/app.py",
    title: "Smart Attendance System with Live Face Recognition",
    tag: "Personal Project",
    tech: ["Python", "OpenCV", "Flask", "Machine Learning", "Jupyter Notebook", "Data Visualization"],
    points: [
      "Built a web-based attendance system with real-time facial recognition, reducing manual entry errors by 90%.",
      "Structured a SQL database to store user profiles and attendance logs.",
      "Developed an admin dashboard unifying 2 workflows, lecture scheduling and attendance analytics, in one interface.",
    ],
  },
];

export default function Projects() {
  return (
    <section name="Projects" className="sec">
      <div className="wrap">
        <h2 className="h2">Projects</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="panel flex flex-col !p-0 hover:border-mint/60">
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/80" /><span className="h-3 w-3 rounded-full bg-yellow-400/80" /><span className="h-3 w-3 rounded-full bg-green-400/80" />
                <span className="ml-3 truncate font-mono text-xs text-slate-400">{p.file}</span>
                {p.demo && <span className="ml-auto rounded-full bg-gradient-to-r from-mint to-violet px-2.5 py-0.5 text-xs font-bold text-ink">✦ AI</span>}
                {p.code && <span className="ml-auto rounded-full bg-gradient-to-r from-mint to-violet px-2.5 py-0.5 text-xs font-bold text-ink">✦ AI</span>}
              </div>
              {p.cover && <img src={p.cover} alt={p.title} loading="lazy" className="aspect-[16/7] w-full object-cover" />}
              {p.code && <pre className="overflow-x-auto border-b border-white/10 bg-black/30 px-5 py-4 font-mono text-xs leading-6 text-mint">{p.code}</pre>}
              <div className="flex flex-1 flex-col p-6">
                <span className="text-sm text-mint">{p.tag}</span>
                <h3 className="mt-1 font-display text-2xl font-extrabold text-white">{p.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="chip">{t}</span>)}</div>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-300 marker:text-mint">
                  {p.points.map((x) => <li key={x}>{x}</li>)}
                </ul>
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="btn mt-6 self-start">Live demo ↗</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
