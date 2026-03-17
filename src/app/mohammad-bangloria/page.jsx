"use client";

import React, { useEffect, useState } from "react";
import ActivityBarSection from "@/components/generals/section/ActivityBarSection";
import FeaturedWorkSection from "@/components/generals/section/FeaturedWorkSection";
import IntroSection from "@/components/generals/section/IntroSection";
import WhatICreatedSection from "@/components/generals/section/WhatICreatedSection";
import axios from "axios";

const MuhammadBangloriaPage = () => {

  const [user, setUser] = useState({});

  // useEffect(() => {
    // const handleFetchUser = async () => {
    //   const res = await axios.get(
    //     "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCXHi74ZfE_0mSFF355macXg&key=AIzaSyBwtRnNhleRwBatK5G352BkSZKTLit5vrs",
    //   ).catch((err) => console.log(err));
    //   setUser(res.data.items[0]);
    // };

    // handleFetchUser();
  // }, [user]);

  return (
    <div className="animators-section w-full max-w-7xl pt-17.5">
      <div className="inner-container w-full flex flex-col gap-10 p-3 md:p-5 pr-3 md:pr-5 2xl:pr-0">
        <IntroSection user={user} />
        <ActivityBarSection user={user} />
        <WhatICreatedSection user={user} />
        <FeaturedWorkSection user={user}/>
      </div>
    </div>
  );
};

export default MuhammadBangloriaPage;
