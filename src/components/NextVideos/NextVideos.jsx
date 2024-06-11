import "./NextVideos.scss";
import VideoCard from "../VideoCard/VideoCard";
import { Link } from "react-router-dom";
const NextVideos = ({ videos, selectedVideo}) => {
  return (
    <section className="next-videos">
      <h3 className="next-videos__header">Next Videos</h3>
      <ul className="next-videos__list">
        {videos
          .filter((video) => video.id !== selectedVideo.id)
          .map((video) => {
            return (
              <Link className="next-videos__link" to={`/videos/${video.id}`} key={video.id} >
                <VideoCard
                  key={video.id}
                  id={video.id}
                  channel={video.channel}
                  image={video.image}
                  title={video.title}
                />
              </Link>
            );
          })}
      </ul>
    </section>
  );
};

export default NextVideos;
