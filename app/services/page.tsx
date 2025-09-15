'use client';

import React, { useState, useEffect } from 'react'; // Add useEffect
import { motion, AnimatePresence } from 'framer-motion';
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
  Ticket,
  ChevronRight,
  MessageCircle,
  Facebook,
  BarChart3,
  Mic,
  Brain,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Magic UI Components (you'll need to install these)
import { BorderBeam } from '@/components/magicui/border-beam';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { SparklesText } from '@/components/magicui/sparkles-text';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { Meteors } from '@/components/magicui/meteors';
import { GridPattern } from '@/components/magicui/grid-pattern';
import { DotPattern } from '@/components/magicui/dot-pattern';

export default function Services() {
const [selectedService, setSelectedService] = useState<any>(null);
const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Server,
      title: 'IT Hardware & Software',
      description: 'Complete infrastructure solutions with enterprise-grade hardware and software deployment.',
      color: 'from-blue-500 to-blue-600',
      stats: { projects: 500, clients: 200 },
      features: ['Cloud Migration', 'Server Setup', 'Network Configuration', 'Software Licensing']
    },
    {
      icon: Camera,
      title: 'CCTV Surveillance',
      description: 'Advanced security camera systems with 24/7 monitoring and intelligent analytics.',
      color: 'from-red-500 to-red-600',
      stats: { cameras: 10000, coverage: 99 },
      features: ['IP Cameras', 'NVR Systems', 'Mobile Monitoring', 'AI Analytics']
    },
    {
      icon: Fingerprint,
      title: 'Biometric Systems',
      description: 'State-of-the-art biometric access control and attendance management solutions.',
      color: 'from-purple-500 to-purple-600',
      stats: { accuracy: 99.9, users: 50000 },
      features: ['Fingerprint Scanners', 'Face Recognition', 'Access Control', 'Time Attendance']
    },
    {
      icon: Wrench,
      title: 'AMC Services',
      description: 'Comprehensive maintenance contracts ensuring optimal performance and minimal downtime.',
      color: 'from-green-500 to-green-600',
      stats: { uptime: 99.5, response: 2 },
      features: ['Preventive Maintenance', '24/7 Support', 'Remote Monitoring', 'Performance Reports']
    },
    {
      icon: Building,
      title: 'Site Setup & Installation',
      description: 'End-to-end site preparation and professional installation services.',
      color: 'from-orange-500 to-orange-600',
      stats: { sites: 300, completion: 98 },
      features: ['Site Survey', 'Infrastructure Setup', 'Cable Management', 'Testing & Commissioning']
    },
    {
      icon: Phone,
      title: 'Dialer Solutions with CRM',
      description: 'Powerful call center solution combining dialing efficiency with customer relationship management.',
      color: 'from-teal-500 to-teal-600',
      stats: { calls: 1000000, efficiency: 85 },
      features: ['Predictive Dialing', 'CRM Integration', 'Call Analytics', 'Omnichannel Support'],
      isSpecial: true
    },
    {
      icon: Zap,
      title: 'Generator Leasing',
      description: 'Reliable power backup solutions with flexible leasing and maintenance options.',
      color: 'from-yellow-500 to-yellow-600',
      stats: { generators: 150, reliability: 99 },
      features: ['Diesel Generators', 'AMC Included', 'Load Testing', 'Fuel Management']
    },
    {
      icon: Bot,
      title: 'AI Chatbot',
      description: 'Intelligent conversational AI for customer support and business automation.',
      color: 'from-indigo-500 to-indigo-600',
      stats: { queries: 100000, satisfaction: 92 },
      features: ['Natural Language Processing', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard']
    },
    {
      icon: Ticket,
      title: 'Ticketing System',
      description: 'Streamlined support ticket management with automated workflows and tracking.',
      color: 'from-pink-500 to-pink-600',
      stats: { tickets: 25000, resolution: 95 },
      features: ['Automated Routing', 'SLA Management', 'Knowledge Base', 'Performance Metrics']
    }
  ];

  const dialerFeatures = [
    {
      icon: Phone,
      title: 'Multiple Dialing Modes',
      description: 'Predictive, Progressive & Manual dialing modes for maximum efficiency',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Campaign management with live dashboards and comprehensive reporting',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Integration',
      description: 'Non-verified WhatsApp integration with message templates and automated replies',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Facebook,
      title: 'Social Media Management',
      description: 'Direct Facebook integration for posts, comments, and DM management',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      icon: Mic,
      title: 'Call Recording & Monitoring',
      description: 'Complete call recording with quality monitoring and analytics',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Brain,
      title: 'AI-Powered Features',
      description: 'Post-call AI voice analysis, AI voicebot integration, and predictive analytics',
      color: 'from-violet-500 to-purple-600'
    }
  ];

  const aiCapabilities = [
    'Post-call AI Voice Analysis for call quality ranking',
    'AI Voicebot integration with CRM solution',
    'Predictive Dialing for efficient operations',
    'Custom AI integrations and automation workflows'
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Patterns */}
      <GridPattern
        className="absolute inset-0 opacity-20"
        strokeDasharray="0"
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
      />

      <div className="container-custom relative z-10 py-20">
        {/* Header Section */}
        <AnimatedSection animation="fadeUp" className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SparklesText>
              <AnimatedGradientText className="text-6xl md:text-7xl font-bold mb-12">
                Our Services
              </AnimatedGradientText>
            </SparklesText>
          </motion.div>

          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive IT solutions designed to meet the evolving needs of
            modern businesses with cutting-edge technology and unparalleled
            support
          </motion.p>

          {/* Stats Counter */}
          <motion.div
            className="flex justify-center items-center gap-12 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0054A6]">
                <NumberTicker value={500} />+
              </div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#E30613]">
                <NumberTicker value={99.5} />%
              </div>
              <p className="text-gray-600">Uptime Guarantee</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0054A6]">
                <NumberTicker value={24} />
                /7
              </div>
              <p className="text-gray-600">Support Available</p>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Services Grid */}
        <AnimatedSection animation="stagger" className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.5, delay: index * 0.1 },
                  },
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group cursor-pointer"
                onClick={() =>
                  setSelectedService(service.isSpecial ? service : null)
                }
              >
                <Card className="relative h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {service.isSpecial && (
                    <BorderBeam size={250} duration={12} delay={9} />
                  )}
                  <Meteors number={20} />

                  <CardContent className="p-8 relative z-10">
                    <div className="space-y-6">
                      {/* Icon with Glow Effect */}
                      <div className="relative">
                        <motion.div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 shadow-lg`}
                          animate={
                            hoveredCard === index
                              ? { scale: 1.1 }
                              : { scale: 1 }
                          }
                          transition={{ duration: 0.3 }}
                        >
                          <service.icon className="h-8 w-8 text-white" />
                        </motion.div>

                        {service.isSpecial && (
                          <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0054A6] transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2">
                          {service.features.slice(0, 2).map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center text-sm text-gray-500"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                          <div className="flex gap-4 text-xs">
                            {Object.entries(service.stats).map(
                              ([key, value], idx) => (
                                <div key={idx} className="text-center">
                                  <div className="font-bold text-[#0054A6]">
                                    {value}
                                    {typeof value === "number" && value < 100
                                      ? "%"
                                      : ""}
                                  </div>
                                  <div className="text-gray-500 capitalize">
                                    {key}
                                  </div>
                                </div>
                              )
                            )}
                          </div>

                          <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center text-[#E30613] font-semibold text-sm"
                          >
                            Learn More <ArrowRight className="w-4 h-4 ml-1" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Featured Dialer Solution Modal/Section */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative p-8">
                  <BorderBeam size={300} duration={15} />

                  {/* Header */}
                  <div className="text-center mb-12">
                    <SparklesText className="text-4xl font-bold text-gray-900 mb-4">
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A powerful call center solution that combines dialing
                        efficiency with customer relationship management
                      </p>
                      DIALER SOLUTION WITH CRM{" "}
                    </SparklesText>
                  </div>

                  {/* Key Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {dialerFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                      >
                        <Card className="h-full bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                          <CardContent className="p-6">
                            <div
                              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-4`}
                            >
                              <feature.icon className="h-6 w-6 text-white" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">
                              {feature.title}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {feature.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  {/* WhatsApp & Facebook Integration */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <MessageCircle className="w-8 h-8 text-green-500 mr-3" />
                      WhatsApp & Facebook Integration
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* WhatsApp Features */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-800 flex items-center">
                          <MessageCircle className="w-5 h-5 text-green-500 mr-2" />
                          WhatsApp Features
                        </h4>
                        <ul className="space-y-2">
                          {[
                            "Send message templates, attachments & contacts",
                            "Manual replies to incoming messages",
                            "Auto-trigger templates on missed calls",
                            "Non-verified WhatsApp support",
                          ].map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-gray-700"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Facebook Features */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-800 flex items-center">
                          <Facebook className="w-5 h-5 text-blue-600 mr-2" />
                          Facebook Features
                        </h4>
                        <ul className="space-y-2">
                          {[
                            "Create posts directly from CRM",
                            "Real-time comment management",
                            "Direct message handling",
                            "Consolidated social media engagement",
                          ].map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-gray-700"
                            >
                              <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* AI Capabilities */}
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Brain className="w-8 h-8 text-purple-500 mr-3" />
                      Advanced AI Capabilities
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      {aiCapabilities.map((capability, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center mr-3 mt-1">
                            <span className="text-white font-bold text-sm">
                              {index + 1}
                            </span>
                          </div>
                          <p className="text-gray-700">{capability}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-purple-200">
                      <p className="text-gray-700 font-medium">
                        <strong>Benefit:</strong> Enhanced call quality, faster
                        resolutions, and reduced human error through AI
                        automation and intelligent analytics.
                      </p>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="text-center">
                    <Button
                      className="bg-gradient-to-r from-[#0054A6] to-[#E30613] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                      onClick={() => setSelectedService(null)}
                    >
                      Get Started with Our Dialer Solution
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  >
                    ×
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <AnimatedSection animation="fadeUp" className="text-center">
          <div className="relative bg-gradient-to-r from-[#0054A6] to-[#E30613] rounded-3xl p-12 text-white overflow-hidden">
            <DotPattern className="absolute inset-0 opacity-20" />
            <Meteors number={30} />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Get started with our comprehensive IT solutions today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-[#0054A6] hover:bg-gray-100 font-semibold"
                >
                  Get Free Consultation
                </Button>
                <a
                  href="/HOTTRIX_CAPABILITY.pdf" // Replace with the actual path to your PDF file
                  target="_blank" // Optional: Opens the PDF in a new tab
                  rel="noopener noreferrer" // Recommended for security when using target="_blank"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 border-white text-black hover:bg-white/10 font-semibold"
                >
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}