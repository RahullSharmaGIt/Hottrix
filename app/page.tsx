'use client';

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import SolutionsSpotlight from '@/components/sections/SolutionsSpotlight';
import Testimonials from '@/components/sections/Testimonials';
import CTABanner from '@/components/sections/CTABanner';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  useEffect(() => {
    // Global GSAP settings
    gsap.config({
      nullTargetWarn: false,
      force3D: true
    });

    // Smooth scroll setup
    const ctx = gsap.context(() => {
      // Page load animation
      gsap.fromTo(document.body, 
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" }
      );

      // Refresh ScrollTrigger when animations complete
      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="overflow-x-hidden">
      
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="services">
        <Services />
      </section>
      
      <section id="why-choose-us">
        <WhyChooseUs />
      </section>
      
      <section id="solutions">
        <SolutionsSpotlight />
      </section>
      
      <section id="testimonials">
        <Testimonials />
      </section>
      
      <CTABanner />
      
      <section id="contact">
        <Contact />
      </section>
      
      
    </main>
  );
}