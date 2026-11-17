import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactCards() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 text-center">
          {/* Card 1: Email Address */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#E0F5FC] border-[4px] border-[#C7F0FD] text-[#00AEEF] flex items-center justify-center mb-5 shadow-sm">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#08344E] mb-2">
              Email Address
            </h3>
            <p className="text-[#797979] text-[15px]">
              contact@domain.com
            </p>
          </div>

          {/* Card 2: Phone Number */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#E3F8EE] border-[4px] border-[#C3F3DC] text-[#00A556] flex items-center justify-center mb-5 shadow-sm">
              <Phone className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#08344E] mb-2">
              Phone Number
            </h3>
            <p className="text-[#797979] text-[15px]">
              (316) 212-3456
            </p>
          </div>

          {/* Card 3: Our Address */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#E0F5FC] border-[4px] border-[#C7F0FD] text-[#00AEEF] flex items-center justify-center mb-5 shadow-sm">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#08344E] mb-2">
              Our Address
            </h3>
            <p className="text-[#797979] text-[15px] max-w-xs mx-auto leading-relaxed">
              Jl. Raya Seminyak No.19, Seminyak, Kuta, Kabupaten Badung, Bali.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
