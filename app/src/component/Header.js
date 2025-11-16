"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import { toggleLanguage } from "../../../lib/features/languageSlice";
import { setQuery } from "../../../lib/features/searchSlice";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const t = useTranslations("nav");
  const languageState = useSelector((state) => state.language);
  const locale = languageState?.locale || "en";
  const direction = languageState?.direction || "ltr";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Update HTML attributes when locale changes
    if (typeof document !== "undefined") {
      document.documentElement.dir = direction;
      document.documentElement.lang = locale;
    }
  }, [locale, direction]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      dispatch(setQuery(searchInput));
      router.push(`/search?q=${encodeURIComponent(searchInput)}`);
      setSearchOpen(false);
      setSearchInput("");
    }
  };

  const handleLanguageToggle = () => {
    dispatch(toggleLanguage());
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[50] px-6 py-4 transition-colors duration-300 ${
        scrolled ? "bg-[#4A2E2B]" : "bg-transparent"
      }`}
      dir={direction}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        <a className="text-xl font-bold text-white" href="/">
          LOGO
        </a>

        {/* Center Menu */}
        <div className="flex items-center flex-1 justify-center space-x-4 md:space-x-8 mx-5">
          <div className="hidden lg:flex gap-6 items-center relative">
            <a className="hover:underline text-white" href="/">
              {t("home")}
            </a>
            <a className="hover:underline text-white" href="/about">
              {t("about")}
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center hover:underline text-white">
                {t("services")}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  className="ml-1 h-4 w-4"
                >
                  <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-[1000px] bg-[#4A2E2B] text-white z-50 shadow-lg mt-2">
                  <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                      <div className="flex flex-col gap-2">
                        <a href="/services/general-legal-consultation" className="hover:text-gray-300">
                          General Legal Consultation
                        </a>
                        <a href="/services/establishing-national-foreign-companies" className="hover:text-gray-300">
                          Establishing National and Foreign Companies
                        </a>
                        <a href="/services/arbitration" className="hover:text-gray-300">Arbitration</a>
                        <a href="/services/corporate-governance-services" className="hover:text-gray-300">
                          Corporate Governance Services
                        </a>
                        <a href="/services/notarization" className="hover:text-gray-300">Notarization</a>
                        <a href="/services/estates" className="hover:text-gray-300">Estates</a>
                      </div>

                      <div className="flex flex-col gap-2">
                        <a href="/services/corporate-legal-consultation" className="hover:text-gray-300">
                          Corporate Legal Consultation
                        </a>
                        <a href="/services/defense-in-all-cases" className="hover:text-gray-300">
                          Defense in All Cases
                        </a>
                        <a href="/services/foreign-investment-services" className="hover:text-gray-300">
                          Foreign Investment Services
                        </a>
                        <a href="/services/commercial-agencies" className="hover:text-gray-300">
                          Commercial Agencies
                        </a>
                        <a href="/services/intellectual-property" className="hover:text-gray-300">
                          Intellectual Property
                        </a>
                        <a href="/services/companies-liquidation" className="hover:text-gray-300">
                          Companies Liquidation
                        </a>
                        <a href="/services/insurance" className="hover:text-gray-300">Insurance</a>
                      </div>

                      <div className="flex flex-col gap-2">
                        <a href="/services/individual-legal-consultation" className="hover:text-gray-300">
                          Individual Legal Consultation
                        </a>
                        <a href="/services/services-for-companies-institutions" className="hover:text-gray-300">
                          Services for Companies and Institutions
                        </a>
                        <a href="/services/banks-financial-institutions" className="hover:text-gray-300">
                          Banks and Financial Institutions
                        </a>
                        <a href="/services/contracts" className="hover:text-gray-300">Contracts</a>
                        <a href="/services/supporting-vision-2030" className="hover:text-gray-300">
                          Supporting Vision 2030
                        </a>
                        <a href="/services/corporate-restructuring-reorganization" className="hover:text-gray-300">
                          Corporate Restructuring and Reorganization
                        </a>
                        <a href="/services/internal-regulations-for-companies" className="hover:text-gray-300">
                          Internal Regulations for Companies
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a className="hover:underline text-white" href="/team">
              {t("team")}
            </a>
            <a className="hover:underline text-white" href="/blogs">
              {t("blogs")}
            </a>
            <a className="hover:underline text-white" href="/contact">
              {t("contact")}
            </a>
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4 relative">
          {/* Search Icon */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-white hover:text-gray-300 transition"
            aria-label={t("search")}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Search Input */}
          {searchOpen && (
            <form
              onSubmit={handleSearch}
              className="absolute right-12 top-full mt-2 bg-white rounded-md shadow-lg p-2 flex items-center gap-2"
            >
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder={t("searchPlaceholder")}
                className="px-3 py-1 text-black outline-none w-48"
                autoFocus
              />
              <button
                type="submit"
                className="bg-[#4A2E2B] text-white px-3 py-1 rounded hover:bg-[#5a3e3b]"
              >
                {t("search")}
              </button>
            </form>
          )}

          <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm border h-9 px-4 text-white border-[#cfcfcf91] hover:bg-gray-200 hover:text-black transition">
            {t("bookAppointment")}
          </button>

          <button
            onClick={handleLanguageToggle}
            className="px-3 py-1 border border-[#cfcfcf91] text-white rounded-md flex items-center gap-1 hover:bg-white hover:text-[#4A2E2B] transition"
          >
            {locale === "en" ? "English" : "العربية"}
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 448 512"
              className="ml-1 w-3 h-3"
            >
              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
