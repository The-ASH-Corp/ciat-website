import React from "react";
import Image from "next/image";

export default function ClientLogos() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity">
          <Image
            src="/images/logo-client-1.png"
            alt="Client Logo 1"
            width={200}
            height={40}
            className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
          <Image
            src="/images/logo-client-2.png"
            alt="Client Logo 2"
            width={200}
            height={40}
            className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
          <Image
            src="/images/logo-client-3.png"
            alt="Client Logo 3"
            width={200}
            height={40}
            className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
          <Image
            src="/images/logo-client-4.png"
            alt="Client Logo 4"
            width={200}
            height={40}
            className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}
