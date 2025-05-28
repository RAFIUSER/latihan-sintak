import React from "react";

function Timeline() {
  return (
    <div className="py-12 lg:py-32">
      <div className="px-4 mx-auto max-w-5xl gap-12 flex items-center flex-col">
        
        {/* Bagian Judul */}
        <div className="text-center space-y-2">
          <h1 className="font-bold text-4xl md:text-5xl">
            Timeline SINTAK
          </h1>
          <p className="text-gray-500">
            Alur Pembelajaran SINTAK.
          </p>
        </div>

        {/* Bagian Timeline */}
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">Senin, 19 Mei 2025</time>
              <div className="text-lg font-black">Pengenalan React</div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Officiis, quibusdam?
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic">Selasa, 20 Mei 2025</time>
              <div className="text-lg font-black">Pengenalan Tailwind CSS</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              libero dolores! Dolore, laborum et! Porro magni inventore sapiente
              cumque iure!
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">Rabu, 21 Mei 2025</time>
              <div className="text-lg font-black">Studi Kasus Website</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              veritatis?
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic">Kamis, 22 Mei 2025</time>
              <div className="text-lg font-black">React Router</div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
              quasi?
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">Jumat, 23 Mei 2025</time>
              <div className="text-lg font-black">Deployment</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              est ex animi culpa expedita quidem, alias obcaecati perferendis,
              error temporibus, esse voluptatum sunt illo aliquid corrupti
              voluptates quo debitis rem!
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Timeline;
