import AnimatorsSidebar from "@/components/generals/sidebar/AnimatorsSidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <div className="w-full grid grid-cols-1 lg:grid-cols-[310px_1fr]">
        <div className="sidebar relative w-full hidden lg:flex border-r bg-muted/40">
          <div className="h-full w-full flex flex-col pt-17.5">
            <AnimatorsSidebar />
          </div>
        </div>
        <div className="content w-full">{children}</div>
      </div>
    </>
  );
};

export default layout;
