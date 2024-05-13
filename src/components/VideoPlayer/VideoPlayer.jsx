import "./VideoPlayer.scss";

const VideoPlayer = (props) => {
  return (
    <div className="video">
      <video
        className="video__player"
        poster={props.selectedVideo.image}
        controls
        width="80%"
      ></video>
    </div>
  );
};
export default VideoPlayer;
