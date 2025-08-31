'use client';
import React, { useState, useEffect } from 'react';
import { Shield, Target, Users, Award, Eye, Fingerprint, Phone, Database, Zap, Building2, TrendingUp, CheckCircle } from 'lucide-react';

export default function About() {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Advanced CCTV surveillance and biometric access control systems with AI-powered monitoring',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Precision Solutions',
      description: 'Tailored IT infrastructure, telecom setups, and dialer installations for optimal performance',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals delivering comprehensive AMC and maintenance services',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Proven Excellence',
      description: '15+ years of delivering exceptional IT and telecommunication solutions',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const services = [
    { icon: Eye, name: 'CCTV Security Systems', desc: 'HD surveillance with remote monitoring' },
    { icon: Fingerprint, name: 'Biometric Solutions', desc: 'Fingerprint & facial recognition access control' },
    { icon: Phone, name: 'Voice & Data Lines', desc: 'Complete communication infrastructure setup' },
    { icon: Database, name: 'Hardware & Software', desc: 'Sales, leasing, and comprehensive IT solutions' },
  ];

  const stats = [
    { label: 'Client Satisfaction', value: '99.8%', color: 'text-blue-600' },
    { label: 'Project Success Rate', value: '98.5%', color: 'text-red-600' },
    { label: 'Years of Excellence', value: '15+', color: 'text-green-600' }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden mt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-red-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent font-semibold mb-4">
            <Building2 className="h-5 w-5 text-blue-600" />
            <span>ABOUT HOTTRIX IT SERVICES</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transforming Businesses Through{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
              Innovation
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leading provider of cutting-edge IT and telecommunication solutions, 
            empowering businesses across multiple industries with secure, scalable technology.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Your Trusted Technology Partner
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Hottrix IT Services Private Limited, we bridge the gap between traditional business 
                operations and cutting-edge technology. Our comprehensive suite of solutions includes 
                hardware and software sales, leasing, professional site setup, and reliable Annual 
                Maintenance Contracts (AMC).
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We specialize in advanced CCTV security systems with high-definition cameras and remote 
                monitoring capabilities, state-of-the-art biometric security systems utilizing fingerprint 
                and facial recognition technologies, and complete voice and data line infrastructure.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group p-4 rounded-xl bg-white shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <service.icon className="h-8 w-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{service.name}</h3>
                  <p className="text-xs text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Interactive Stats Card */}
          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group">
              {/* Main Card */}
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 overflow-hidden transform hover:scale-105 transition-all duration-500">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Company Logo/Icon */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-red-600 rounded-2xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                        <Zap className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Mission Statement */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Building long-lasting partnerships based on trust, innovation, and unparalleled 
                      customer service to deliver secure, scalable technology solutions.
                    </p>
                  </div>

                  {/* Animated Stats */}
                  <div className="space-y-6">
                    {stats.map((stat, index) => (
                      <div key={index} className={`transition-all duration-500 ${currentStat === index ? 'scale-105' : 'scale-100'}`}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600 font-medium">{stat.label}</span>
                          <span className={`font-bold text-xl ${stat.color}`}>{stat.value}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div 
                            className={`h-3 rounded-full transition-all duration-1000 ${
                              index === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                              index === 1 ? 'bg-gradient-to-r from-red-500 to-pink-500' :
                              'bg-gradient-to-r from-green-500 to-emerald-500'
                            } ${currentStat === index ? 'animate-pulse' : ''}`}
                            style={{ 
                              width: index === 0 ? '99.8%' : index === 1 ? '98.5%' : '100%',
                              transform: currentStat === index ? 'scaleY(1.1)' : 'scaleY(1)'
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 animate-bounce"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-red-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Hottrix</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From robust infrastructure to AI-powered systems, we deliver end-to-end solutions 
              that ensure security, scalability, and seamless operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-3 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${800 + index * 150}ms` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon with animated background */}
                  <div className="relative mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>
                  
                  <h3 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ padding: '2px', margin: '-1px' }}>
                  <div className="w-full h-full bg-white rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Vision Section */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-red-600 text-white overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-32 h-32 border border-white/30 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 border border-white/30 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/30 rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
              </div>

              <div className="relative z-10">
                <TrendingUp className="h-12 w-12 mx-auto mb-6 animate-bounce" />
                <h2 className="text-3xl font-bold mb-6">Empowering Digital Transformation</h2>
                <p className="text-xl leading-relaxed mb-6 text-white/90">
                  Whether you're a small business or a large corporation, our expert team is dedicated 
                  to providing reliable, secure, and scalable technology solutions that empower you to 
                  focus on what matters most—growing your business.
                </p>
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Shield className="h-5 w-5" />
                  <span className="font-semibold">Partner with us for a seamless and secure IT experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-600 to-red-600 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* CSS for additional animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}