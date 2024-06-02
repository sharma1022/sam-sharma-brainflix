import "./VideoPlayer.scss";

const VideoPlayer = ({ selectedVideo }) => {
  const image= selectedVideo.image;
  return (
    <div className="video">
      <video
        className="video__player"
        poster={image}
        controls
        width="80%"
      ></video>
    </div>
  );
};
export default VideoPlayer;
