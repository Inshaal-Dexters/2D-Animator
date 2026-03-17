"use client";

import React, { useRef } from "react";
import ValuePropositionCard from "@/components/utils/cards/ValuePropositionCard";
import { valuePropositionCardData } from "@/data/cards/ValuePropositionCardData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ValuePropositionSection = () => {
  const valueCardRef = useRef([]);

  useGSAP(() => {
    if (window.innerWidth > 1280) {
      gsap.from(valueCardRef.current, {
        y: "100%",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".value-proposition-section",
          start: "top 70%",
          end: "bottom 60%",
          scrub: true,
        },
      });
    }

    if (window.innerWidth > 820) {
      gsap.from(valueCardRef.current, {
        y: "100%",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".value-proposition-section",
          start: "top 70%",
          end: "bottom 80%",
          scrub: true,
        },
      });
    }
  });

  return (
    <>
      <section className="value-proposition-section w-full pb-0 xl:pb-16 px-3 md:px-6 lg:px-12 2xl:px-0">
        <div className="inner-container w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-5 md:gap-3 xl:gap-6 mx-auto overflow-hidden pt-0 2xl:pt-8">
          {valuePropositionCardData &&
            valuePropositionCardData.map((item, index) => {
              return (
                <div
                  ref={(el) => (valueCardRef.current[index] = el)}
                  key={item.id}
                >
                  <ValuePropositionCard item={item} />
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default ValuePropositionSection;
