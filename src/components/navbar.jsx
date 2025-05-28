import { CodeXml, Menu } from "lucide-react";
import React, { useState } from "react";

function NavBar() {
  const [IsNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="sticky top-0 border bg-white/90 border-gray-300 z-50">
      <div className="flex max-w-7xl px-4 mx-auto justify-between h-16 items-center">
        <div className="flex items-center gap-2">
          <CodeXml size={32} />
          <h1 className="font-bold text-xl text-red-500">SINTAK.</h1>
        </div>

        {/* Dekstop Nav */}
        <ul className="hidden md:flex gap-8">
          <li>
            <a href="/" className="hover:text-red-500">
              Home
            </a>
          </li>
          <li>
            <a href="/peserta" className="hover:text-red-500">
              Peserta
            </a>
          </li>
          <li>
            <a href="/kontak" className="hover:text-red-500">
              Kontak
            </a>
          </li>
        </ul>
        <a
          href=""
          className="bg-red-500 px-4 py-2 
            text-white rounded-md hover:bg-red-400 hidden md:flex"
        >
          Daftar Sekarang
        </a>

        {/* Hamburger Menu Icon */}
        <button className="md:hidden" onClick={() => setIsNavOpen(!IsNavOpen)}>
          <Menu size={32} />
        </button>
      </div>

      {/* Nav Mobile Menu */}
      {IsNavOpen && (
        <ul className="w-full p-4 space-y-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/peserta">Peserta</a>
          </li>
          <li>
            <a href="/kontak">Kontak</a>
          </li>
        </ul>
      )}
    </header>
  );
}

export default NavBar;
