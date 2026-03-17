"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignupSection = () => {
  // Use State Hook

  const [role, setRole] = useState("animator");

  return (
    <>
      <div className={"flex flex-col gap-6 pb-4"}>
        <div className="tabs-area w-full grid grid-cols-2 gap-2 border-2 rounded-lg p-1">
          <Button
            onClick={() => {
              setRole("animator");
            }}
            variant={role === "animator" ? "default" : "ghost"}
            className={"cursor-pointer"}
          >
            For Animator
          </Button>
          <Button
            onClick={() => {
              setRole("client");
            }}
            variant={role === "client" ? "default" : "ghost"}
            className={"cursor-pointer"}
          >
            For Client
          </Button>
        </div>
        <h3 className="heading-area w-full text-3xl font-bold text-center">
          Create Your {role === "animator" ? "Animator" : "Client"} Account
        </h3>
      </div>
      <div
        className={"input-group w-full grid grid-cols-1 gap-3 text-foreground"}
      >
        <div className="grid grid-cols-2 gap-3">
          <Input
            name="first-name"
            type="text"
            placeholder="First Name"
            className={"py-5"}
          />
          <Input
            name="last-name"
            type="text"
            placeholder="Last Name"
            className={"py-5"}
          />
        </div>
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
        <Input
          name="confirm-password"
          type="password"
          placeholder="Confirm Password"
          className={"py-5"}
        />
        <Button className={`cursor-pointer py-5`}>
          {role === "animator"
            ? "Create My Free Portfolio"
            : "Create Free Account"}
        </Button>
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
            <span>Signup With Google</span>
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
            <span>Signup With LinkedIn</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignupSection;
