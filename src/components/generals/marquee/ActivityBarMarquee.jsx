"use client"

import React from "react";
import { motion } from "framer-motion";
import ActivityBarCard from "@/components/utils/cards/ActivityBarCard";
import { activityBarCardData } from "@/data/cards/ActivityBarCardData";

const ActivityBarMarquee = () => {
  return (
    <>
      <div className="flex items-center">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          className="testimonials-marquee flex"
        >
          {activityBarCardData.map((item) => {
            return (
              <>
                <div key={item.id}>
                  <ActivityBarCard
                    icon={item.icon}
                    heading={item.heading}
                    text={item.text}
                    time={item.time}
                    comment={item.comment}
                  />
                </div>
              </>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          className="testimonials-marquee flex"
        >
          {activityBarCardData.map((item) => {
            return (
              <>
                <div key={item.id}>
                  <ActivityBarCard
                    icon={item.icon}
                    heading={item.heading}
                    text={item.text}
                    time={item.time}
                    comment={item.comment}
                  />
                </div>
              </>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default ActivityBarMarquee;
