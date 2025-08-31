"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

export default function Footer() {
  const footerLinks = {
    services: [
      "IT Hardware & Software",
      "CCTV Surveillance",
      "Biometric Systems",
      "AMC Services",
      "Contact Center Solutions",
    ],
    company: [
      { name: "About Us", url: "/about" },
      { name: "Services", url: "/team" },
      { name: "Testimonials", url: "/Testimonials" },
      { name: "Contact Us", url: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", color: "hover:text-blue-500" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-x-16">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
        
                {
                  <Image
                    alt="Hottrix Logo"
                    src = "images/hottrix.png"
                    className=""
                    width={200}
                    height={50}
                  />
                }
                <p className="text-gray-300 leading-relaxed mb-6">
                  Innovating IT and telecom solutions for a secure future. We
                  empower businesses with cutting-edge technology and
                  comprehensive support services.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#E30613]" />
                    <span className="text-gray-300">+91 84482-92236</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#0054A6]" />
                    <span className="text-gray-300">info@hottrix.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#E30613]" />
                    <span className="text-gray-300">
                      B-230, Logix Technova Business Park, Sector 132,
                      NOIDA-201301
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-bold text-white">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#E30613] transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-bold text-white">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-gray-300 hover:text-[#0054A6] transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400"
            >
              © 2025 Hottrix IT Services Private Limited. All rights reserved.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
