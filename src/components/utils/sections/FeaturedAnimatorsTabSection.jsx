"use client";

import React from "react";
import { motion } from "framer-motion";

const FeaturedAnimatorsTabSection = ({ tabs, selected, setSelected }) => {
  return (
    <div className="p-2 rounded-full bg-card flex items-center gap-1 xl:gap-2 border">
      {tabs.map((tab) => (
        <Chip
          tabName={tab.name}
          tab={tab.tab}
          selected={selected === tab.tab}
          setSelected={setSelected}
          key={tab.id}
        />
      ))}
    </div>
  );
};

const Chip = ({ tabName, tab, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(tab)}
      className={`text-white hover:bg-primary/30 text-sm lg:text-base transition-colors px-4 xl:px-8 py-2 xl:py-3 rounded-full relative cursor-pointer`}
    >
      <span className="relative z-10">{tabName}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-primary rounded-full"
        ></motion.span>
      )}
    </button>
  );
};

export default FeaturedAnimatorsTabSection;
