"use client";

import React, { useState } from "react";
import UnderlineHighlight from "@/components/ui/UnderlineHighlight";

export default function CtaBanner() {
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setNewsletterSubmitted(true);
      setEmailInput("");
      setTimeout(() => setNewsletterSubmitted(false), 5000);
    }
  };

  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-t from-[#E0F5FC] to-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="relative rounded-[36px] bg-gradient-to-br from-[#E0F5FC] via-white to-[#E3F8EE] px-8 py-16 sm:py-20 text-center overflow-hidden border border-[#BCEBF9] shadow-lg">
          {/* Subtle glow circles */}
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#00AEEF]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-1/3 translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#00A556]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08344E] leading-[1.25]">
              Ready to turn dreams into <br />
              reality? Let&apos;s get started{" "}
              <UnderlineHighlight color="#00AEEF">now!</UnderlineHighlight>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#4F4F4F]">
              Join thousands of forward-thinking investors building sustainable
              wealth today.
            </p>

            {/* Newsletter Form */}
            <form
              onSubmit={handleNewsletterSubmit}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
            >
              <div className="relative w-full">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Your email address..."
                  className="w-full bg-white text-[#08344E] placeholder-[#797979] text-sm px-6 py-4 rounded-full border border-gray-200 outline-none focus:border-[#00AEEF] shadow-sm transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-[#00AEEF] to-[#00A556] hover:from-[#00A556] hover:to-[#00AEEF] text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg shrink-0 active:scale-95"
              >
                Send
              </button>
            </form>

            {newsletterSubmitted && (
              <p className="mt-4 text-xs font-semibold text-[#00A556]">
                Thank you for subscribing! We&apos;ll be in touch soon.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
