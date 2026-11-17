import React from "react";
import Image from "next/image";
import UnderlineHighlight from "@/components/ui/UnderlineHighlight";

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#08344E] leading-[1.2]">
            Our latest news &amp; <UnderlineHighlight color="#00AEEF">blog</UnderlineHighlight>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Post 1 */}
          <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/close-up-businessman-using-calculator-and-laptop-f-2022-08-18-18-39-42-utc.jpg"
                  alt="Smart investment decisions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-[#00AEEF] bg-[#E0F5FC] px-3.5 py-1.5 rounded-full inline-block">
                  Business
                </span>
                <h3 className="mt-4 text-xl font-bold text-[#08344E] group-hover:text-[#00AEEF] transition-colors line-clamp-2">
                  Smart investment decisions for a thriving business
                </h3>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2">
              <a
                href="#blog"
                className="inline-block bg-[#00AEEF] hover:bg-[#00A556] text-white font-semibold text-xs px-6 py-2.5 rounded-full transition-all duration-300 shadow-sm"
              >
                Read More
              </a>
            </div>
          </article>

          {/* Post 2 */}
          <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/toxic-boss-angry-businessman-shouting-at-workers-2022-12-16-08-22-23-utc.jpg"
                  alt="5 Benefits of professional investing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-[#00A556] bg-[#E3F8EE] px-3.5 py-1.5 rounded-full inline-block">
                  Entrepreneurs
                </span>
                <h3 className="mt-4 text-xl font-bold text-[#08344E] group-hover:text-[#00A556] transition-colors line-clamp-2">
                  5 Benefits of professional investing for entrepreneurs
                </h3>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2">
              <a
                href="#blog"
                className="inline-block bg-[#00A556] hover:bg-[#00AEEF] text-white font-semibold text-xs px-6 py-2.5 rounded-full transition-all duration-300 shadow-sm"
              >
                Read More
              </a>
            </div>
          </article>

          {/* Post 3 */}
          <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/group-of-asia-young-creative-people-celebrate-proj-2021-09-02-05-10-18-utc.jpg"
                  alt="8 Smart business investment tips"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-[#00AEEF] bg-[#E0F5FC] px-3.5 py-1.5 rounded-full inline-block">
                  Financial
                </span>
                <h3 className="mt-4 text-xl font-bold text-[#08344E] group-hover:text-[#00AEEF] transition-colors line-clamp-2">
                  8 Smart business investment tips for financial freedom
                </h3>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2">
              <a
                href="#blog"
                className="inline-block bg-[#00AEEF] hover:bg-[#00A556] text-white font-semibold text-xs px-6 py-2.5 rounded-full transition-all duration-300 shadow-sm"
              >
                Read More
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
