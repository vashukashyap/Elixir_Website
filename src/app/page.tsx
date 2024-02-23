import Image from 'next/image';
import React from 'react';
import { Spotlight } from '@/components/ui/Spotlight';
import { Navbar } from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ClubsInformation from '@/components/ClubsInformation';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { MusicSchoolTestimonials } from '@/components/TestimonialCards';
import UpcomingWebinars from '@/components/UpcomingWebinars';
import { Instructors } from '@/components/Instructors';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection/>
        <ClubsInformation/>
        <WhyChooseUs/>
        <MusicSchoolTestimonials/>
        <UpcomingWebinars/>
        <Instructors/>
        <Footer/>
      </main>
  );
}
