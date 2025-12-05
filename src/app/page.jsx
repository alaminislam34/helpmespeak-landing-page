"use client";

import Image from "next/image";
import AppDetails from "./components/HomePage/AppDetails";
import AppMode from "./components/HomePage/AppMode";
import HeroSection from "./components/HomePage/HeroSection";
import PricingSection from "./components/HomePage/PricingSection";
import SliderSection from "./components/HomePage/Sldier/SliderSection";

export default function Home() {
  return (
    <div className="font-roboto overflow-x-hidden">
      <section className="relative ">
        <section className="bg-linear-to-b from-[#8FD4F0]/0 via-[#8FD4F0]/30 to-[#8FD4F0]/10 blur-lg absolute top-0 left-0 w-full h-full -z-10"></section>
        <div className="absolute -z-20 opacity-50 top-1/6 -translate-y-1/6 md:top-1/5 md:-translate-y-1/5 lg:top-1/4 lg:-translate-y-1/4 -right-[100px] lg:-right-[280px] rotate-28">
          <Image
            src={"/images/dots.png"}
            width={400}
            height={400}
            alt="Star icon"
            className="w-44 h-44 lg:w-auto lg:h-[480px]"
          />
        </div>
        <div className="absolute -z-20 opacity-50 top-1/6 -translate-y-1/6 md:top-1/5 md:-translate-y-1/5 lg:top-1/4 lg:-translate-y-1/4 -left-[100px] lg:-left-[280px] -rotate-28">
          <Image
            src={"/images/dots.png"}
            width={400}
            height={400}
            alt="Star icon"
            className="w-44 h-44 lg:w-auto lg:h-[480px]"
          />
        </div>
        <div className="max-w-[1440px] mx-auto w-11/12 ">
          <HeroSection />
        </div>
      </section>

      <AppMode />
      <PricingSection />
      <SliderSection />
      <AppDetails />
    </div>
  );
}
