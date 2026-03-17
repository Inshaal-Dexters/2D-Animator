"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { ArrowLeftToLine, Heart, MapPin, User2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const AnimatorsSidebar = () => {
  const quickStatsBar = [
    {
      id: 0,
      numbers: "523",
      text: "Projects",
    },
    {
      id: 1,
      numbers: "12.3K",
      text: "Followers",
    },
    {
      id: 2,
      numbers: "847",
      text: "Following",
    },
  ];

  const socialMedia = [
    {
      id: 0,
      iconWhite: "./images/socials/icon-behance-white.png",
      iconblack: "./images/socials/icon-behance-black.png",
      text: "Behance",
      link: "",
    },
    {
      id: 1,
      iconWhite: "./images/socials/icon-linkedin-white.png",
      iconblack: "./images/socials/icon-linkedin-black.png",
      text: "LinkedIn",
      link: "",
    },
    {
      id: 2,
      iconWhite: "./images/socials/icon-instagram-white.png",
      iconblack: "./images/socials/icon-instagram-black.png",
      text: "Instagram",
      link: "",
    },
    {
      id: 3,
      iconWhite: "./images/socials/icon-vimeo-white.png",
      iconblack: "./images/socials/icon-vimeo-black.png",
      text: "Vimeo",
      link: "",
    },
    {
      id: 4,
      iconWhite: "./images/socials/icon-website-white.png",
      iconblack: "./images/socials/icon-website-black.png",
      text: "Website",
      link: "",
    },
  ];

  const [user, setUser] = useState({});

  // useEffect(() => {
    // const handleFetchUser = async () => {
    //   const res = await axios
    //     .get(
    //       "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCXHi74ZfE_0mSFF355macXg&key=AIzaSyBwtRnNhleRwBatK5G352BkSZKTLit5vrs",
    //     )
    //     .catch((err) => console.log(err));

    //   setUser(res.data.items[0]);
    // };

    // handleFetchUser();
  // }, [user]);


  return (
    <div className="animators-sidebar w-full flex flex-col sticky top-17.5 px-4 2xl:px-6">
      <div className="inner-container w-full flex flex-col gap-5 pt-4 2xl:pt-5">
        <div className="back-to-home-btn w-full">
          <Button variant="outline">
            <a href="/">
              <ArrowLeftToLine className="size-4 2xl:size-5 text-muted-foreground" />
            </a>
          </Button>
        </div>
        <div className="avatar-area h-fit w-full flex items-center justify-center">
          {/* <img src="" alt="Profile Image" /> */}
          {user?.snippet ? (
            <div className="p-8 2xl:p-10 py-8.5 2xl:py-10.5 bg-primary rounded-full select-none">
              <span className="text-2xl 2xl:text-3xl font-semibold">MB</span>
            </div>
          ) : (
            // <Skeleton className="size-30 rounded-full" />
            <div className="p-8 2xl:p-10 py-8.5 2xl:py-10.5 bg-primary rounded-full select-none">
              <span className="text-2xl 2xl:text-3xl font-semibold">MB</span>
            </div>
          )}
        </div>
        <div className="info-area w-full flex flex-col items-center gap-1 2xl:gap-2">
          <div className="name-area mt-1">
            <h3 className="text-lg 2xl:text-xl font-semibold text-center">
              {user?.snippet ? (
                // user?.snippet?.title
                "Mohammad Bangloria"
              ) : (
                // <Skeleton className="h-4 w-45 my-2 mb-1" />
                "Mohammad Bangloria"
              )}
            </h3>
          </div>
          <div className="specialty-area">
            <span className="text-muted-foreground text-center text-sm 2xl:text-base">
              {user?.snippet ? (
                "Product Designer"
              ) : (
                // <Skeleton className="h-4 w-34 my-1" />
                "Product Designer"
              )}
            </span>
          </div>
          <div className="location-area flex items-center gap-1">
            {user?.snippet ? (
              <MapPin className="size-4 2xl:size-5 text-muted-foreground" />
            ) : (
              // <Skeleton className="h-4 w-4 my-1 rounded-full" />
              <MapPin className="size-4 2xl:size-5 text-muted-foreground" />
            )}
            <span className="text-muted-foreground text-center text-sm 2xl:text-base">
              {user?.snippet ? (
                "United States"
              ) : (
                // <Skeleton className="h-4 w-20 my-1" />
                "United States"
              )}
            </span>
          </div>
        </div>
        <div className="quick-state-bar-area w-full grid grid-cols-3 gap-2 mt-1 2xl:mt-3">
          {quickStatsBar.map((item) => {
            return (
              <div key={item.id} className="flex flex-col items-center gap-1">
                <span className="text-center text-base 2xl:text-lg">
                  {user?.snippet ? (
                    item.numbers
                  ) : (
                    // <Skeleton className="h-4 w-10 my-2 mb-1" />
                    item.numbers
                  )}
                </span>
                <span className="text-muted-foreground text-center text-sm 2xl:text-base">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
        <div className="line w-full h-0.5 bg-muted my-3 2xl:my-4"></div>
        <div className="button-area w-full flex flex-col gap-3">
          <Button className={"cursor-pointer py-5"}>
            <User2 className="size-4" /> Hire Me
          </Button>
          <Button variant="outline" className={"cursor-pointer py-5"}>
            <Heart className="size-4" /> Follow
          </Button>
        </div>
        <div className="socials-area w-full flex items-center justify-between">
          {socialMedia.map((item) => {
            return (
              <a
                href={item.link}
                key={item.id}
                target="_blank"
                className="bg-[#1F1F21] rounded-md p-0.5"
              >
                <img src={item.iconWhite} alt={item.text} className="size-9" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AnimatorsSidebar;
