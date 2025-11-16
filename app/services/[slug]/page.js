"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../../src/component/Header";
import Footer from "../../src/component/Footer";
import bgImage from "../../assests/Images/bgImage.png";


// Service content data structure
const serviceContent = {
  "general-legal-consultation": {
    title: "General Legal Consultation",
    sections: [
      {
        heading: "Overview",
        items: ["Comprehensive legal advice and guidance.", "Analysis of legal issues and solutions."]
      },
      {
        heading: "Services",
        items: ["Legal document review.", "Contract analysis and advice."]
      },
      {
        heading: "Support",
        items: ["Expert legal consultation.", "Tailored solutions for your needs."]
      }
    ]
  },
  "establishing-national-foreign-companies": {
    title: "Establishing National and Foreign Companies",
    sections: [
      {
        heading: "Overview",
        items: ["Company formation and registration services.", "Support for both national and foreign entities."]
      },
      {
        heading: "Registration",
        items: ["Complete registration process.", "Documentation and compliance support."]
      },
      {
        heading: "Compliance",
        items: ["Regulatory compliance assistance.", "Ongoing corporate support."]
      }
    ]
  },
  "arbitration": {
    title: "Arbitration",
    sections: [
      {
        heading: "Overview",
        items: ["Alternative dispute resolution services.", "Expert arbitration representation."]
      },
      {
        heading: "Process",
        items: ["Arbitration proceedings management.", "Mediation and settlement support."]
      },
      {
        heading: "Expertise",
        items: ["Experienced arbitration lawyers.", "Successful dispute resolution."]
      }
    ]
  },
  "corporate-governance-services": {
    title: "Corporate Governance Services",
    sections: [
      {
        heading: "Overview",
        items: ["Corporate governance framework development.", "Board structure and compliance."]
      },
      {
        heading: "Framework",
        items: ["Governance policies and procedures.", "Board meeting support."]
      },
      {
        heading: "Compliance",
        items: ["Regulatory compliance monitoring.", "Best practices implementation."]
      }
    ]
  },
  "notarization": {
    title: "Notarization",
    sections: [
      {
        heading: "Overview",
        items: ["Official document notarization services.", "Legal document authentication."]
      },
      {
        heading: "Services",
        items: ["Document notarization.", "Legal authentication."]
      },
      {
        heading: "Support",
        items: ["Quick and reliable service.", "Official certification."]
      }
    ]
  },
  "estates": {
    title: "Estates",
    sections: [
      {
        heading: "Overview",
        items: ["Estate planning and management.", "Inheritance and will services."]
      },
      {
        heading: "Planning",
        items: ["Estate planning strategies.", "Will drafting and execution."]
      },
      {
        heading: "Management",
        items: ["Estate administration.", "Probate services."]
      }
    ]
  },
  "corporate-legal-consultation": {
    title: "Corporate Legal Consultation",
    sections: [
      {
        heading: "Overview",
        items: ["Specialized corporate legal advice.", "Business law expertise."]
      },
      {
        heading: "Services",
        items: ["Corporate structure advice.", "Business compliance guidance."]
      },
      {
        heading: "Expertise",
        items: ["Corporate law specialists.", "Strategic business advice."]
      }
    ]
  },
  "defense-in-all-cases": {
    title: "Defense in All Cases",
    sections: [
      {
        heading: "Overview",
        items: ["Comprehensive legal defense services.", "Representation in all legal matters."]
      },
      {
        heading: "Defense",
        items: ["Criminal defense representation.", "Civil litigation defense."]
      },
      {
        heading: "Support",
        items: ["Experienced defense attorneys.", "Strong legal representation."]
      }
    ]
  },
  "foreign-investment-services": {
    title: "Foreign Investment Services",
    sections: [
      {
        heading: "Overview",
        items: ["Foreign investment facilitation.", "Investment structure and compliance."]
      },
      {
        heading: "Services",
        items: ["Investment setup and registration.", "Regulatory compliance for foreign investors."]
      },
      {
        heading: "Support",
        items: ["Expert investment guidance.", "Complete investment support."]
      }
    ]
  },
  "commercial-agencies": {
    title: "Commercial Agencies",
    sections: [
      {
        heading: "Overview",
        items: ["Commercial agency registration and management.", "Agency agreement services."]
      },
      {
        heading: "Registration",
        items: ["Agency registration process.", "Documentation and compliance."]
      },
      {
        heading: "Management",
        items: ["Ongoing agency support.", "Compliance monitoring."]
      }
    ]
  },
  "intellectual-property": {
    title: "Intellectual Property",
    sections: [
      {
        heading: "Overview",
        items: ["IP protection and registration services.", "Trademark and patent support."]
      },
      {
        heading: "Protection",
        items: ["Trademark registration.", "Patent filing and protection."]
      },
      {
        heading: "Enforcement",
        items: ["IP rights enforcement.", "Infringement protection."]
      }
    ]
  },
  "companies-liquidation": {
    title: "Companies Liquidation",
    sections: [
      {
        heading: "Overview",
        items: ["Company liquidation and winding up services.", "Voluntary and involuntary liquidation."]
      },
      {
        heading: "Process",
        items: ["Liquidation procedures.", "Asset distribution."]
      },
      {
        heading: "Compliance",
        items: ["Regulatory compliance.", "Creditor management."]
      }
    ]
  },
  "insurance": {
    title: "Insurance",
    sections: [
      {
        heading: "Overview",
        items: ["Insurance law and claims services.", "Insurance policy review and advice."]
      },
      {
        heading: "Services",
        items: ["Insurance claim assistance.", "Policy analysis and advice."]
      },
      {
        heading: "Support",
        items: ["Insurance dispute resolution.", "Expert insurance guidance."]
      }
    ]
  },
  "individual-legal-consultation": {
    title: "Individual Legal Consultation",
    sections: [
      {
        heading: "Overview",
        items: ["Personal legal advice and services.", "Individual legal representation."]
      },
      {
        heading: "Services",
        items: ["Personal legal consultation.", "Document review and advice."]
      },
      {
        heading: "Support",
        items: ["Personalized legal solutions.", "Expert individual guidance."]
      }
    ]
  },
  "services-for-companies-institutions": {
    title: "Services for Companies and Institutions",
    sections: [
      {
        heading: "Overview",
        items: ["Comprehensive services for businesses and institutions.", "Corporate and institutional support."]
      },
      {
        heading: "Services",
        items: ["Corporate legal services.", "Institutional compliance support."]
      },
      {
        heading: "Support",
        items: ["Ongoing business support.", "Institutional guidance."]
      }
    ]
  },
  "banks-financial-institutions": {
    title: "Banks and Financial Institutions",
    sections: [
      {
        heading: "Overview",
        items: ["Specialized services for banks and financial institutions.", "Financial sector legal expertise."]
      },
      {
        heading: "Services",
        items: ["Banking law compliance.", "Financial institution support."]
      },
      {
        heading: "Compliance",
        items: ["Regulatory compliance.", "Financial sector expertise."]
      }
    ]
  },
  "contracts": {
    title: "Contracts",
    sections: [
      {
        heading: "Overview",
        items: ["Contract drafting and review services.", "Commercial and business contracts."]
      },
      {
        heading: "Drafting",
        items: ["Contract preparation.", "Legal document drafting."]
      },
      {
        heading: "Review",
        items: ["Contract analysis and review.", "Risk assessment."]
      }
    ]
  },
  "supporting-vision-2030": {
    title: "Supporting Vision 2030",
    sections: [
      {
        heading: "Overview",
        items: ["Legal services supporting Vision 2030 initiatives.", "Strategic development support."]
      },
      {
        heading: "Services",
        items: ["Strategic legal planning.", "Vision 2030 compliance."]
      },
      {
        heading: "Support",
        items: ["Development project support.", "Strategic guidance."]
      }
    ]
  },
  "corporate-restructuring-reorganization": {
    title: "Corporate Restructuring and Reorganization",
    sections: [
      {
        heading: "Overview",
        items: ["Corporate restructuring services.", "Business reorganization and restructuring."]
      },
      {
        heading: "Restructuring",
        items: ["Corporate structure changes.", "Business reorganization."]
      },
      {
        heading: "Support",
        items: ["Restructuring planning.", "Implementation support."]
      }
    ]
  },
  "internal-regulations-for-companies": {
    title: "Internal Regulations for Companies",
    sections: [
      {
        heading: "Overview",
        items: ["Drafting and reviewing internal company regulations."]
      },
      {
        heading: "Drafting",
        items: ["Preparing internal rules and procedures."]
      },
      {
        heading: "Compliance",
        items: ["Ensuring adherence to company policies and regulations."]
      }
    ]
  }
};

export default function ServicePage({ params }) {
  const router = useRouter();
  const [slug, setSlug] = useState("");
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    // Handle params as either a Promise or direct value (Next.js 15+ compatibility)
    const getParams = async () => {
      try {
        // First try synchronous access
        if (params && params.slug) {
          const slugValue = params.slug;
          console.log("Slug from params (sync):", slugValue);
          setSlug(slugValue);
          
          // Get service data or use default
          const data = serviceContent[slugValue] || {
            title: slugValue
              ? slugValue
                  .split("-")
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(" ")
              : "Service",
            sections: [
              {
                heading: "Overview",
                items: ["We offer the best legal advice tailored to your needs."]
              }
            ]
          };
          setServiceData(data);
          return;
        }
        
        // If params is a Promise, await it
        if (params instanceof Promise) {
          const resolvedParams = await params;
          const slugValue = resolvedParams?.slug || "";
          console.log("Slug from params (async):", slugValue);
          setSlug(slugValue);
          
          // Get service data or use default
          const data = serviceContent[slugValue] || {
            title: slugValue
              ? slugValue
                  .split("-")
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(" ")
              : "Service",
            sections: [
              {
                heading: "Overview",
                items: ["We offer the best legal advice tailored to your needs."]
              }
            ]
          };
          setServiceData(data);
        } else {
          console.warn("Params is not available:", params);
          setSlug("");
          setServiceData({
            title: "Service",
            sections: [
              {
                heading: "Overview",
                items: ["We offer the best legal advice tailored to your needs."]
              }
            ]
          });
        }
      } catch (error) {
        console.error("Error resolving params:", error);
        setSlug("");
        setServiceData({
          title: "Service",
          sections: [
            {
              heading: "Overview",
              items: ["We offer the best legal advice tailored to your needs."]
            }
          ]
        });
      }
    };
    
    getParams();
  }, [params]);

  // Show loading state while params are being resolved
  if (!serviceData || !slug) {
    return (
      <div className="flex flex-col min-h-screen bg-zinc-50 font-sans">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-[#4A2E2B]">Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans">
      <Header />
      
      {/* Hero Section */}
      <div style={{padding:"60px", height:"50vh"}} className="relative w-full h-[100vh] max-h-[600px] mb-12 p-5">
        <Image
          alt="Hero Background"
          src={bgImage}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        
        <div
          className="absolute top-1/2 transform -translate-y-1/2 max-w-lg z-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-40 md:right-auto w-[90%] md:w-auto"
          dir="ltr"
        >
          <h2 className="text-white width-full text-4xl md:text-6xl font-bold mb-4 text-center md:text-left">
            {serviceData.title}
          </h2>
        </div>
      </div>

      {/* Content Section */}
      <section
        className="max-w-6xl mx-auto p-8 font-sans text-[#4A2E2B] relative min-h-[600px]"
        dir="ltr"
      >
      

        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center gap-2 text-lg text-[#4A2E2B] hover:underline"
          aria-label="Back"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="inline-block transition-transform duration-200 rotate-0"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              d="M0 0h24v24H0V0z"
              opacity=".87"
            ></path>
            <path d="M17.51 3.87 15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"></path>
          </svg>
          Back
        </button>

        <h1 className="text-3xl font-semibold mb-6" style={{ textAlign: "left" }}>
          {serviceData.title}
        </h1>

        {serviceData.sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-4 max-w-4xl mb-6"
            style={{ textAlign: "left" }}
          >
            <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
            <div className="text-lg space-y-2">
              {section.items.map((item, itemIndex) => (
                <p key={itemIndex} className="flex items-center gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="text-[#4A2E2B]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"></path>
                  </svg>
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}

        <p className="text-lg max-w-4xl leading-relaxed mt-8">
          We offer the best legal advice tailored to your needs.
        </p>
      </section>

      <Footer />
    </div>
  );
}
