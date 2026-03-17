"use client";

import React from "react";
import { motion } from "framer-motion";
import TestimonialsCard from "@/components/utils/cards/TestimonialsCard";
import { testimonialsCardData } from "@/data/cards/TestimonialsCardData";

const TestimonialsMarquee = ({ direction, padding }) => {
  return (
    <div className="flex items-center">
      <motion.div
        initial={{ x: direction == "left" ? 0 : "-100%" }}
        animate={{ x: direction == "left" ? "-100%" : 0 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="testimonials-marquee flex"
      >
        {testimonialsCardData.map((item) => {
          return (
            <>
              <div key={item.id}>
                <TestimonialsCard card={item} padding={padding} />
              </div>
            </>
          );
        })}
      </motion.div>
      <motion.div
        initial={{ x: direction == "left" ? 0 : "-100%" }}
        animate={{ x: direction == "left" ? "-100%" : 0 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="testimonials-marquee flex"
      >
        {testimonialsCardData.map((item) => {
          return (
            <>
              <div key={item.id}>
                <TestimonialsCard card={item} padding={padding} />
              </div>
            </>
          );
        })}
      </motion.div>
    </div>
  );
};

export default TestimonialsMarquee;
