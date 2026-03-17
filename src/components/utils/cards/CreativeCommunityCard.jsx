import React from "react";

const CreativeCommunityCard = ({ numbers, text }) => {
  return (
    <>
      <div className="creative-community-card w-full flex flex-col items-center gap-2 md:gap-4 2xl:gap-5 text-center">
        <h3 className="text-3xl md:text-4xl 2xl:text-5xl font-semibold text-center">{numbers}</h3>
        <span className="text-base md:text-lg 2xl:text-xl font-semibold text-center">{text}</span>
      </div>
    </>
  );
};

export default CreativeCommunityCard;
