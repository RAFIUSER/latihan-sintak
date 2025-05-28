import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import RafiNameCard from "../components/name-card/rafi";
import Andre from "../components/name-card/Andre";
import JehanNameCard from "../components/name-card/jehan";
import NizelNamecard from "../components/name-card/nizel";
import MuteaNamecard from "../components/name-card/mutea";
import FazelNameCard from "../components/name-card/fazel";
import AisyahNameCard from "../components/name-card/aisyah";
import DindaNamecard from "../components/name-card/dinda";
import AyuNameCard from "../components/name-card/ayu";
import Fajar from "../components/name-card/fajar";
import Adith from "../components/name-card/Adith";
import RiaNameCard from "../components/name-card/ria";
import AndinNameCard from "../components/name-card/andin";
import AbrorNameCard from "../components/name-card/abi";
import Calvin from "../components/name-card/calvin";
import NabilaNameCard from "../components/name-card/bila";
import MaulanaNameCard from "../components/name-card/maulana";
// 17

function PesertaPage() {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen py-24 ">
        <div className="flex gap-8 flex-wrap items-center justify-center w-full px-4">
        
        <RafiNameCard />

        {/* Panggil kartu nama kamu dibawah sini..... */}
        <AyuNameCard/>
        <Adith />
        <MaulanaNameCard />
        <NizelNamecard />
        <AndinNameCard />
        <AbrorNameCard />
        <NabilaNameCard />
        <Calvin />
        <Andre />
        <JehanNameCard />
        <MuteaNamecard />
        <FazelNameCard/>
        <AisyahNameCard />
        <DindaNamecard />
        <RiaNameCard/>
        <Fajar />

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PesertaPage;
