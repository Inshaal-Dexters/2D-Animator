"use client";

import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const HorizontalScrollSection = () => {
  return (
    <>
      <HorizontalScrollCarousel />
    </>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["7.5%", "-62.5%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div key={card.id} className="group relative h-190 w-350 flex items-center justify-center border-2 border-white">
      {/* <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"></div> */}
      {/* <div className="absolute inset-0 z-10 grid place-content-center"> */}
      <p className="p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
        {card.title}
      </p>
      {/* </div> */}
    </div>
  );
};

export default HorizontalScrollSection;

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  //   {
  //     url: "/imgs/abstract/4.jpg",
  //     title: "Title 4",
  //     id: 4,
  //   },
  //   {
  //     url: "/imgs/abstract/5.jpg",
  //     title: "Title 5",
  //     id: 5,
  //   },
  //   {
  //     url: "/imgs/abstract/6.jpg",
  //     title: "Title 6",
  //     id: 6,
  //   },
  //   {
  //     url: "/imgs/abstract/7.jpg",
  //     title: "Title 7",
  //     id: 7,
  //   },
];
