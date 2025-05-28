import { Book, BookmarkCheck, Rocket } from "lucide-react";
import React from "react";

const dataKonten = [
  {
    ikon: Rocket,
    judul: "Pembelajaran Praktis",
    deskripsi: "Dapatkan pengalaman menarik dengan belajar di SINTAK."
  },
  {
    ikon: Book,
    judul: "Relasi yang luas",
    deskripsi: "Dapatkan teman baru di program SINTAK."
  },
  {
    ikon: BookmarkCheck,
    judul: "Penawaran Menarik",
    deskripsi: "Dapatkan Penawaran Menarik di SINTAK."
  }
];

function AboutSection() {
  return (
    <section className="py-32">
      <div className="flex flex-col px-4 items-center justify-center max-w-5xl mx-auto">
        {/* Bagian Judul */}
        <div className="text-center space-y-4">
          <h1 className="font-bold text-4xl md:text-5xl">
            Mengenal Lebih Dekat SINTAK
          </h1>
          <p className="text-gray-500">
            SINTAK adalah kelas terbuka yang diselenggarakan oleh HMJ Manajemen
            Informatika dan Google Developer Groups on Campus POLSRI untuk
            memperkenalkan mahasiswa pada pengembangan web modern menggunakan
            React dan Next.js dengan bantuan AI.
          </p>
        </div>

        {/* Bagian Kotak */}
        <div className="flex flex-col lg:flex-row items-center gap-4 mt-12">
          {dataKonten.map((data) => (
            <div className="border border-gray-300 rounded-lg px-6 py-4 w-full">
              <div className="flex flex-col items-center justify-center text-center gap-4">
                <div className="bg-red-200 rounded-full p-4">
                  <data.ikon size={32} />
                </div>
                <div>
                  <h1 className="text-xl font-semibold">{data.judul}</h1>
                  <p className="text-gray-600">{data.deskripsi}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
