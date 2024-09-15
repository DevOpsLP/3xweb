// import Image from "next/image";

import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import ThreeGridSection from "@/components/ThreeGridSection";

export default function Home() {
  return (
      <main>
        <Hero />
        <ThreeGridSection />
        <Hero2 />
      </main>
  );
}
