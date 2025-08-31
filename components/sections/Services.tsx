'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Shield, 
  Camera, 
  Fingerprint, 
  Wrench, 
  Building, 
  Phone, 
  Zap,
  Bot,
  Ticket
} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';

export default function Services() {
  const services = [
    {
      icon: Server,
      title: 'IT Hardware & Software',
      description: 'Complete infrastructure solutions with enterprise-grade hardware and software deployment.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Camera,
      title: 'CCTV Surveillance',
      description: 'Advanced security camera systems with 24/7 monitoring and intelligent analytics.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Fingerprint,
      title: 'Biometric Systems',
      description: 'State-of-the-art biometric access control and attendance management solutions.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Wrench,
      title: 'AMC Services',
      description: 'Comprehensive maintenance contracts ensuring optimal performance and minimal downtime.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Building,
      title: 'Site Setup & Installation',
      description: 'End-to-end site preparation and professional installation services.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Phone,
      title: 'Dialer Solutions',
      description: 'Advanced auto-dialer systems with CRM integration for enhanced productivity.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Zap,
      title: 'Generator Leasing',
      description: 'Reliable power backup solutions with flexible leasing and maintenance options.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Bot,
      title: 'AI Chatbot',
      description: 'Intelligent conversational AI for customer support and business automation.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Ticket,
      title: 'Ticketing System',
      description: 'Streamlined support ticket management with automated workflows and tracking.',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section className="section-spacing bg-gray-50">
      <div className="container-custom">
        <AnimatedSection animation="fadeUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to meet the evolving needs of modern businesses
          </p>
        </AnimatedSection>

        <AnimatedSection animation="stagger">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {/* Icon */}
                      <div className="relative">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        <motion.div
                          className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} blur-xl opacity-25`}
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                        />
                      </div>

                      {/* Content */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0054A6] transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Learn More Link */}
                      <motion.div
                        className="pt-4 border-t border-gray-100"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-[#E30613] font-semibold text-sm cursor-pointer group-hover:underline">
                          Learn More →
                        </span>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}