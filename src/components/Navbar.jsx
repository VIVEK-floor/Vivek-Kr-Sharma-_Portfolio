import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

const navItems = ["Home", "About", "Experience", "Projects", "Skills", "Achievements", "Contact"];

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const link = "cursor-pointer rounded-full px-3 py-2 text-sm text-slate-300 transition hover:text-white";
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-ink/70 py-2 pl-2 pr-4 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <img src="/photo.avif" className="h-10 w-10 rounded-full object-cover" alt="Vivek" />
          <div className="leading-tight">
            <p className="font-display text-lg font-extrabold text-white">
              Vivek<span className="text-mint"> Kumar</span> Sharma <span className="text-mint"></span>
            </p>
            <p className="text-xs text-slate-400">Full Stack Developer</p>
          </div>
        </div>
        <ul className="hidden md:flex">
          {navItems.map((t) => (
            <li key={t}>
              <Link to={t} spy smooth duration={500} offset={-90} className={link} activeClass="!bg-white/10 !text-white">
                {t}
              </Link>
            </li>
          ))}
        </ul>
        <button className="text-white md:hidden" aria-label="Menu" onClick={() => setMenu(!menu)}>
          {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </nav>
      {menu && (
        <ul className="mx-auto mt-2 max-w-5xl space-y-1 rounded-3xl border border-white/10 bg-ink/95 p-3 backdrop-blur-xl md:hidden">
          {navItems.map((t) => (
            <li key={t}>
              <Link onClick={() => setMenu(false)} to={t} smooth duration={500} offset={-90} className={link + " block text-base"}>
                {t}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
