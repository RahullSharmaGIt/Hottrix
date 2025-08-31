'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Award } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function About() {
  const features = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Advanced security protocols and comprehensive protection systems'
    },
    {
      icon: Target,
      title: 'Precision Solutions',
      description: 'Tailored IT solutions designed for your specific business needs'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with extensive industry experience'
    },
    {
      icon: Award,
      title: 'Proven Excellence',
      description: '15+ years of delivering exceptional IT services and solutions'
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <AnimatedSection animation="fadeLeft">
              <motion.div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Transforming Businesses Through{' '}
                  <span className="gradient-text">Innovation</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Hottrix IT Services, we bridge the gap between traditional business operations 
                  and cutting-edge technology. Our comprehensive suite of IT and telecom solutions 
                  empowers organizations to thrive in the digital age.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From robust infrastructure setup to advanced AI-powered systems, we deliver 
                  end-to-end solutions that ensure security, scalability, and seamless operation.
                </p>
              </motion.div>
            </AnimatedSection>

            {/* Features Grid */}
            <AnimatedSection animation="stagger" delay={0.3}>
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ y: -5 }}
                    className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <feature.icon className="h-8 w-8 text-[#0054A6] mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Visual Content */}
          <AnimatedSection animation="fadeRight" delay={0.2}>
            <div className="relative">
              <motion.div 
                className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0054A6] to-[#E30613] rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Mission</h3>
                      <p className="text-gray-600">Secure Digital Future</p>
                    </div>
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-[#0054A6] to-[#E30613]"></div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Client Satisfaction</span>
                      <span className="font-bold text-[#0054A6]">99.8%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '99.8%' }}
                        transition={{ duration: 2, delay: 1 }}
                        className="bg-gradient-to-r from-[#0054A6] to-[#E30613] h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Project Success Rate</span>
                      <span className="font-bold text-[#E30613]">98.5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '98.5%' }}
                        transition={{ duration: 2, delay: 1.5 }}
                        className="bg-gradient-to-r from-[#E30613] to-[#0054A6] h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Background Elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#0054A6]/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#E30613]/10 rounded-full blur-xl"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}