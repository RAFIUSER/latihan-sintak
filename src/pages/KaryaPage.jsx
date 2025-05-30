import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { Github, Globe } from "lucide-react";

const dataKelompok = [
  {
    preview: "./Website/kelompok1.png",
    title: "Kopi Nusantara",
    kelompok: "1",
    source: "https://github.com/Nexeeon/Nusantara-Kopi.git",
    web: "https://nusantara-kopi.vercel.app/",
  },
  {
    preview: "./Website/kelompok2.png",
    title: "REVIBES",
    kelompok: "2",
    source: "https://github.com/Lutfhfia/the-last",
    web: " ",
  },
  {
    preview: "./Website/kelompok3.png",
    title: "MIEATS",
    kelompok: "3",
    source: "https://github.com/Zell4wir/proyek-website",
    web: "https://website-umkm-zell4wirs-projects.vercel.app/",
  },
  {
    preview: "./Website/kelompok4.png",
    title: "Fine Cookies",
    kelompok: "4",
    source: "https://github.com/bilabilot/website-sintak",
    web: "https://webssite-sintak.vercel.app/",
  },
  {
    preview: "./Website/kelompok5.png",
    title: "Kantin HMJ",
    kelompok: "5",
    source: "https://github.com/Todaywyou/kelompok5.git",
    web: "https://kelompok5-five.vercel.app/",
  },
  {
    preview: "./Website/kelompok6.png",
    title: "Six Petals",
    kelompok: "6",
    source: "https://github.com/Fajar956/Project-Sintak",
    web: "https://six-petals-iota.vercel.app/",
  },
];

function KaryaPage() {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen py-12">
        <div className="flex flex-col gap-4">
          {/* Judul */}
          <div className="text-center space-y-4">
            <h1 className="font-bold text-4xl md:text-5xl">Karya Peserta</h1>
            <p className="text-gray-500">
              Hasil Karya Masing-Masing Kelompok Kelas D SINTAK Tahun 2025
            </p>
          </div>

          {/* Konten */}
          <div className="flex gap-6 flex-wrap max-w-7xl mx-auto mt-8 justify-center items-center w-full px-4">
            {dataKelompok.map((data) => (
              <div className="space-y-4 max-w-sm p-4 border border-gray-300 rounded-md">
                <img src={data.preview} alt="" className="w-full object-cover" />
                <div>
                  <h1 className="font-bold text-xl">{data.title}</h1>
                  <span className="text-sm text-gray-500">Kelompok {data.kelompok}</span>
                </div>
                <div className="flex items-center justify-between gap-2 ">
                  <a
                    href={data.source} target="blank"
                    className="border border-gray-300 w-full py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-200"
                  >
                    <Github size={16} />
                    Github
                  </a>
                  <a
                    href={data.web} target="blank"
                    className="bg-red-500 text-white w-full py-2 rounded-md flex items-center justify-center gap-2 hover:bg-red-400"
                  >
                    <Globe size={16} />
                    Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default KaryaPage;
