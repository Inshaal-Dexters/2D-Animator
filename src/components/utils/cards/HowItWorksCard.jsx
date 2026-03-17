import React from "react";

const HowItWorksCard = ({ card }) => {
  return (
    <>
      <div className="how-it-works-card h-full w-full flex flex-col gap-5 xl:gap-8 p-6 xl:p-8 border-2 rounded-lg transition-all duration-300 hover:-translate-y-3 bg-card hover:bg-background">
        <div className="icon-area flex justify-center">
          <img src={card.icon} alt={card.name} className="size-10 xl:size-14" />
        </div>
        <div className="content-area w-full flex flex-col items-center gap-3">
          <h3 className="value-heading w-full text-xl xl:text-2xl font-semibold text-center">
            {card.heading}
          </h3>
          <p className="value-text w-full text-center text-sm xl:text-base">{card.text}</p>
        </div>
      </div>
    </>
  );
};

export default HowItWorksCard;
