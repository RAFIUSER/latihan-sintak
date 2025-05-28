import React from 'react'
import { Instagram } from "lucide-react";

function DindaNamecard() {
  return (
    <div className="border border-gray-300 p-4 rounded-lg max-w-sm">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img
                src="./Adin.jpg"
                alt="rafi"
                className="w-18 rounded-full border border-gray-300 hover:animate-spin"
              />
              <div>
                <h1 className="font-bold text-lg">Adinda Rahmalia</h1>
                <h2 className="text-sm">Manajemen Informatika</h2>
              </div>
            </div>
            <p className="text-gray-500">
              "Halo, perkenalkan nama saya Adinda Rahmalia Salam kenal semuanya...  "
            </p>
            <a
              href="https://www.instagram.com/ddindae_/" target="blank"
              className="flex items-center justify-center gap-2 bg-black text-white py-2 rounded-md animate-bounce"
            >
                <Instagram size={18} />
              Instagram
            </a>
          </div>
        </div>
  )
}

export default DindaNamecard