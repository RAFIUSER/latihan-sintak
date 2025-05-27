import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import RafiNameCard from "../components/name-card/rafi";
import AyuNameCard from "../components/name-card/ayu";
import Fajar from "../components/name-card/fajar";
import Adith from "../components/name-card/Adith";

function AboutPage() {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen py-24 ">
        <div className="flex gap-8 flex-wrap items-center justify-center w-full px-4">
        
        <RafiNameCard />
        {/* Panggil kartu nama kamu dibawah sini..... */}

<AyuNameCard/>
<Adith />
        <Fajar />


        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
