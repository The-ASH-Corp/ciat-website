"use client";

import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import UnderlineHighlight from "@/components/ui/UnderlineHighlight";

export default function ContactHero() {
  const [appointmentSubmitted, setAppointmentSubmitted] = useState(false);

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppointmentSubmitted(true);
    setTimeout(() => setAppointmentSubmitted(false), 5000);
  };

  return (
    <section className="relative overflow-hidden bg-[#D2EBE5] pt-12 pb-24 lg:pt-16 lg:pb-36">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Title & Description Column */}
          <div className="lg:col-span-6 pt-4 lg:pt-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/70 text-[#00AEEF] font-bold text-xs uppercase tracking-wider mb-5 shadow-sm border border-white/60">
              Contact
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-bold text-[#08344E] leading-[1.18] tracking-tight">
              Get In Touch <br />
              With Our <UnderlineHighlight color="#00AEEF">Team</UnderlineHighlight>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#08344E]/85 leading-relaxed font-normal max-w-lg">
              By contacting us, you can obtain answers to your questions, receive
              feedback, and schedule appointments with our senior advisors.
            </p>
          </div>

          {/* Right: Make Appointment Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white/80">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#08344E] mb-6">
                Make Appointment
              </h2>

              {appointmentSubmitted ? (
                <div className="bg-[#E3F8EE] text-[#08344E] p-6 rounded-2xl border border-[#00A556]/40 text-center animate-fade-in">
                  <CheckCircle className="w-10 h-10 text-[#00A556] mx-auto mb-2" />
                  <h4 className="font-bold text-lg">Thank You!</h4>
                  <p className="text-sm text-[#4F4F4F] mt-1">
                    Your appointment request has been received. Our team will
                    contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleAppointmentSubmit} className="space-y-4">
                  <div>
                    <label className="sr-only">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#00AEEF] focus:bg-white text-[#08344E] placeholder-[#797979] text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="sr-only">Your Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="Your Email Address"
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#00AEEF] focus:bg-white text-[#08344E] placeholder-[#797979] text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="sr-only">Your Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Your Message"
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#00AEEF] focus:bg-white text-[#08344E] placeholder-[#797979] text-sm outline-none transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="bg-[#00AEEF] hover:bg-[#00A556] text-white font-semibold text-base py-3.5 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Curve Divider */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/shape-divider-home-edit.png"
          alt=""
          className="w-full h-auto min-h-[50px] object-cover object-bottom"
        />
      </div>
    </section>
  );
}
