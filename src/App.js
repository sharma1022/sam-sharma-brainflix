import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.jsx";
import videoDetails from "./data/video-details.json";
import VideoDetails from "./components/VideoDetails/VideoDetails.jsx";
import CommentSection from "./components/CommentSection/CommentSection.jsx";
import videoList from "./data/videos.json";
import NextVideos from "./components/NextVideos/NextVideos.jsx";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  const [videos, setVideos] = useState(videoList);

  const handleVideoClick = (id) => {
    const clickedVideo = videos.find((video) => video.id === id);
    setSelectedVideo(clickedVideo);
};

  return (
    <div className="App">
      <Header />
      <VideoPlayer selectedVideo={selectedVideo} />
      <VideoDetails selectedVideo={selectedVideo} />
      <CommentSection selectedVideo={selectedVideo} />
      <NextVideos
        selectedVideo={selectedVideo}
        handleVideoClick={handleVideoClick}
      />
    </div>
  );
}

export default App;
