import React from "react";

function Namecard() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border border-black-300 p-2 flex flex-col rounded-lg max-w-sm gap-2">
        <img
          src="./nzl.jpg"
          alt="logo"
          className="w-18 rounded-full border border-gray-300 hover:animate-spin
        "
        />
        <div>
          <h1 className="font-bold text-lg">Nizelia Khairunisa</h1>
          <span className="text-shadow-amber-950 text-sm">
            Mahasiswa Politeknik Negeri Sriwijaya
          </span>
        </div>

        <p className="text-gray-500">
          "Halo salam kenal,follow instagram aku ya!"
        </p>

        <a
          href="https://www.instagram.com/"
          target="blank"
          className="flex items-center justify-center gap-2 bg-black text-white py-2 rounded-md animate-bounce"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}

export default Namecard;
