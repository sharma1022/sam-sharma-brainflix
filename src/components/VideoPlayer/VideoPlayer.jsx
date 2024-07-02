import { apiUrl } from "../../pages/MainVideoPage/MainVideoPage";
import "./VideoPlayer.scss";

const VideoPlayer = ({ selectedVideo }) => {
  const image = selectedVideo.image;
  //console.log(selectedVideo);
  return (
    <div className="video">
      <video
        className="video__player"
        poster={`${apiUrl}${image}`}
        controls
        width="80%"
      ></video>
    </div>
  );
};
export default VideoPlayer;
