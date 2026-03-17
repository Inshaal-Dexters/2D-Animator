"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const FeaturedAnimatorsCard = ({ card, selected, setSelected }) => {
  const [isClicked, setIsClick] = useState(false);

  // let isClicked = false

  return (
    <>
      <div
        className={`featured-animator-card w-full flex flex-col gap-5 p-2 md:p-4 rounded-lg bg-card border`}
      >
        <div className="thumbnail-area relative rounded-md overflow-hidden">
          <img
            src={card.thumbnail}
            alt={card.name}
            className="transition-all duration-300 hover:scale-105"
          />
          <div
            onClick={() => setIsClick(!isClicked)}
            className="icon-area cursor-pointer absolute animate- top-2 right-2 p-2 rounded-full bg-white"
          >
            <Heart
              fill={isClicked ? "red" : "white"}
              className="size-4 2xl:size-6 text-red-600"
            />
          </div>
        </div>
        <div className="content-area">
          <div className="specialty-area">
            <span className="text-muted-foreground text-sm md:text-base">{card.specialty}</span>
          </div>
          <div className="name-area mt-1">
            <h3 className="text-lg md:text-xl 2xl:text-2xl font-semibold">{card.name}</h3>
          </div>
        </div>
        <div className="btn-area w-full flex items-center justify-between gap-5">
          <Button className={"cursor-pointer w-full py-5 2xl:py-6 text-md"}>
            <a href="/mohammad-bangloria">More</a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default FeaturedAnimatorsCard;
