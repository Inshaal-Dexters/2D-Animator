import React from "react";

const ValuePropositionCard = ({ item }) => {
  return (
    <>
      <div className="value-proposition-card h-full w-full flex flex-col gap-5 p-6 xl:p-8 border-2 rounded-lg transition-all duration-300 hover:-translate-y-3 bg-card hover:bg-background">
        <div className="icon-area">
          <img src={item.icon} alt={item.name} className="size-10 xl:size-14" />
        </div>
        <div className="content-area w-full flex flex-col gap-3">
          <h3 className="value-heading w-full text-xl xl:text-2xl font-semibold">
            {item.heading}
          </h3>
          <p className="value-text w-full text-sm xl:text-base">{item.text}</p>
        </div>
      </div>
    </>
  );
};

export default ValuePropositionCard;
