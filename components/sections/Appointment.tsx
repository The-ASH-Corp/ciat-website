"use client";

import React, { useState } from "react";
import { CheckCircle, MapPin, Phone } from "lucide-react";
import UnderlineHighlight from "@/components/ui/UnderlineHighlight";

export default function Appointment() {
  const [appointmentSubmitted, setAppointmentSubmitted] = useState(false);

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppointmentSubmitted(true);
    setTimeout(() => setAppointmentSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-[#E0F5FC] via-[#E8F8F5] to-[#E3F8EE] overflow-hidden"
    >
      {/* Soft decorative radial glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#00AEEF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#00A556]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Make Appointment Form Card with #00AEEF to #00A556 Gradient Border */}
          <div className="lg:col-span-6">
            <div className="p-2 sm:p-2.5 rounded-[32px] bg-gradient-to-b from-[#00AEEF] to-[#00A556] shadow-2xl">
              <div className="bg-white rounded-[24px] p-8 sm:p-10 shadow-sm">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#08344E] mb-2">
                  Make Appointment
                </h3>
                <p className="text-sm text-[#797979] mb-8">
                  Schedule a private session with our senior investment
                  specialists.
                </p>

                {appointmentSubmitted ? (
                  <div className="bg-[#E3F8EE] text-[#08344E] p-6 rounded-2xl border border-[#00A556]/40 text-center animate-fade-in">
                    <CheckCircle className="w-10 h-10 text-[#00A556] mx-auto mb-2" />
                    <h4 className="font-bold text-lg">Thank You!</h4>
                    <p className="text-sm text-[#4F4F4F] mt-1">
                      Your consultation request has been received. Our team will
                      contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleAppointmentSubmit} className="space-y-5">
                    <div>
                      <label className="sr-only">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        className="w-full px-5 py-4 rounded-xl bg-[#E0F5FC]/40 border border-gray-200 focus:border-[#00AEEF] focus:bg-white text-[#08344E] placeholder-[#797979] text-sm outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="sr-only">Your Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="Your Email Address"
                        className="w-full px-5 py-4 rounded-xl bg-[#E0F5FC]/40 border border-gray-200 focus:border-[#00AEEF] focus:bg-white text-[#08344E] placeholder-[#797979] text-sm outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="sr-only">Your Message</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Your Message"
                        className="w-full px-5 py-4 rounded-xl bg-[#E0F5FC]/40 border border-gray-200 focus:border-[#00AEEF] focus:bg-white text-[#08344E] placeholder-[#797979] text-sm outline-none transition-all resize-none"
                      />
                    </div>
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-[#00AEEF] to-[#00A556] hover:from-[#00A556] hover:to-[#00AEEF] text-white font-semibold text-base py-3.5 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Right: Book consultation description & Contact Info */}
          <div className="lg:col-span-6 lg:pl-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#08344E] leading-[1.2]">
              Book a <UnderlineHighlight color="#00AEEF">consultation</UnderlineHighlight> <br />
              experienced advisors.
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#4F4F4F] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>

            <div className="mt-10 space-y-6">
              {/* Address Card (Cyan Accent) */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white text-[#00AEEF] flex items-center justify-center shrink-0 shadow-sm border border-[#C7F0FD]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-lg font-bold text-[#08344E]">
                    Our Address
                  </h5>
                  <p className="text-sm text-[#797979] mt-0.5">
                    Seminyak No.19, Badung, Bali.
                  </p>
                </div>
              </div>

              {/* Contact Card (Emerald Green Accent) */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white text-[#00A556] flex items-center justify-center shrink-0 shadow-sm border border-[#C3F3DC]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-lg font-bold text-[#08344E]">
                    Contact Info
                  </h5>
                  <p className="text-sm text-[#797979] mt-0.5">
                    (316) 212-3456
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
