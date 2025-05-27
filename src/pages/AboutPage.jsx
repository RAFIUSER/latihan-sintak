import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import RafiNameCard from "../components/name-card/rafi";
import FazelNameCard from "../components/name-card/fazel";

import AisyahNameCard from "../components/name-card/aisyah";

import DindaNamecard from "../components/name-card/dinda";
import AyuNameCard from "../components/name-card/ayu";
import Fajar from "../components/name-card/fajar";

function AboutPage() {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen py-24 ">
        <div className="flex gap-8 flex-wrap items-center justify-center w-full px-4">
        
        <RafiNameCard />
        {/* Panggil kartu nama kamu dibawah sini..... */}

        <FazelNameCard/>


        <AisyahNameCard />


        <DindaNamecard />


<AyuNameCard/>

        <Fajar />




        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
