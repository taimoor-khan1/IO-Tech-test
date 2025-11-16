"use client";

import Image from "next/image";
import ceoImage from "../../assests/Images/ceo.png";


export default function Testimonials() {
  return (
    <section
      dir="ltr"
      className="bg-[#532F1F] text-white py-16 px-0 font-sans relative w-full overflow-x-hidden min-h-[1080px] lg:min-h-[600px]"
    >
      <div className="max-w-7xl mx-auto relative w-[90vw]">
        <h2 className="text-5xl mb-6 font-semibold text-center md:text-left sm:text-center">
          What our clients are saying
        </h2>
     <p className="text-gray-300 text-[18px] font-normal leading-[1] text-center md:text-left sm:text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
  Our clients range from individual investors, to local, international as well as Fortune 500 companies. Our clients range from individual investors, to local, international as well as Fortune 500 companies.
</p>


        <div className="mb-20 mt-5 relative">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
            <div className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={ceoImage}
                alt="Mohammed Saif"
                width={360}
                height={360}
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </div>

            <div className="flex-grow max-w-4xl flex flex-col justify-between md:text-left sm:text-center">
              <div>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  "My experience with Al Safar and Partners was excellent from
                  the very first consultation. The team listened carefully to my
                  goals, provided clear advice, and helped me make the right
                  decisions with confidence. Their responsiveness and
                  transparency at every stage made the process smooth and
                  stress-free, leaving me reassured that my interests were always
                  a priority."
                </p>
                <h4 className="font-bold text-xl">Mohammed Saif</h4>
                <span className="text-gray-400 text-base">CEO/Company</span>
              </div>
            </div>
          </div>

          {/* Desktop Arrows */}
          <div className="absolute top-[400px] right-0 transform -translate-y-1/2 hidden lg:flex flex-row gap-4 z-20">
            <button className="bg-white hover:bg-black hover:text-white text-black p-3 rounded-full transition flex items-center justify-center w-12 h-12 shadow-lg">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 15 15"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <button
              className="bg-white/10 cursor-not-allowed text-white p-3 rounded-full transition flex items-center justify-center w-12 h-12 shadow-lg"
              disabled
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 15 15"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Arrows */}
        <div className="flex lg:hidden justify-center gap-6 mt-8 bottom-10 lg:absolute w-full">
          <button className="bg-white hover:bg-black hover:text-white text-black p-3 rounded-full transition flex items-center justify-center w-12 h-12 shadow-lg">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 15 15"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <button
            className="bg-white/10 cursor-not-allowed text-white p-3 rounded-full transition flex items-center justify-center w-12 h-12 shadow-lg"
            disabled
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 15 15"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
