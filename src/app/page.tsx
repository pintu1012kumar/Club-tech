

import Instructors from "@/components/AnimatedTool";
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards"

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection/>
    <FeaturedCourses/>
    <InfiniteMovingCardsDemo/>
    <Instructors />
    </main>
  );
}
