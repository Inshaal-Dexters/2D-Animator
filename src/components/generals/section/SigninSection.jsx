"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SigninSection = () => {
  return (
    <>
      <div className={"flex flex-col gap-6 pb-4"}>
        <h3 className="heading-area w-full text-3xl font-bold text-center">
          Welcome Back to 2D-Animator
        </h3>
      </div>
      <div
        className={"input-group w-full grid grid-cols-1 gap-3 text-foreground"}
      >
        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          className={"py-5"}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          className={"py-5"}
        />
        <div className="input-group w-full flex items-center gap-2">
          <Input type={"checkbox"} className={"w-4"} />
          <span className="text-muted-foreground text-sm">Remember Me</span>
        </div>
        <Button className={`cursor-pointer py-5`}>Create Free Account</Button>
        <div className="forget-link-area w-full text-center pt-2">
          <a href="#" className="text-primary text-sm underline underline-offset-2">
            Forget Password?
          </a>
        </div>
      </div>
      <div className="divider w-full flex items-center gap-3 py-8">
        <div className="line w-full h-0.5 bg-muted"></div>
        <span>or</span>
        <div className="line w-full h-0.5 bg-muted"></div>
      </div>
      <div>
        <div className="button-area w-full flex flex-col gap-3">
          <Button
            variant="outline"
            className={`w-full cursor-pointer py-5 text-foreground`}
          >
            <img
              src={"./images/icon-google.png"}
              alt="Google Icon"
              className="size-5"
            />
            <span>Signin With Google</span>
          </Button>
          <Button
            variant="outline"
            className={`w-full cursor-pointer py-5 text-foreground`}
          >
            <img
              src={"./images/icon-linkedin.png"}
              alt="LinkedIn Icon"
              className="size-5"
            />
            <span>Signin With LinkedIn</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default SigninSection;
