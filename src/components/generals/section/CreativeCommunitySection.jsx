import CreativeCommunityCard from "@/components/utils/cards/CreativeCommunityCard";
import { creativeCommunityCardData } from "@/data/cards/CreativeCommunityCardData";
import React from "react";

const CreativeCommunitySection = () => {
  return (
    <>
      <section className="creative-community-section w-full px-3 md:px-6 lg:px-12 2xl:px-0">
        <div className="inner-container w-full max-w-7xl flex flex-col items-center gap-16 mx-auto py-0 xl:py-16">
          <div className="comminuty-area w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-3 xl:gap-0 bg-card border-2 rounded-2xl p-12 xl:p-16">
            {creativeCommunityCardData.map((item) => {
              return (
                <div key={item.id}>
                  <CreativeCommunityCard
                    numbers={item.numbers}
                    text={item.text}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CreativeCommunitySection;
