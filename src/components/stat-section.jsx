import { Star } from "lucide-react";
import React from "react";

function StatSection() {
  return (
    <section className="py-16">
      <div className="bg-[url(/BGMI.png)] bg-fixed">
        <div className="bg-black/70">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 max-w-7xl items-center text-center mx-auto py-16">
            <div className="font-bold text-white">
              <h1 className="text-5xl">90+</h1>
              <p>Pendaftar</p>
            </div>
            <div className="font-bold text-white">
              <h1 className="text-5xl">8+</h1>
              <p>Mentor</p>
            </div>
            <div className="font-bold text-white">
              <div className="flex items-center justify-center">
                <h1 className="text-5xl">5</h1>
                <Star />
              </div>
              <p>Review & Ulasan</p>
            </div>
            <div className="font-bold text-white">
              <h1 className="text-5xl">100+</h1>
              <p>Lulusan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatSection;
