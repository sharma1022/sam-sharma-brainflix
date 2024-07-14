import { apiUrl } from "../../pages/MainVideoPage/MainVideoPage";
import "./VideoPlayer.scss";
import playIcon from "../../assets/icons/play.svg";
import pauseIcon from "../../assets/icons/pause.svg";
import fullScreenIcon from "../../assets/icons/fullscreen.svg";
import volumeUpIcon from "../../assets/icons/volume_up.svg";
import volumeOffIcon from "../../assets/icons/volume_off.svg";

const VideoPlayer = ({ selectedVideo }) => {
  const image = selectedVideo.image;
  return (
    <div className="video">
      <video
        className="video__player"
        id="video__player"
        poster={`${apiUrl}${image}`}
        src={`${apiUrl}/video/BrainStation Sample Video.mp4`}
        width="100%"
        ref={videoRef}
        onClick={togglePlayPause}
        onPlay={startProgressLoop}
        onPause={stopProgressLoop}
      ></video>
      <div className="video__controls">
        <button
          className="video__btn video__btn--play"
          onClick={togglePlayPause}
        >
          <img
            src={isPlaying ? `${pauseIcon}` : `${playIcon}`}
            alt="Play Button"
          ></img>
        </button>
        <div className="video__seek-container">
          <input
            className="video__range video__range--seek"
            type="range"
            min="0"
            max="100"
            onChange={handleSeek}
            ref={seekRef}
            value={progress}
          />
          <p className="video__time">
            {elapsedTime} / {totalDuration}
          </p>
        </div>

        <div className="video__options">
          <button
            className="video__btn video__btn--fscreen"
            onClick={toggleFullScreen}
          >
            <img src={fullScreenIcon} alt="Fullscreen Button"></img>
          </button>
          <div className="video__volume">
            <button
              className="video__btn video__btn--volume"
              onClick={toggleMute}
            >
              <img
                src={isMuted ? `${volumeOffIcon}` : `${volumeUpIcon}`}
                alt="Volume Button"
              ></img>
            </button>
            <div className="video__volume-control">
              <input
                className="video__range video__range--volume"
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                ref={volumeRef}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoPlayer;
