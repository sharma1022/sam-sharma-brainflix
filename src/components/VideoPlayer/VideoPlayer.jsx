import { apiUrl } from "../../pages/MainVideoPage/MainVideoPage";
import "./VideoPlayer.scss";
import playIcon from "../../assets/icons/play.svg";
import pauseIcon from "../../assets/icons/pause.svg";
import fullScreenIcon from "../../assets/icons/fullscreen.svg";
import volumeUpIcon from "../../assets/icons/volume_up.svg";
import volumeOffIcon from "../../assets/icons/volume_off.svg";
import { useEffect, useRef, useState } from "react";

const VideoPlayer = ({ selectedVideo }) => {
  const image = selectedVideo.image;

  const videoRef = useRef(null);
  const intervalRef = useRef(null);
  const seekRef = useRef(null);
  const volumeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const updateProgess = () => {
    if (videoRef.current) {
      const value =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(value);
    }
  };

  useEffect(() => {
    //set up event listener for wheen the video ends
    const video = videoRef.current;

    const handleVideoEnd = () => {
      setIsPlaying(false);
      setProgress(0);
      stopProgressLoop();
    };
    if (video) {
      video.addEventListener("ended", handleVideoEnd);
    }

    //clean up event listener
    return () => {
      if (video) {
        video.removeEventListener("ended", handleVideoEnd);
      }
      stopProgressLoop();
    };
  }, []);

  const startProgressLoop = () => {
    //clear existing intervals
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    //set up interval for updating progress bar
    intervalRef.current = setInterval(() => {
      updateProgess();
    }, 1000);
  };

  const stopProgressLoop = () => {
    //clear the interval wheen video is paused
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        startProgressLoop();
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
        stopProgressLoop();
      }
    }
  };

  const toggleMute = () => {
    const currentVolume = videoRef.current.volume;
    if (currentVolume > 0) {
      videoRef.current.volume = 0;
      setVolume(0);
      setIsMuted(true);
    } else {
      videoRef.current.volume = 1;
      setVolume(1);
      setIsMuted(false);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };
  useEffect(() => {
    const volumeSlider = volumeRef.current;
    volumeSlider.style.background = `linear-gradient(to right, #0095FF 0%, #0095FF ${
      volume * 100
    }%, #323232 ${volume * 100}%, #323232 100%)`;
  }, [volume]);

  const handleSeek = (e) => {
    const seekTo = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTo;
    setProgress(e.target.value);
  };

  useEffect(() => {
    const seekProgess = seekRef.current;
    seekProgess.style.background = `linear-gradient(to right, #0095FF 0%, #0095FF ${progress}%, #323232 ${progress}%, #323232 100%)`;
  }, [progress]);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      if (videoRef.current.requestFullsceen) {
        videoRef.current.requestFullsceen();
      } else if (videoRef.current.mozRequestFullScreen) {
        //Firefox
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        //Chrome, Safari, Opera
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        //Edge
        videoRef.current.msRequestFullscreen();
      }
      setIsFullScreen(isFullScreen);
    }

    document.addEventListener("fullscreenchange", () => {
      setIsFullScreen(!!document.fullscreenElement);
    });
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  const format = (seconds) => {
    if (isNaN(seconds)) {
      return `00:00`;
    }
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, "0");
    if (hh) {
      return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
    }
    return `${mm}:${ss}`;
  };

  const currentTime = videoRef.current ? videoRef.current.currentTime : "0:00";

  const duration = videoRef.current ? videoRef.current.duration : "0:00";

  const elapsedTime = format(currentTime);
  const totalDuration = format(duration);

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
            className="video__icon video__icon--play"
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
            <img
              className="video__icon  video__icon--fscreen"
              src={fullScreenIcon}
              alt="Fullscreen Button"
            ></img>
          </button>
          <div className="video__volume">
            <button
              className="video__btn video__btn--volume"
              onClick={toggleMute}
            >
              <img
                className="video__icon  video__icon--volume"
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
