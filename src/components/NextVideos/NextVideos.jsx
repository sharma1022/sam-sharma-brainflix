import "./NextVideos.scss";
import VideoCard from "../VideoCard/VideoCard";

const NextVideos = ({ videos, selectedVideo }) => {
  return (
    <section className="next-videos">
      <h3 className="next-videos__header">Next Videos</h3>
      <ul className="next-videos__list">
        {videos
          .filter((video) => video.id !== selectedVideo.id)
          .map((video) => {
            return <VideoCard video={video} key={video.id} />;
          })}
      </ul>
    </section>
  );
};

export default NextVideos;
