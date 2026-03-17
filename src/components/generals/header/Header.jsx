"use client";

import React from "react";
import { ThemeToggler } from "@/components/utils/buttons/ThemeToggler";
import SignupSection from "../section/SignupSection";
import SigninSection from "../section/SigninSection";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <>
      <header
        id="header"
        className="header w-full py-4 bg-white/5 backdrop-blur-sm border-b fixed top-0 z-99 px-3 md:px-6 lg:px-12 2xl:px-0"
      >
        <div className="header-inner w-full max-w-7xl mx-auto flex items-center justify-between">
          <div className="logo">
            <a href="/" className="text-2xl font-bold">
              2D Animator
            </a>
          </div>
          <div className="button-area flex items-center gap-2 z-999">
            <ThemeToggler />

            <Dialog>
              <DialogTrigger asChild>
                <Button variant={"outline"} className={`cursor-pointer`}>
                  Sign Up
                </Button>
              </DialogTrigger>
              <DialogContent className={`max-w-xl pt-15`}>
                <DialogTitle>
                  <SignupSection />
                </DialogTitle>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button className={`cursor-pointer`}>Sign In</Button>
              </DialogTrigger>
              <DialogContent className={`max-w-xl pt-15`}>
                <DialogTitle>
                  <SigninSection />
                </DialogTitle>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
