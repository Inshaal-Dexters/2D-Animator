"use client";

import { Button } from "@/components/ui/button";
import {
  youtubeButtonData,
  youtubeCardData,
} from "@/data/cards/YoutubeCardData";
import { featuredWorkTabData } from "@/data/tabs/FeaturedWorkTabData";
import axios from "axios";
import React, { useEffect, useState } from "react";

const FeaturedWorkSection = () => {
  const [activeButton, setActiveButton] = useState("all");

  const [playlistDetail, setPlaylistDetail] = useState({});

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const [buttonId, setButtonId] = useState("all");

  const handleAddButtonId = (id) => {
    setButtonId(id);
    if (id == "all") {
      setLoadedVideos(6);
    }
  };

  const [loadedVideos, setLoadedVideos] = useState(6);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const loadMoreVideos = () => {
    let newLoadedVideos = loadedVideos + 3;
    setLoadedVideos(newLoadedVideos);
  };

  // useEffect(() => {
  //   const fetchYTPlaylist = async () => {
  //     const res = await axios
  //       .get(
  //         `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLojnlzpK9oWLb6vV9961NInwIjSjkL5y_&key=AIzaSyBwtRnNhleRwBatK5G352BkSZKTLit5vrs`,
  //       )
  //       .catch((err) => console.log(err));

  //     console.log(res.data);
  //     setPlaylistDetail(res.data);
  //     console.log(res.data.items[0].snippet);
  //   };

  //   fetchYTPlaylist();
  // }, []);

  return (
    <>
      <section className="featured-work-section w-full">
        <div className="inner-container w-full max-w-7xl flex flex-col items-center gap-5 mx-auto">
          <div className="top-area w-full flex items-center justify-between">
            <h2 className="text-2xl 2xl:text-3xl font-semibold">
              Featured Work
            </h2>
          </div>
          <div className="tabs-area w-full flex items-center gap-2">
            {playlistDetail?.items?.map((item) => {
              return (
                <div key={item.id} onClick={() => handleButtonClick(item.id)}>
                  <Button
                    className={`cursor-pointer py-5 ${activeButton === item.id ? "bg-primary" : "bg-card hover:bg-card"}`}
                  >
                    {item.snippet.title}
                  </Button>
                </div>
              );
            })}
          </div>
          <div className="bottom w-full flex flex-col gap-8">
            <div className="buttons-area w-full grid grid-cols-1 md:grid-cols-3 xl:flex xl:items-center gap-3">
              {youtubeButtonData &&
                youtubeButtonData.map((item, index) => {
                  return (
                    <>
                      <Button
                        key={index}
                        onClick={() => handleAddButtonId(item.buttonId)}
                        className={`cursor-pointer py-5 ${buttonId === item.buttonId ? "bg-primary" : "bg-card hover:bg-primary"}`}
                      >
                        {item.name}
                      </Button>
                    </>
                  );
                })}
            </div>
            <div className="videos-area w-full">
              {youtubeCardData &&
                youtubeCardData.map((item, index) => {
                  return (
                    <>
                      {item.playlist == "All" && (
                        <div className="item flex flex-col gap-5">
                          <div className="video grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                            {item.videos
                              .slice(0, loadedVideos)
                              .map((item, index) => {
                                return (
                                  <div
                                    key={index}
                                    className={`${
                                      buttonId == "all"
                                        ? `flex bg-card rounded-xl`
                                        : "hidden"
                                    }`}
                                  >
                                    <iframe
                                      key={index}
                                      width="100%"
                                      // height="309.375"
                                      src={`https://www.youtube.com/embed/${item.link}`}
                                      title={item.title}
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      referrerpolicy="strict-origin-when-cross-origin"
                                      allowfullscreen
                                      className={`rounded-xl h-[309.375px]`}
                                    ></iframe>
                                  </div>
                                );
                              })}
                          </div>
                          <div
                            onClick={loadMoreVideos}
                            className={`button w-full ${
                              buttonId == "all" ? `flex ` : "hidden"
                            } items-center justify-center`}
                          >
                            <Button
                              className={`cursor-pointer py-5 ${
                                loadedVideos == 20 && "hidden"
                              }`}
                            >
                              Load More
                            </Button>
                          </div>
                        </div>
                      )}
                      {item.playlist == "Motion Graphics" && (
                        <div
                          className={`item ${
                            buttonId == "motion-graphics" ? "flex" : "hidden"
                          } flex-col gap-5`}
                        >
                          <div className="video grid grid-cols-3 gap-5">
                            {item.videos.map((item, index) => {
                              return (
                                <div
                                  key={index}
                                  className={`${index <= 2 ? "flex bg-card rounded-xl" : "hidden"}`}
                                >
                                  <iframe
                                    key={index}
                                    width="100%"
                                    height="309.375"
                                    src={`https://www.youtube.com/embed/${item.link}`}
                                    title={item.title}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                    className={`rounded-xl`}
                                  ></iframe>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                      {item.playlist == "Explainer Videos" && (
                        <div
                          className={`item ${
                            buttonId == "explainer-videos" ? "flex" : "hidden"
                          } flex-col gap-5`}
                        >
                          <div className="video grid grid-cols-3 gap-5">
                            {item.videos.map((item, index) => {
                              return (
                                <div
                                  key={index}
                                  className={`${index <= 2 ? "flex bg-card rounded-xl" : "hidden"}`}
                                >
                                  <iframe
                                    key={index}
                                    width="100%"
                                    height="309.375"
                                    src={`https://www.youtube.com/embed/${item.link}`}
                                    title={item.title}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                    className={`rounded-xl`}
                                  ></iframe>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                      {item.playlist == "Isometric Animation" && (
                        <div
                          className={`item ${
                            buttonId == "isometric-animation"
                              ? "flex"
                              : "hidden"
                          } flex-col gap-5`}
                        >
                          <div className="video grid grid-cols-3 gap-5">
                            {item.videos.map((item, index) => {
                              return (
                                <div
                                  key={index}
                                  className={`${index <= 2 ? "flex bg-card rounded-xl" : "hidden"}`}
                                >
                                  <iframe
                                    key={index}
                                    width="100%"
                                    height="309.375"
                                    src={`https://www.youtube.com/embed/${item.link}`}
                                    title={item.title}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                    className={`rounded-xl`}
                                  ></iframe>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                      {item.playlist == "Whiteboard Animation" && (
                        <div
                          className={`item ${
                            buttonId == "whiteboard-animation"
                              ? "flex"
                              : "hidden"
                          } flex-col gap-5`}
                        >
                          <div className="video grid grid-cols-3 gap-5">
                            {item.videos.map((item, index) => {
                              return (
                                <div
                                  key={index}
                                  className={`${index <= 2 ? "flex bg-card rounded-xl" : "hidden"}`}
                                >
                                  <iframe
                                    key={index}
                                    width="100%"
                                    height="309.375"
                                    src={`https://www.youtube.com/embed/${item.link}`}
                                    title={item.title}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                    className={`rounded-xl`}
                                  ></iframe>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                      {item.playlist == "2D Animated Video" && (
                        <div
                          className={`item ${
                            buttonId == "2d-animated-video" ? "flex" : "hidden"
                          } flex-col gap-5`}
                        >
                          <div className="video grid grid-cols-3 gap-5">
                            {item.videos.map((item, index) => {
                              return (
                                <div
                                  key={index}
                                  className={`${index <= 2 ? "flex bg-card rounded-xl" : "hidden"}`}
                                >
                                  <iframe
                                    key={index}
                                    width="100%"
                                    height="309.375"
                                    src={`https://www.youtube.com/embed/${item.link}`}
                                    title={item.title}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                    className={`rounded-xl`}
                                  ></iframe>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedWorkSection;
