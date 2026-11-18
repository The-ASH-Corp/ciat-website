import React from "react";
import Image from "next/image";
import { YoutubeIcon, FacebookIcon, TwitterIcon } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#E0F5FC]/70 to-[#E3F8EE]/70 pb-12 pt-6">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="bg-white rounded-[32px] p-8 sm:p-14 shadow-xl border border-white/60">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 lg:gap-10">
            {/* Col 1: Brand & Logo */}
            <div className="md:col-span-1">
              <Image
                src="/images/ciat-logo.png"
                alt="CIAT - Institute of Accounts & Management"
                width={160}
                height={78}
                className="h-10 sm:h-12 w-auto object-contain mb-4"
              />
            </div>

            {/* Col 2: Menu */}
            <div>
              <h4 className="text-lg font-bold text-[#08344E] mb-5">Menu</h4>
              <ul className="space-y-3 text-sm text-[#797979]">
                <li>
                  <a href="/" className="hover:text-[#00AEEF] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-[#00AEEF] transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/placements"
                    className="hover:text-[#00AEEF] transition-colors"
                  >
                    Placements
                  </a>
                </li>
                <li>
                  <a
                    href="/courses"
                    className="hover:text-[#00AEEF] transition-colors"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-[#00AEEF] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: About */}
            <div>
              <h4 className="text-lg font-bold text-[#08344E] mb-5">About</h4>
              <ul className="space-y-3 text-sm text-[#797979]">
                <li>
                  <a href="#" className="hover:text-[#00AEEF] transition-colors">
                    Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00AEEF] transition-colors">
                    Creative team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00AEEF] transition-colors">
                    Founders
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00AEEF] transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Links */}
            <div>
              <h4 className="text-lg font-bold text-[#08344E] mb-5">Links</h4>
              <ul className="space-y-3 text-sm text-[#797979]">
                <li>
                  <a href="#" className="hover:text-[#00AEEF] transition-colors">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00AEEF] transition-colors">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00AEEF] transition-colors">
                    Cookie policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00AEEF] transition-colors">
                    Terms &amp; conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 5: Our Address */}
            <div>
              <h4 className="text-lg font-bold text-[#08344E] mb-5">
                Our Address
              </h4>
              <p className="text-sm text-[#797979] leading-relaxed mb-3">
                Seminyak No.19, 80361,
                <br />
                Badung, Bali.
              </p>
              <p className="text-sm text-[#00AEEF] font-semibold mb-6">
                (316) 212-3456
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3 text-[#08344E]">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#E0F5FC] hover:bg-[#00AEEF] hover:text-white flex items-center justify-center transition-all"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#E0F5FC] hover:bg-[#00AEEF] hover:text-white flex items-center justify-center transition-all"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#E0F5FC] hover:bg-[#00AEEF] hover:text-white flex items-center justify-center transition-all"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-100 text-center text-xs text-[#797979]">
            &copy; 2024 CIAT - Institute of Accounts & Management. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
