import { useState } from "react";
import "./NextVideos.scss";
import VideoCard from "../VideoCard/VideoCard";
import videoList from "../../data/videos.json";
const NextVideos = ({ videos, selectedVideo, handleVideoClick }) => {

  return (
    <section className="next-videos">
      <h3 className="next-videos__header">Next Videos</h3>
      <ul className="next-videos__list">
        {videos
          .filter((video) => video.id !== selectedVideo.id)
          .map((video) => {
            return (
              <VideoCard
                key={video.id}
                id={video.id}
                channel={video.channel}
                image={video.image}
                title={video.title}
                handleVideoClick={handleVideoClick}
              />
            );
          })}
      </ul>
    </section>
  );
};

export default NextVideos;
