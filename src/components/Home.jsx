import React from "react";
import { Link } from "react-scroll";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin, FaEnvelope, FaReact } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

const socials = [
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/vivek-kumar-sharma-844487270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
  { Icon: FaEnvelope, href: "mailto:vivekkumarsharma6388@gmail.com", label: "Email" },
  { Icon: IoLogoYoutube, href: "https://www.youtube.com/@ItViewpoint-v", label: "YouTube" },
  { Icon: FaGithub, href: "https://github.com/VIVEK-floor", label: "GitHub" },
];
const stack = [SiMongodb, SiExpress, FaReact, FaNodeJs];
const stats = [["6 mo", "Internship"], ["4", "Projects built"], ["3", "Certifications"]];
const tech = ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "PHP", "Laravel", "REST APIs", "JavaScript", "Git", "Postman", "Python", "OpenCV"];

export default function Home() {
  const d = (ms) => ({ animationDelay: ms + "ms" });
  return (
    <section name="Home" className="relative overflow-hidden pt-32 md:pt-44">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-violet/25 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-mint/15 blur-[110px]" />
      <span className="bob pointer-events-none absolute left-[5%] top-[30%] hidden font-mono text-3xl text-mint/25 md:block">&lt;/&gt;</span>
      <span className="bob pointer-events-none absolute right-[6%] top-[62%] hidden font-mono text-3xl text-violet/40 md:block" style={{ animationDelay: "-2s" }}>{"{ AI }"}</span>
      <span className="bob pointer-events-none absolute left-[46%] top-[18%] hidden font-mono text-2xl text-white/15 md:block" style={{ animationDelay: "-3s" }}>01010</span>
      <div className="wrap relative flex flex-col items-center gap-12 md:flex-row md:gap-16">
        <div className="order-2 md:order-1 md:w-1/2">
          <span className="rise inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-200" style={d(0)}>
            <span className="relative flex h-2 w-2">
              <span className="ping2 absolute inline-flex h-full w-full rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            Open to full-stack roles
          </span>
          <h1 className="rise mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl" style={d(120)}>
            Hello, I&apos;m a <ReactTyped className="bg-gradient-to-r from-mint to-violet bg-clip-text text-transparent" strings={["Full Stack Developer", "MERN Developer", "PHP Developer"]} typeSpeed={40} backSpeed={50} loop />
          </h1>
          <p className="rise mt-6 max-w-xl leading-relaxed text-slate-300" style={d(240)}>
            “Full Stack Developer with 6 months of internship experience building a production-style web application using Node.js, PHP and MySQL. I work across the MERN stack and computer vision, and I am targeting full-stack roles at product-based engineering teams.”
          </p>
          <div className="rise mt-8 flex flex-wrap gap-3" style={d(320)}>
            <a href="/assests/Vivek_Kumar_Sharma_Resume.pdf" download className="btn">Download Resume</a>
            <Link to="Contact" smooth duration={500} offset={-90} className="btn-ghost cursor-pointer">Get in touch</Link>
          </div>
          <dl className="rise mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6" style={d(400)}>
            {stats.map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl font-extrabold text-white">{n}</dt>
                <dd className="text-sm text-slate-400">{l}</dd>
              </div>
            ))}
          </dl>
          <div className="rise mt-8 flex flex-wrap gap-x-12 gap-y-6" style={d(480)}>
            <div>
              <h2 className="mb-3 font-semibold text-white">Available on</h2>
              <ul className="flex gap-3">
                {socials.map(({ Icon, href, label }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:-translate-y-0.5 hover:border-mint hover:text-mint">
                      <Icon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-3 font-semibold text-white">Worked With..</h2>
              <ul className="flex gap-3">
                {stack.map((Icon, i) => (
                  <li key={i} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-xl text-mint"><Icon /></li>
                ))}
              </ul>
            </div>
          </div>
        </div>curre
        <div className="rise relative order-1 md:order-2 md:w-1/2" style={d(200)}>
          <div className="relative mx-auto w-64 md:w-96">
            <div className="orbit pointer-events-none absolute -inset-8 rounded-full border border-dashed border-white/15">
              {[[FaReact, "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"], [FaNodeJs, "right-0 top-1/2 translate-x-1/2 -translate-y-1/2"], [SiMongodb, "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"], [SiExpress, "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"]].map(([Icon, pos], i) => (
                <span key={i} className={"absolute " + pos}>
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-ink text-xl text-mint"><Icon /></span>
                </span>
              ))}
            </div>
            <div className="rounded-full bg-gradient-to-br from-mint to-violet p-1.5 shadow-[0_0_80px_-10px_rgba(139,124,255,.5)]">
              <img src="/photo.avif" alt="Vivek Kumar Sharma" className="aspect-square w-full rounded-full object-cover" />
            </div>
          </div>
          <div className="bob absolute -left-1 bottom-6 rounded-2xl border border-white/10 bg-ink/80 px-4 py-2 text-sm backdrop-blur-xl md:left-4">
            <span className="block font-semibold text-white">MERN · PHP · MySQL</span>
            <span className="text-slate-400">Core stack</span>
          </div>
          <div className="bob absolute -right-1 top-6 rounded-2xl border border-white/10 bg-ink/80 px-4 py-2 text-sm backdrop-blur-xl md:right-4" style={{ animationDelay: "-2.5s" }}>
            <span className="block font-semibold text-white">Prayagraj, India</span>
            <span className="text-slate-400">B.Tech CSE &apos;25</span>
          </div>
        </div>
      </div>
      <div className="relative mt-16 overflow-hidden border-y border-white/10 py-5 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="marquee gap-3">
          {[...tech, ...tech].map((t, i) => (
            <span key={i} className="mx-1.5 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-slate-300">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
