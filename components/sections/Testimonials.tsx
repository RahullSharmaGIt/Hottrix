"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: string;
  quote: string;
  expandedQuote?: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  logo: string;
}

interface Client {
  id: string;
  name: string;
  logo: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Hottrix transformed our IT infrastructure completely. Their expertise in cloud solutions helped us scale efficiently.",
    expandedQuote: "Hottrix transformed our IT infrastructure completely. Their expertise in cloud solutions helped us scale efficiently while reducing operational costs by 40%. The team's proactive approach and 24/7 support have been invaluable to our business continuity. We've seen significant improvements in system reliability and performance since partnering with them.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop"
  },
  {
    id: "2",
    quote: "Outstanding cybersecurity services. Our business data has never been more secure, and their team is incredibly responsive.",
    expandedQuote: "Outstanding cybersecurity services. Our business data has never been more secure, and their team is incredibly responsive. They implemented a comprehensive security framework that protected us from multiple threats. Their regular security audits and employee training programs have significantly improved our overall security posture.",
    author: "Michael Rodriguez",
    role: "IT Director",
    company: "SecureBank Corp",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop"
  },
  {
    id: "3",
    quote: "Their managed IT services allowed us to focus on our core business while they handled all our technical needs perfectly.",
    expandedQuote: "Their managed IT services allowed us to focus on our core business while they handled all our technical needs perfectly. The transition was seamless, and we've experienced zero downtime since they took over our IT operations. Their proactive monitoring and maintenance have prevented numerous potential issues before they could impact our business.",
    author: "Emma Thompson",
    role: "Operations Manager",
    company: "Growth Dynamics",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    logo: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=120&h=60&fit=crop"
  }
];

const clients: Client[] = [
  { id: "1", name: "TechFlow", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop" },
  { id: "2", name: "SecureBank", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop" },
  { id: "3", name: "Growth Dynamics", logo: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=120&h=60&fit=crop" },
  { id: "4", name: "Innovation Labs", logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&h=60&fit=crop" },
  { id: "5", name: "DataCore Systems", logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=60&fit=crop" },
  { id: "6", name: "CloudTech", logo: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=120&h=60&fit=crop" }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      prevSlide();
    } else if (event.key === "ArrowRight") {
      nextSlide();
    }
  }, [nextSlide, prevSlide]);

  const toggleExpanded = useCallback((id: string) => {
    setExpandedId(expandedId === id ? null : id);
  }, [expandedId]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, nextSlide]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (isLoading) {
    return (
      <section 
        className="py-20 bg-gray-50"
        aria-label="Client testimonials loading"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse" />
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-lg animate-pulse">
              <CardContent className="space-y-6">
                <div className="h-6 bg-gray-200 rounded w-full" />
                <div className="h-6 bg-gray-200 rounded w-3/4" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full" />
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-32" />
                    <div className="h-3 bg-gray-200 rounded w-24" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section 
        className="py-20 bg-gray-50"
        aria-label="Client testimonials"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-gray-600 text-lg">
              No testimonials available at the moment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const currentTestimonial = testimonials[currentIndex];
  const isExpanded = expandedId === currentTestimonial?.id;

  return (
    <section 
      className="py-20 bg-gray-50"
      aria-label="Client testimonials"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      role="region"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted by businesses worldwide for reliable IT solutions and exceptional support
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card 
                className="p-8 shadow-lg border-l-4 border-l-blue-600 hover:border-l-red-600 transition-colors duration-300"
                role="article"
                aria-live="polite"
              >
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Quote className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" aria-hidden="true" />
                    <div className="flex-1">
                      <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        {isExpanded && currentTestimonial.expandedQuote 
                          ? currentTestimonial.expandedQuote 
                          : currentTestimonial.quote}
                      </blockquote>
                      
                      {currentTestimonial.expandedQuote && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleExpanded(currentTestimonial.id)}
                          className="mt-3 text-blue-600 hover:text-red-600 p-0 h-auto font-medium"
                          aria-expanded={isExpanded}
                          aria-controls={`testimonial-content-${currentTestimonial.id}`}
                        >
                          {isExpanded ? "Show less" : "Read more"}
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage 
                          src={currentTestimonial.avatar} 
                          alt={`${currentTestimonial.author} avatar`}
                        />
                        <AvatarFallback>
                          {currentTestimonial.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <cite className="font-semibold text-gray-900 not-italic">
                          {currentTestimonial.author}
                        </cite>
                        <p className="text-sm text-gray-600">
                          {currentTestimonial.role} at {currentTestimonial.company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="sm:ml-auto">
                      <img
                        src={currentTestimonial.logo}
                        alt={`${currentTestimonial.company} logo`}
                        className="h-8 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            {/* Dot Navigation */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-blue-600 scale-110" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  role="tab"
                  aria-selected={index === currentIndex}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-200"
              aria-label="Next testimonial"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Client Logos Rail */}
        <div className="mt-20">
          <h3 className="text-center text-lg font-semibold text-gray-900 mb-8">
            Trusted by Leading Companies
          </h3>
          <div className="overflow-x-auto">
            <div className="flex gap-8 justify-center items-center min-w-max px-4">
              {clients.map((client) => (
                <div
                  key={client.id}
                  className="flex-shrink-0 group"
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-12 w-auto opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}