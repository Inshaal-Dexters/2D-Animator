import { User2 } from "lucide-react";
import React from "react";

const ActivityBarCard = ({ icon, heading, text, time, comment }) => {
  return (
    <>
      <div className={`testimonials-card h-full pl-5`}>
        <div className="w-xs md:w-md h-full flex flex-col gap-3 p-5 bg-card border-2 rounded-lg">
          <div className="top-area w-full flex items-center gap-2">
            <div className="icon-area rounded-full bg-primary/20 p-2">
              {icon}
            </div>
            <div className="text-area flex flex-col gap-1">
              <h3 className="text-xl font-semibold">{heading}</h3>
            </div>
          </div>
          <div className="bottom-area w-full h-full flex flex-col justify-between gap-3">
            <div className="content-area flex flex-col gap-2">
              <span className="text-sm xl:text-base">{text}</span>
              {comment && (
                <span className="text-muted-foreground italic text-sm xl:text-base">{comment}</span>
              )}
            </div>
            <span className="time text-muted-foreground text-sm xl:text-base">{time}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityBarCard;
