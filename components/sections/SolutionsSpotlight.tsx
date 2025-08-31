'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Bot, Ticket, Users, BarChart3, MessageSquare } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SolutionsSpotlight() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const solutions = gsap.utils.toArray('.solution-spotlight');
      
      solutions.forEach((solution: any, index) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: solution,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        })
        .fromTo(solution.querySelector('.solution-content'), 
          { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(solution.querySelector('.solution-visual'), 
          { opacity: 0, scale: 0.8, rotationY: index % 2 === 0 ? 15 : -15 },
          { opacity: 1, scale: 1, rotationY: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const solutions = [
    {
      icon: Phone,
      title: 'Contact Center Solutions',
      description: 'Advanced contact center platforms with omnichannel support, real-time analytics, and intelligent routing for enhanced customer experience.',
      features: ['Omnichannel Support', 'Real-time Analytics', 'Intelligent Routing', 'Quality Monitoring'],
      image: 'images/ContactCenterSolutions.jpg',
      gradient: 'from-[#0054A6] to-[#E30613]'
    },
    {
      icon: BarChart3,
      title: 'Dialer with CRM',
      description: 'Integrated dialer systems with comprehensive CRM functionality, advanced reporting, and seamless workflow automation.',
      features: ['Auto Dialing', 'CRM Integration', 'Lead Management', 'Performance Analytics'],
      image: 'images/DialerwithCRM.jpg',
      gradient: 'from-[#E30613] to-[#0054A6]'
    },
    {
      icon: Bot,
      title: 'AI Chatbot',
      description: 'Intelligent conversational AI powered by machine learning, providing 24/7 customer support with natural language processing.',
      features: ['Natural Language Processing', '24/7 Availability', 'Multi-language Support', 'Learning Capabilities'],
      image: 'images/AIChatbot.jpg',
      gradient: 'from-purple-600 to-[#0054A6]'
    },
    {
      icon: Ticket,
      title: 'Ticketing System',
      description: 'Comprehensive support ticket management with automated workflows, priority handling, and detailed reporting capabilities.',
      features: ['Automated Workflows', 'Priority Management', 'SLA Tracking', 'Detailed Reporting'],
      image: 'images/TicketingSystem.jpg',
      gradient: 'from-[#0054A6] to-purple-600'
    }
  ];

  return (
    <section ref={sectionRef} className="bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center py-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Solutions <span className="gradient-text">Spotlight</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover our flagship solutions that are transforming businesses worldwide
          </motion.p>
        </div>

        {/* Solutions */}
        {solutions.map((solution, index) => (
          <div key={index} className={`solution-spotlight grid lg:grid-cols-2 gap-16 items-center py-20 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
            {/* Content */}
            <div className={`solution-content space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
              <div className="space-y-6">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${solution.gradient} p-5 shadow-2xl`}>
                  <solution.icon className="h-10 w-10 text-white" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                  {solution.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-[#E30613] rounded-full"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-r ${solution.gradient} text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300`}
                >
                  Learn More
                </motion.button>
              </div>
            </div>

            {/* Visual */}
            <div className={`solution-visual ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
              <motion.div 
                className="relative"
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl">
                  <div className="aspect-video bg-gray-900 rounded-2xl shadow-inner overflow-hidden relative">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} mix-blend-multiply`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <solution.icon className="h-24 w-24 text-white opacity-75 drop-shadow-lg" />
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#E30613] rounded-2xl flex items-center justify-center shadow-xl">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#0054A6] rounded-2xl flex items-center justify-center shadow-xl">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} rounded-3xl blur-3xl opacity-20 -z-10`}></div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}