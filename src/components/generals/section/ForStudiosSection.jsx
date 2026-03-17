import { Button } from "@/components/ui/button";
import ForStudiosCard from "@/components/utils/cards/ForStudiosCard";
import { Circle } from "lucide-react";
import React from "react";

const ForStudiosSection = () => {
  const list = [
    "Advanced search filters by animation style, software, and experience",
    "Direct messaging with animators",
    "Save favorites and create talent pools",
    "Post job opportunities to targeted audiences",
  ];

  return (
    <section className="for-studios-section w-full px-3 md:px-6 lg:px-12 2xl:px-0">
      <div className="inner-container w-full max-w-7xl flex flex-col-reverse lg:grid grid-cols-2 gap-10 xl:gap-16 mx-auto py-16 xl:py-28 pt-10 md:pt-0 xl:pt-16 overflow-hidden">
        <div className="left-area w-full flex flex-col gap-3 pt-10">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-semibold">
            For Studios & Creative Directors
          </h2>
          <p className="text-base xl:text-lg mt-5">
            Looking for exceptional 2D animation talent? Browse thousands of
            portfolios, filter by specialty and style, and connect directly with
            animators who match your project needs.
          </p>
          <div className="list-area flex flex-col gap-2 mt-3">
            {list.map((item, index) => {
              return (
                <span key={index} className="flex items-center gap-2 text-sm xl:text-base">
                  <Circle className="size-2" /> {item}
                </span>
              );
            })}
          </div>
          <div className="btn-area mt-5">
            <Button
              variant="outline"
              className={`cursor-pointer w-full md:w-fit py-6 md:py-6 px-0 md:px-10 text-base`}
            >
              Explore Talent
            </Button>
          </div>
        </div>
        <div className="right-area w-full">
          <ForStudiosCard />
        </div>
      </div>
    </section>
  );
};

export default ForStudiosSection;
