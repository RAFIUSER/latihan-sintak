import { Instagram, Youtube } from "lucide-react";
import React from "react";

function FazelNameCard() {
  return (
    <div className="border border-gray-300 p-4 rounded-lg max-w-sm">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <img
            src="SAVE_20250506_223525.jpg"
            alt="fazel"
            className="w-18 rounded-full border border-gray-300 hover:animate-spin"
          />
          <div>
            <h1 className="font-bold text-lg">Fazel Mawla</h1>
            <h2 className="text-sm">Manajemen Informatika</h2>
          </div>
        </div>
        <p className="text-gray-500">
          "Halo, perkenalkan nama saya Fazel Mawla, saya suka membuat konten
          tentang teknologi dan pemrograman. Salam kenal semuanya!"
        </p>
        <a
          href="https://www.youtube.com/@pitaks_"
          target="blank"
          className="flex items-center justify-center gap-2 bg-black text-white py-2 rounded-md animate-bounce"
        >
          <Youtube size={18} />
          Channel Youtube
        </a>
      </div>
    </div>
  );
}

export default FazelNameCard;
