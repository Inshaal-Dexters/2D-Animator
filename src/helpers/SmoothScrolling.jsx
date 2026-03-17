"use client";

import Lenis from "lenis";
import React, { useEffect } from "react";

const SmoothScrolling = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    // Listen for the scroll event and log the event data
    lenis.on("scroll", (e) => {});
  }, []);
};

export default SmoothScrolling;
