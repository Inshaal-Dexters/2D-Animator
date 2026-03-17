import WhatICreatedCard from "@/components/utils/cards/WhatICreatedCard";
import { whatICreatedCardData } from "@/data/cards/WhatICreatedCardData";
import React from "react";

const WhatICreatedSection = () => {
  return (
    <>
      <section className="what-i-created-section w-full">
        <div className="inner-container w-full max-w-7xl flex flex-col items-center gap-5 mx-auto">
          <div className="top-area w-full flex items-center justify-between">
            <h2 className="text-2xl 2xl:text-3xl font-semibold">What I Created</h2>
          </div>
          <div className="bottom-area w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-5">
            {
                whatICreatedCardData.map(( item ) => {
                    return (
                        <div key={item.id}>
                            <WhatICreatedCard item={item} />
                        </div>
                    )
                })
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatICreatedSection;
