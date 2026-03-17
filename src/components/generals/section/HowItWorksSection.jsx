"use client";

import React, { useRef } from "react";
import HowItWorksCard from "@/components/utils/cards/HowItWorksCard";
import { howItWorksCardData } from "@/data/cards/HowItWorksCardData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HowItWorksSection = () => {
  const workCardRef = useRef([]);

  useGSAP(() => {
    if (window.innerWidth > 1280) {
      gsap.from(workCardRef.current, {
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".how-it-works-section",
          start: "top 40%",
          end: "bottom 60%",
          scrub: true,
        },
      });
    }

    if (window.innerWidth > 820) {
      gsap.from(workCardRef.current, {
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".how-it-works-section",
          start: "top 40%",
          end: "bottom 80%",
          scrub: true,
        },
      });
    }
  });

  return (
    <>
      <section className="how-it-works-section w-full px-3 md:px-6 lg:px-12 2xl:px-0">
        <div className="inner-container w-full max-w-7xl flex flex-col items-center gap-10 xl:gap-16 mx-auto py-16 lg:py-28">
          <div className="top-area w-full flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl xl:text-5xl text-center font-semibold">
              Start Showcasing Your Work in Minutes
              {/* <span className="relative">
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
              </span> */}
            </h2>
          </div>
          <div className="bottom-area w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-5 md:gap-3 xl:gap-6">
            {howItWorksCardData.map((item) => {
              return (
                <div
                  ref={(el) => (workCardRef.current[item.id] = el)}
                  key={item.id}
                >
                  <HowItWorksCard card={item} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorksSection;
