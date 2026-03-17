"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import SignupSection from "../section/SignupSection";

const HomeHero = () => {
  return (
    <>
      <section className="hero-section w-full min-h-[70vh] lg:min-h-[90vh] flex items-center pb-26 xl:pb-48 py-44 xl:py-48 px-3 md:px-6 lg:px-12 2xl:px-0">
        <div className="hero-container w-full max-w-7xl mx-auto">
          <div className="content-area w-full flex flex-col items-center justify-center">
            <h1 className="text-[40px] md:text-[55px] lg:text-[75px] 2xl:text-[90px] leading-13 md:leading-15 lg:leading-22 2xl:leading-26 font-extrabold text-center">
              Your{" "}
              <span className="relative">
                Animations
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
              <span className="text-primary">.</span> Your Communitys
              <span className="text-primary">.</span> Your Stage
            </h1>
            <p className="text-center mt-8 md:mt-10 w-full max-w-3xl text-base md:text-lg text-muted-foreground">
              Join the premier platform where 2D animators showcase their work,
              connect with peers, and get discovered by studios worldwide.
            </p>
            <div className="button-area w-full flex flex-col md:flex-row items-center justify-center gap-5 mt-8 md:mt-10">
              <Dialog className={`w-full md:w-fit`}>
                <DialogTrigger className={`w-full md:w-fit`}>
                  <Button className={`cursor-pointer w-full md:w-fit p-6 text-base`}>
                    Create Your Profile - It's Free
                  </Button>
                </DialogTrigger>
                <DialogContent className={`max-w-xl pt-15`}>
                  <DialogTitle>
                    <SignupSection />
                  </DialogTitle>
                </DialogContent>
              </Dialog>
              <Button variant={"outline"} className={`cursor-pointer w-full md:w-fit p-6 text-base`}>
                Explore Animator Portfolios
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
