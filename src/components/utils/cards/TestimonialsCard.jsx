import React from "react";

const TestimonialsCard = ({ card, padding }) => {
  return (
    <div className={`testimonials-card h-full ${padding}`}>
      <div className="w-xs md:w-md h-full flex flex-col justify-between p-4 md:p-5 bg-card border-2 rounded-lg">
        <div className="top-area w-full pb-4 md:pb-5 text-sm md:text-base">{card.text}</div>
        <div className="bottom-area w-full flex justify-between pt-4 md:pt-5 border-t">
          <div className="text-area flex flex-col gap-1">
            <h3 className="text-xl md:text-2xl">{card.name}</h3>
            <span className="text-muted-foreground text-sm md:text-base">{card.profession}</span>
          </div>
          <div className="image-area">
            <img
              src={card.image}
              alt={card.name}
              className="size-10 md:size-12 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
