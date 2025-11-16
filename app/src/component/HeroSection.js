"use client";

import { useEffect, useState } from "react";
import Header from "./Header";
import ceoImage from "../../assests/Images/ceo.png";
import bgImage from "../../assests/Images/bgImage.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Default slides - will be replaced with CMS data
const defaultSlides = [
  {
    id: 1,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    bg: bgImage,
    type: "image", // 'image' or 'video'
    videoUrl: null,
  },
  {
    id: 2,
    title: "Your Next Title",
    desc: "This is your next slide description area.",
    bg: bgImage,
    type: "image",
    videoUrl: null,
  },
];

export default function HeroSection({ slides: cmsSlides = null }) {
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState(cmsSlides || defaultSlides);
  const t = useTranslations("hero");

  useEffect(() => {
    // If CMS slides are provided, use them
    if (cmsSlides && cmsSlides.length > 0) {
      setSlides(cmsSlides);
    }
  }, [cmsSlides]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[current];

  return (
    <>
      <Header />

      <section className="relative w-full h-screen overflow-hidden bg-[#4A2E2B]">
        {/* Background Media */}
        <div className="absolute inset-0 transition-opacity duration-700">
          {currentSlide.type === "video" && currentSlide.videoUrl ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-40"
            >
              <source src={currentSlide.videoUrl} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={currentSlide.bg || bgImage}
              alt={currentSlide.title}
              fill
              className="object-cover opacity-40"
              priority={current === 0}
            />
          )}
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 container mx-auto h-full px-6 flex items-center justify-between">
          {/* LEFT SIDE TEXT + ARROWS */}
          <div className="flex flex-col justify-center h-full w-full lg:w-1/2 space-y-6">
            {/* ARROWS */}
            <div className="flex items-center space-x-4 mb-8">
              <button
                onClick={goPrev}
                className="w-10 h-10 mb-4 flex items-center justify-center bg-white/10 rounded-full shadow-lg cursor-pointer text-white z-30 hover:bg-white/20 transition"
              >
                <svg
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"></path>
                </svg>
              </button>
            </div>

            {/* TEXT CONTENT */}
            <div className="text-white text-center lg:text-left">
              <div>
                <h2 className="text-4xl sm:text-6xl font-extrabold mb-4">
                  {currentSlide.title}
                </h2>

                <p className="text-sm sm:text-lg mb-6">
                  {currentSlide.desc}
                </p>

                <button className="bg-white text-[#4A2E2B] px-6 py-3 rounded-lg hover:bg-gray-200 transition">
                  <p className="font-semibold">{t("readMore")}</p>
                </button>
              </div>
            </div>

            {/* PAGINATION DOTS */}
            <div className="flex flex-col space-y-3 pl-4">
              {slides.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                    current === index ? "bg-white scale-125" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="hidden lg:flex w-1/2 justify-end">
            <div className="w-[350px] h-[350px] lg:w-[430px] lg:h-[430px]">
              <Image
                src={ceoImage}
                alt="CEO"
                className="object-cover w-full h-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
