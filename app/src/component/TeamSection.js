"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import whatsappIcon from "../../assests/Images/whatsappIcon.png";
import phoneIcon from "../../assests/Images/phoneIcon.png";
import mailIcon from "../../assests/Images/mailIcon.png";
import ceoImage from "../../assests/Images/ceo.png";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    image: ceoImage,
    social: {
      whatsapp: whatsappIcon,
      phone: phoneIcon,
      email: mailIcon,
    },
  },
  {
    name: "Jane Smith",
    role: "Designer",
    image: ceoImage,
    social: {
      whatsapp: whatsappIcon,
      phone: phoneIcon,
      email: mailIcon,
    },
  },
  {
    name: "Alice Johnson",
    role: "Developer",
    image: ceoImage,
    social: {
      whatsapp: whatsappIcon,
      phone: phoneIcon,
      email: mailIcon,
    },
  },
];

const TeamSection = () => {
  const t = useTranslations("team");
  
  return (
    <section className="py-16 bg-[#F3F3F3] relative">
      <div className="max-w-7xl mx-auto px-4 text-center relative">
        <h2 className="text-3xl font-bold mb-4 text-[#4A2E2B]">
          {t("title")}
        </h2>
        <p className="text-gray-600 mb-12">
          {t("description")}
        </p>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200 z-10">
            <svg
              stroke="#4A2E2B"
              fill="#4A2E2B"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
            </svg>
          </button>

          {/* Team Members */}
          <div className="flex gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden p-4 flex flex-col items-center transition-transform hover:scale-105"
              >
                <div className="relative w-64 h-64 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#4A2E2B]">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{member.role}</p>
                <div className="flex space-x-4">
                  <a href="#">
                    <Image
                      src={member.social.whatsapp}
                      alt="WhatsApp"
                      width={24}
                      height={24}
                      className="hover:opacity-80"
                    />
                  </a>
                  <a href="#">
                    <Image
                      src={member.social.phone}
                      alt="Phone"
                      width={24}
                      height={24}
                      className="hover:opacity-80"
                    />
                  </a>
                  <a href="#">
                    <Image
                      src={member.social.email}
                      alt="Email"
                      width={24}
                      height={24}
                      className="hover:opacity-80"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200 z-10">
            <svg
              stroke="#4A2E2B"
              fill="#4A2E2B"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
