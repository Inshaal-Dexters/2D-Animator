"use client";

import React from "react";
import { motion } from "framer-motion";
import TestimonialsMarquee from "../marquee/TestimonialsMarquee";

const TestimonialsSection = () => {
  return (
    <>
      <section className="testimonials-section w-full px-3 md:px-6 lg:px-12 2xl:px-0">
        <div className="inner-container w-full max-w-7xl flex flex-col items-center gap-10 xl:gap-16 mx-auto py-16 xl:py-28 pt-0 xl:pt-16 overflow-hidden">
          <div className="top-area w-full flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl xl:text-5xl text-center font-semibold">
              What{" "}
              <span className="relative">
                Animators
                <svg
                  viewBox="0 0 286 73"
                  fill="none"
                  className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{
                      duration: 1.25,
                      ease: "easeInOut",
                    }}
                    d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                    stroke="#FACC15"
                    strokeWidth="3"
                  />
                </svg>
              </span>{" "}
              Are Saying
            </h2>
          </div>
          <div className="bottom-area w-full relative flex flex-col gap-5">
            <TestimonialsMarquee direction={"left"} padding={"pl-5"} />
            <TestimonialsMarquee direction={"right"} padding={"pr-5"} />
            <div className="overlay w-full absolute inset-0 bg-linear-to-r from-background via-transparent to-background"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
