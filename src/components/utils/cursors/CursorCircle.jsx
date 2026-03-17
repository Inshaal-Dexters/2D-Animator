"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CursorCircle = () => {
  const cursorRef = useRef(null);

  window.addEventListener("mousemove", function (dets) {
    console.log(dets)
    gsap.to(cursorRef.current, {
      x: dets.clientX,
      y: dets.clientY,
    });
  })

  return (
    <>
      <span className="cursor size-5 fixed rounded-full bg-foreground"></span>
    </>
  );
};

export default CursorCircle;
