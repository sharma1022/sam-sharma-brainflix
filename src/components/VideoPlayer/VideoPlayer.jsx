import "./VideoPlayer.scss";

const VideoPlayer = (props) => {
  return (
    <video
      className="video-player"
      poster={props.selectedVideo.image}
      controls
    ></video>
  );
};
export default VideoPlayer;
