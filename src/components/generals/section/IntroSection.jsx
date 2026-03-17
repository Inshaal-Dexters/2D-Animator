import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const IntroSection = ({ user }) => {
  const tags = [
    "Explainer Videos",
    "Product Demos",
    "SaaS Animation",
    "Motion Graphics",
    "Software Tutorials",
    "2D Animation",
    "Whiteboard Animation",
    "Logo Animation",
  ];

  return (
    <>
      <div className="intro-section w-full">
        <div className="inner-container w-full flex flex-col gap-5 p-5 md:p-8 2xl:p-10 bg-card border rounded-2xl">
          <div className="heading-area w-full">
            <h1 className="text-3xl font-semibold flex items-center flex-wrap gap-1 md:gap-3">
              Hi, I'm{" "}
              <span className="text-primary">
                {user?.snippet ? (
                  // user?.snippet?.title
                  "Mohammad Bangloria"
                ) : (
                  // <Skeleton className="h-6 w-70 my-2 mb-1" />
                  "Mohammad Bangloria"
                )}
              </span>
            </h1>
          </div>
          <div className="content-area w-full flex flex-col gap-3">
            <p className="text-sm 2xl:text-base">
              As a motion graphics designer and video editor, I help brands
              transform complex ideas into engaging visual stories. I work with
              SaaS companies, startups, and established businesses to produce
              explainer videos, animated product demos, and software tutorials
              that convert viewers into customers.
            </p>
            <p className="text-sm 2xl:text-base">
              Whether you're launching a new product or simplifying technical
              concepts for your audience, I create video content that educates,
              entertains, and elevates your marketing efforts.
            </p>
          </div>
          <div className="tags-area w-full flex items-center flex-wrap gap-2">
            {tags.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-fit bg-primary/20 border border-primary/40 rounded-full py-1.5 md:py-2 px-2 md:px-5 text-white text-xs md:text-sm"
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
