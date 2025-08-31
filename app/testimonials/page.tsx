"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

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
    quote:
      "Hottrix transformed our IT infrastructure completely. Their expertise in cloud solutions helped us scale efficiently.",
    expandedQuote:
      "Hottrix transformed our IT infrastructure completely. Their expertise in cloud solutions helped us scale efficiently while reducing operational costs by 40%. The team's proactive approach and 24/7 support have been invaluable to our business continuity. We've seen significant improvements in system reliability and performance since partnering with them.",
    author: "Sarah Chen",
    role: "CTO",
    company: "Bls International Solutions",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    logo: "images/companies/blslogo.png",
  },
  {
    id: "2",
    quote:
      "Outstanding cybersecurity services. Our business data has never been more secure, and their team is incredibly responsive.",
    expandedQuote:
      "Outstanding cybersecurity services. Our business data has never been more secure, and their team is incredibly responsive. They implemented a comprehensive security framework that protected us from multiple threats. Their regular security audits and employee training programs have significantly improved our overall security posture.",
    author: "Michael Rodriguez",
    role: "IT Director",
    company: "Quess Corp",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    logo: "images/companies/quess.png",
  },
  {
    id: "3",
    quote:
      "Their managed IT services allowed us to focus on our core business while they handled all our technical needs perfectly.",
    expandedQuote:
      "Their managed IT services allowed us to focus on our core business while they handled all our technical needs perfectly. The transition was seamless, and we've experienced zero downtime since they took over our IT operations. Their proactive monitoring and maintenance have prevented numerous potential issues before they could impact our business.",
    author: "Emma Thompson",
    role: "Operations Manager",
    company: "Freed",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    logo: "images/companies/freed.png",
  },
  // Extracted from PDF
  {
    id: "4",
    quote:
      "We partnered with Hottrix IT Services for our CCTV AMC, and the experience has been exceptional.",
    expandedQuote:
      "We partnered with Hottrix IT Services for our CCTV AMC, and the experience has been exceptional. Their team provided a seamless installation process and ensured that our security systems are always operational. With their prompt support and regular maintenance checks, we feel confident in the safety of our premises. The professionalism and expertise of Hottrix have truly exceeded our expectations. We highly recommend their services to anyone looking for reliable security solutions!",
    author: "Client Testimonial",
    role: "Facilities Manager",
    company: "Undisclosed",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face",
    logo: "https://images.unsplash.com/photo-1581090700227-4c4d9f2a4f91?w=120&h=60&fit=crop",
  },
  {
    id: "5",
    quote:
      "Hottrix IT Services has been an invaluable partner for BLS International in managing our IT infrastructure.",
    expandedQuote:
      "Hottrix IT Services has been an invaluable partner for BLS International in managing our IT infrastructure. Their expert team provided seamless support, ensuring our systems run smoothly and efficiently. From quick response times to proactive maintenance, they have significantly improved our operational efficiency. Their tailored solutions have met our unique needs, and their professionalism has exceeded our expectations. We highly recommend Hottrix for any organization seeking reliable and effective IT infrastructure support!",
    author: "BLS International",
    role: "IT Department",
    company: "BLS International",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    logo: "images/companies/blslogo.png",
  },
  {
    id: "6",
    quote:
      "Partnering with Hottrix IT Services for our site setup was a game changer for our operations.",
    expandedQuote:
      "Partnering with Hottrix IT Services for our site setup was a game changer for our operations. Their team expertly handled the installation of both data and voice lines, ensuring seamless connectivity from day one. The professionalism and attention to detail were impressive, and they provided invaluable support throughout the process. Thanks to Hottrix, our communication systems are now efficient and reliable. We highly recommend their services for anyone looking to set up robust IT infrastructure!",
    author: "Client Testimonial",
    role: "Operations Head",
    company: "Undisclosed",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=150&h=150&fit=crop&crop=face",
    logo: "https://images.unsplash.com/photo-1564865878363-3c01b6a9a0d8?w=120&h=60&fit=crop",
  },
];


const clients: Client[] = [
  { id: "1", name: "Bls", logo: "images/companies/blslogo.png" },
  { id: "2", name: "freed", logo: "images/companies/freed.png" },
  { id: "3", name: "Quess", logo: "images/companies/quess.png" },
  { id: "4", name: "Vani InfoSystems", logo: "images/companies/vani.png" },
  { id: "5", name: "Credit Upaya", logo: "images/companies/credit.png" },
  { id: "6", name: "Talki", logo: "images/companies/talki.png" },
  { id: "7", name: "pikaaya", logo: "images/companies/pikaaya.png" },
  { id: "8", name: "Mishita Organic", logo: "images/companies/mishita.png" },
  { id: "9", name: "Amrin", logo: "images/companies/amrin.png" },
  { id: "10", name: "So", logo: "images/companies/SO.png" },
  { id: "11", name: "tripified", logo: "images/companies/tripified.png" },
  { id: "12", name: "Vitalite", logo: "images/companies/vitalite.png" },
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
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      }
    },
    [nextSlide, prevSlide]
  );

  const toggleExpanded = useCallback(
    (id: string) => {
      setExpandedId(expandedId === id ? null : id);
    },
    [expandedId]
  );

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
        className="py-20 bg-gray-50 mt-12"
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
      <section className="py-20 bg-gray-50" aria-label="Client testimonials">
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
            Trusted by businesses worldwide for reliable IT solutions and
            exceptional support
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
                    <Quote
                      className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
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
                          {currentTestimonial.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <cite className="font-semibold text-gray-900 not-italic">
                          {currentTestimonial.author}
                        </cite>
                        <p className="text-sm text-gray-600">
                          {currentTestimonial.role} at{" "}
                          {currentTestimonial.company}
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
            <div
              className="flex gap-2"
              role="tablist"
              aria-label="Testimonial navigation"
            >
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
        {/* Client Logos Grid */}
        <div className="mt-20">
          <div className="text-center mb-16 ">
            {
              <SparklesText>
                <AnimatedGradientText className="text-4xl md:text-5xl font-bold mb-12">
                  Trusted by Leading Companies
                </AnimatedGradientText>
              </SparklesText>
            }
          </div>
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {clients.map((client) => (
                <div
                  key={client.id}
                  className="flex justify-center items-center group"
                >
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 w-full max-w-[200px] aspect-square flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-w-full max-h-16 w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
