import { Button } from "@/components/ui/button";
import ActivityBarCard from "@/components/utils/cards/ActivityBarCard";
import { activityBarCardData } from "@/data/cards/ActivityBarCardData";
import { creativeCommunityCardData } from "@/data/cards/CreativeCommunityCardData";
import React from "react";
import ActivityBarMarquee from "../marquee/ActivityBarMarquee";

const ActivityBarSection = () => {
  return (
    <>
      <section className="activity-bar-section w-full">
        <div className="inner-container w-full max-w-232.5 2xl:max-w-full flex flex-col items-center gap-5 mx-auto">
          <div className="top-area w-full flex items-center justify-between">
            <h2 className="text-2xl 2xl:text-3xl font-semibold">
              Recent Community Activity
            </h2>
            <Button className={"cursor-pointer py-5"}>
              See All Activities
            </Button>
          </div>
          <div className="activity-area w-full flex overflow-x-hidden">
            <ActivityBarMarquee />
          </div>
        </div>
      </section>
    </>
  );
};

export default ActivityBarSection;
