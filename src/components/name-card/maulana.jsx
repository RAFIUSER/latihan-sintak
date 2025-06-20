import { Instagram } from "lucide-react";
import React from "react";

function MaulanaNameCard() {
  return (
    <div className="border border-gray-300 p-4 rounded-lg max-w-sm">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <img
            src="maulana.jpg"
            alt="Maulana"
            className="w-18 rounded-full border border-gray-300 hover:animate-spin"
          />
          <div>
            <h1 className="font-bold text-lg">Maulana fajar pratama</h1>
            <h2 className="text-sm">Manajemen Informatika</h2>
          </div>
        </div>
        <p className="text-gray-500">
          "Halo, perkenalkan nama saya Maulana fajar pratama saya adalah salah
          satu Peserta dari SINTAK 2025, Saya Dari kelas 2MIM. Salam kenal
          semuanya..."
        </p>
        <a
          href="https://www.instagram.com/maulanafajarjunaedi?igsh=a2FhMWFtMTduemg4"
          target="blank"
          className="flex items-center justify-center gap-2 bg-black text-white py-2 rounded-md animate-bounce"
        >
          <Instagram size={18} />
          Instagram
        </a>
      </div>
    </div>
  );
}

export default MaulanaNameCard;
