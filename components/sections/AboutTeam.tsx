import React from "react";
import Image from "next/image";
import UnderlineHighlight from "@/components/ui/UnderlineHighlight";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  accentColor: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Daniel Gallego",
    role: "Risk Manager",
    image:
      "/images/confident-entrepreneur-posing-for-photography-2021-08-30-02-28-45-utc.png",
    accentColor: "#00AEEF",
  },
  {
    name: "Eugenia Anders",
    role: "IT Manager",
    image:
      "/images/portrait-of-a-businessman-with-a-smile-in-a-corpor-2022-12-07-22-59-22-utc.png",
    accentColor: "#00A556",
  },
  {
    name: "Yanis Petros",
    role: "Investment Banker",
    image: "/images/Untitled-1.png",
    accentColor: "#00AEEF",
  },
  {
    name: "Ruveni Ellawala",
    role: "Financial Planner",
    image:
      "/images/business-finance-and-people-concept-professional-2022-12-16-05-44-40-utc.png",
    accentColor: "#00A556",
  },
];

export default function AboutTeam() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#08344E] leading-[1.2]">
            Our professional <UnderlineHighlight color="#00AEEF">team.</UnderlineHighlight>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center text-center"
            >
              {/* Image Container with Soft Mint/Cyan Gradient */}
              <div className="w-full h-[340px] sm:h-[360px] rounded-3xl bg-gradient-to-b from-[#E0F5FC] to-[#E3F8EE] border border-[#C7F0FD]/60 overflow-hidden flex items-end justify-center pt-6 px-3 shadow-sm group-hover:shadow-md transition-all duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={700}
                  height={1015}
                  className="w-full h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Body */}
              <div className="mt-5">
                <h4 className="text-xl font-bold text-[#08344E] group-hover:text-[#00AEEF] transition-colors">
                  {member.name}
                </h4>
                <p
                  className="text-sm font-semibold mt-1"
                  style={{ color: member.accentColor }}
                >
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
