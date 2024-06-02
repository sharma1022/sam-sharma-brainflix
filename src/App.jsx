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
  const handleVideoClick = (videoId) => {
    const clickedVideo = videoDetails.find((video) => video.id === videoId);
    console.log(videoId);
    console.log(clickedVideo);
    setSelectedVideo(clickedVideo);
    
  };
  return (
    <div className="App">
      <Header />
      <main>
        <VideoPlayer selectedVideo={selectedVideo} />
        <section className="page-content">
          <div className="page-content__selected-vid">
            <VideoDetails selectedVideo={selectedVideo} />
            <CommentSection selectedVideo={selectedVideo} />
          </div>
          <NextVideos
            selectedVideo={selectedVideo}
            handleVideoClick={handleVideoClick}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
