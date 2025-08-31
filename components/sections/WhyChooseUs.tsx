"use client";

import React from "react";
import {
  Globe,
  Lightbulb,
  Clock,
  Users,
  DollarSign,
  CheckCircle,
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
const usps = [
  {
    icon: Globe,
    title: "Customized Services",
    description: "Tailored IT and telecom solutions that adapt to unique client requirements.",
    stats: "Client-first Approach",
    className: "col-span-3 lg:col-span-1",
    video: "Services.mp4",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Extensive industry experience with certified professionals.",
    stats: "50+ Experts",
    className: "col-span-3 lg:col-span-1",
    video: "Team.mp4",

  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer service for immediate assistance.",
    stats: "<2 Min Response",
    className: "col-span-3 lg:col-span-1",
    video: "support.mp4",

  },
  {
    icon: CheckCircle,
    title: "Proven Track Record",
    description: "Successful project implementations across diverse industries.",
    stats: "98.5% Success Rate",
    className: "col-span-3 lg:col-span-2",
    video: "provenRecord.mp4",

  },
    {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Flexible leasing options with cost-effective strategies.",
    stats: "30% Savings",
      className: "col-span-3 lg:col-span-1",
    video: "Services.mp4",
    
  },
    {
    icon: Globe,
    title: "Rapid Deployment",
    description: "Quick rollout of IT infrastructure and essential services.",
    stats: "Faster Go-live",
    className: "col-span-3 lg:col-span-1",
  },
  {
    icon: Users,
    title: "Long-term Relationships",
    description: "Building trust and lasting partnerships with clients worldwide.",
    stats: "500+ Clients",
    className: "col-span-3 lg:col-span-2",
  },
  
];


export default function WhyChooseUsBento() {
  return (
    <section className="section-spacing bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">Hottrix</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the difference with our comprehensive approach to IT
            excellence
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid>
          {usps.map((usp, idx) => (
            <BentoCard
              href="#"
              key={idx}
              Icon={usp.icon}
              name={usp.title}
              description={usp.description}
              className={usp.className}
              cta={usp.stats}
              background={
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover rounded-xl opacity-30 group-hover:opacity-60 transition duration-500"
                >
                  <source src={`/videos/${usp.video}`} type="video/mp4" />
                </video>
              }
            />
          ))}
        </BentoGrid>

        {/* CTA Button */}
        <div className="text-center mt-20">
          <button className="bg-gradient-to-r from-[#E30613] to-[#B8050F] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            Start Your Digital Transformation
          </button>
        </div>
      </div>
    </section>
  );
}
