import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="wrap flex flex-col items-center gap-6 text-slate-400">
        <div className="flex gap-5 text-white">
          <FaFacebook size={22} /><FaTwitter size={22} /><FaInstagram size={22} /><FaLinkedinIn size={22} />
        </div>
        <div className="text-center text-sm">
          <p>&copy; All rights reserved.</p>
          <p className="mt-1">THANK YOU</p>
        </div>
      </div>
    </footer>
  );
}
