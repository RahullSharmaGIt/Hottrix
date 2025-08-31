'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 84482-92236'],
      color: 'text-[#E30613]'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@hottrix.com'],
      color: 'text-[#0054A6]'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['B-230, Logix Technova Business Park, Sector 132, NOIDA-201301'],
      color: 'text-[#E30613]'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', '24/7 Emergency Support'],
      color: 'text-[#0054A6]'
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <AnimatedSection animation="fadeUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how we can help you achieve your goals.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <AnimatedSection animation="fadeLeft">
            <motion.div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="h-14 rounded-xl border-gray-200 focus:border-[#0054A6] focus:ring-[#0054A6]/20 transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-14 rounded-xl border-gray-200 focus:border-[#0054A6] focus:ring-[#0054A6]/20 transition-all duration-300"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <Input
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="h-14 rounded-xl border-gray-200 focus:border-[#0054A6] focus:ring-[#0054A6]/20 transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <Input
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="h-14 rounded-xl border-gray-200 focus:border-[#0054A6] focus:ring-[#0054A6]/20 transition-all duration-300"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full h-14 rounded-xl border border-gray-200 px-4 focus:border-[#0054A6] focus:ring-2 focus:ring-[#0054A6]/20 transition-all duration-300 bg-white"
                  >
                    <option value="">Select Service</option>
                    <option value="it-hardware">IT Hardware & Software</option>
                    <option value="cctv">CCTV Surveillance</option>
                    <option value="biometric">Biometric Systems</option>
                    <option value="amc">AMC Services</option>
                    <option value="contact-center">Contact Center Solutions</option>
                    <option value="ai-chatbot">AI Chatbot</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="rounded-xl border-gray-200 focus:border-[#0054A6] focus:ring-[#0054A6]/20 transition-all duration-300 resize-none"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#E30613] to-[#B8050F] hover:from-[#B8050F] hover:to-[#E30613] text-white py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection animation="fadeRight" delay={0.2}>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#0054A6] to-[#E30613] rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-white/90 mb-8 leading-relaxed">
                  Get in touch with our team for immediate assistance or to discuss your requirements.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-white/80 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gray-100 rounded-3xl p-8 text-center"
              >
                {/* <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="h-12 w-12 text-gray-500 mx-auto" />
                    <p className="text-gray-600 font-medium">Interactive Map</p>
                    <p className="text-sm text-gray-500">Location: Gurugram, Haryana</p>
                  </div>
                </div> */}
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}