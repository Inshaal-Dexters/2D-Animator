"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import FeaturedAnimatorsTabSection from "@/components/utils/sections/FeaturedAnimatorsTabSection";
import FeaturedAnimatorsCard from "@/components/utils/cards/FeaturedAnimatorsCard";
import { featuredAnimatorsTabData } from "@/data/tabs/FeaturedAnimatorsTabData";
import { featuredAnimatorsCardData } from "@/data/cards/FeaturedAnimatorsCardData";

const FeaturedAnimatorsSection = () => {
  const [selected, setSelected] = useState(featuredAnimatorsTabData[0].tab);

  return (
    <>
      <section className="featured-animators-section w-full px-3 md:px-6 lg:px-12 2xl:px-0">
        <div className="inner-container w-full max-w-7xl flex flex-col items-center gap-10 xl:gap-16 mx-auto py-16 lg:py-28">
          <div className="top-area w-full flex flex-col items-center gap-5">
            <h2 className="text-3xl md:text-4xl xl:text-5xl text-center font-semibold">
              Today's Featured{" "}
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
              </span>
            </h2>
            <p className="text-center w-full max-w-3xl text-base xl:text-lg text-muted-foreground">
              Discover exceptional 2D animation talent from around the world
            </p>
          </div>
          <div className="bottom-area w-full flex flex-col gap-10">
            <div className="filter-area w-full hidden sm:flex items-center justify-center">
              <FeaturedAnimatorsTabSection
                selected={selected}
                setSelected={setSelected}
                tabs={featuredAnimatorsTabData}
              />
            </div>
            <div className="card-area w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
              {featuredAnimatorsCardData.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={`${
                      selected === "trending" || item.tab === selected
                        ? `${ item.id > 5 ? "hidden lg:flex" : "flex" }`
                        : "hidden"
                    }`}
                  >
                    <FeaturedAnimatorsCard
                      card={item}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedAnimatorsSection;
