"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { setResults, setIsSearching } from "../../lib/features/searchSlice";
import Header from "../src/component/Header";
import Footer from "../src/component/Footer";
import Link from "next/link";

// Mock data - replace with CMS API calls
const mockTeam = [
  { id: 1, name: "John Doe", role: "CEO", slug: "john-doe" },
  { id: 2, name: "Jane Smith", role: "Designer", slug: "jane-smith" },
];

const mockServices = [
  { id: 1, title: "General Legal Consultation", slug: "general-legal-consultation" },
  { id: 2, title: "Corporate Legal Consultation", slug: "corporate-legal-consultation" },
];

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const dispatch = useDispatch();
  const { results, isSearching } = useSelector((state) => state.search);
  const [teamResults, setTeamResults] = useState([]);
  const [serviceResults, setServiceResults] = useState([]);

  useEffect(() => {
    if (query) {
      dispatch(setIsSearching(true));
      
      // Simulate search - replace with actual API call
      setTimeout(() => {
        const teamMatches = mockTeam.filter(
          (member) =>
            member.name.toLowerCase().includes(query.toLowerCase()) ||
            member.role.toLowerCase().includes(query.toLowerCase())
        );
        
        const serviceMatches = mockServices.filter((service) =>
          service.title.toLowerCase().includes(query.toLowerCase())
        );

        setTeamResults(teamMatches);
        setServiceResults(serviceMatches);
        
        dispatch(setResults({
          team: teamMatches,
          services: serviceMatches,
        }));
        dispatch(setIsSearching(false));
      }, 500);
    }
  }, [query, dispatch]);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans">
      <Header />
      
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-16 mt-20">
        <h1 className="text-3xl font-bold mb-8 text-[#4A2E2B]">
          Search Results for: "{query}"
        </h1>

        {isSearching ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Searching...</p>
          </div>
        ) : (
          <>
            {/* Team Results */}
            {teamResults.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-[#4A2E2B]">Team Members</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {teamResults.map((member) => (
                    <div
                      key={member.id}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                    >
                      <h3 className="text-xl font-semibold text-[#4A2E2B] mb-2">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{member.role}</p>
                      <Link
                        href={`/team/${member.slug}`}
                        className="text-[#4A2E2B] hover:underline"
                      >
                        View Profile →
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Services Results */}
            {serviceResults.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-[#4A2E2B]">Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {serviceResults.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition block"
                    >
                      <h3 className="text-xl font-semibold text-[#4A2E2B] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">View Service →</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* No Results */}
            {teamResults.length === 0 && serviceResults.length === 0 && query && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  No results found for "{query}"
                </p>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col min-h-screen bg-zinc-50 font-sans">
        <Header />
        <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-16 mt-20">
          <div className="text-center py-12">
            <p className="text-gray-600">Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}

