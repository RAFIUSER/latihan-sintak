import React from 'react'

function MuteaNamecard() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div
        className="border border-gray-300 p-4
      flex flex-col rounded-lg max-w-sm gap-4 items-center"
      >
        <img
          src="/mutea.jpg"
          alt="foto"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h1 className="font-bold text-xl">Muthia Maylafayza I.</h1>
          <span className="text-sm text-gray-700">
            D3 - Manajemen Informatika
          </span>
        </div>

        <p className="text-gray-500">
          "Are you ready to grow your very own garden? Buy seeds from the shop
          when they restock, plant them, wait for them to grow, and collect the
          profits! Flex fruits and finds on friends, and have fun!"
        </p>

        <a
          href="https://instagram.com/muthianisasi"
          className="bg-black text-white text-center rounded-lg py-2"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}

export default MuteaNamecard