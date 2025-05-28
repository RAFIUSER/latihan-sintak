import { Calendar, Clock, MapPin } from "lucide-react";

function HeroSection() {
  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-4 lg:flex-row items-center">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-5xl font-bold">
            Kembangkan Skill Web Development-mu Dengan Mengikuti Kelas Terbuka
            SINTAK.
          </h1>
          <p className="text-gray-500 text-xl">
            Pelajari Materi Pengembangan Website Dengan React dan NextJS Bersama
            HMJ Manajemen Informtika dan Google Developer Group on Campus
            Polsri.
          </p>
          <div className="flex gap-4 flex-col text-center md:flex-row">
            <a href="" className="bg-red-500 px-4 py-2 text-white rounded-md">
              Daftar Sekarang
            </a>
            <a href="" className="border border-gray-400 px-4 py-2 rounded-md">
              Pelajari Selengkapnya
            </a>
          </div>
          <div className="flex gap-2">
            <Calendar />
            <p>Rabu, 21 Mei 2025</p>
            <Clock />
            <p>13.30 - 14.30</p>
            <MapPin />
            <p>Kampus Polsri</p>
          </div>
        </div>
        <img className="w-120" src="./profile.png" alt="" />
      </div>
    </section>
  );
}

export default HeroSection