"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

const FeaturedWorkSection = () => {
  const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
  const channelKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  const [activeButton, setActiveButton] = useState("");
  const [playlistDetail, setPlaylistDetail] = useState({});
  const [ytVideos, setYTVideos] = useState([]);
  const [numberOfVideos, setNumberOfVideos] = useState(6);

  const handleButtonClick = (index) => {
    setActiveButton(index);
    setButtonId(index);
    setPlaylistId(index);
    setNumberOfVideos(6);
    setLoadedVideos(6);
  };

  const [buttonId, setButtonId] = useState("all");
  const [playlistId, setPlaylistId] = useState(
    "PLyAdSp34JU7xYEnuPeVDC9lWWf1vOzRCo",
  );

  const [loadedVideos, setLoadedVideos] = useState(6);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const loadMoreVideos = () => {
    let newLoadedVideos = loadedVideos + 3;
    setLoadedVideos(newLoadedVideos);
  };

  useEffect(() => {
    const fetchYTPlaylist = async () => {
      const res = await axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=25&key=${channelKey}`,
        )
        .catch((err) => console.log(err));

      setPlaylistDetail(res.data);
      setActiveButton(playlistId || res.data.items[0].id);
    };

    fetchYTPlaylist();

    const fetchYTVideos = async () => {
      const res = await axios
        .get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&channelId=${channelId}&playlistId=${playlistId}&maxResults=50&key=${channelKey}`,
        )
        .catch((err) => console.log(err));

      // await console.log(res.data.items?.map((_, index) => index + 1))
      await setNumberOfVideos(res.data.items.length);
      setYTVideos(res.data);
      console.log(numberOfVideos);
    };

    fetchYTVideos();
  }, [playlistId, numberOfVideos]);

  return (
    <>
      <section className="featured-work-section w-full">
        <div className="inner-container w-full max-w-7xl flex flex-col items-center gap-5 mx-auto">
          <div className="top-area w-full flex items-center justify-between">
            <h2 className="text-2xl 2xl:text-3xl font-semibold">
              Featured Work
            </h2>
          </div>
          <div className="bottom w-full flex flex-col gap-8">
            <div
              className="buttons-area w-full grid grid-cols-1 md:grid-cols-3 lg:flex xl:items-center
             flex-wrap gap-3"
            >
              {playlistDetail?.items?.map((item) => {
                return (
                  <div key={item.id} onClick={() => handleButtonClick(item.id)}>
                    <Button
                      className={`w-full lg:w-fit cursor-pointer py-5 ${activeButton === item.id ? "bg-primary text-white" : " text-foreground bg-card hover:bg-card"}`}
                    >
                      <span className="line-clamp-1">{item.snippet.title}</span>
                    </Button>
                  </div>
                );
              })}
            </div>
            <div className="videos-area w-full">
              {/* {youtubeCardData &&
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
                                      frameBorder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      referrerPolicy="strict-origin-when-cross-origin"
                                      allowFullScreen
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
                    </>
                  );
                })} */}
              <div className="video grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {ytVideos?.items?.slice(0, loadedVideos).map((item, index) => {
                  return (
                    <div key={index} className={`flex bg-card rounded-xl`}>
                      <iframe
                        key={index}
                        width="100%"
                        height="309.375"
                        src={`https://www.youtube.com/embed/${item?.snippet?.resourceId?.videoId}`}
                        title={item?.snippet?.title}
                        thumbnail={item?.snippet?.thumbnails?.high?.url}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className={`rounded-xl`}
                      ></iframe>
                    </div>
                  );
                })}
              </div>
              <div
                onClick={loadMoreVideos}
                className={`button w-full ${ numberOfVideos > 6 ? "flex" : "hidden" } items-center justify-center mt-8`}
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
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedWorkSection;
