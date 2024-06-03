import "./VideoPlayer.scss";

const VideoPlayer = ({ selectedVideo }) => {
  const image= selectedVideo.image;
  //to scroll to top when rerendering
  window.scrollTo(0, 0);
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
