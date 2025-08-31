'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'stagger';
  delay?: number;
  duration?: number;
}

const animations = {
  fadeUp: { y: 60, opacity: 0 },
  fadeDown: { y: -60, opacity: 0 },
  fadeLeft: { x: -60, opacity: 0 },
  fadeRight: { x: 60, opacity: 0 },
  scale: { scale: 0.8, opacity: 0 },
  stagger: { y: 40, opacity: 0 }
};

export default function AnimatedSection({ 
  children, 
  className = '',
  animation = 'fadeUp',
  delay = 0,
  duration = 0.6
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Create the visible state dynamically based on the animation type
  const getVisibleState = () => {
    const baseTransition = {
      duration,
      delay,
      ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
      ...(animation === 'stagger' && {
        staggerChildren: 0.1,
        delayChildren: 0.1
      })
    };

    // Only include the properties that are actually animated
    const visibleState: any = { opacity: 1, transition: baseTransition };
    
    if (animation === 'fadeUp' || animation === 'fadeDown' || animation === 'stagger') {
      visibleState.y = 0;
    }
    if (animation === 'fadeLeft' || animation === 'fadeRight') {
      visibleState.x = 0;
    }
    if (animation === 'scale') {
      visibleState.scale = 1;
    }

    return visibleState;
  };

  const variants: Variants = {
    hidden: animations[animation],
    visible: getVisibleState()
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}