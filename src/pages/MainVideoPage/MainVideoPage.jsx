import { useEffect, useState } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer.jsx";
import VideoDetails from "../../components/VideoDetails/VideoDetails.jsx";
import CommentSection from "../../components/CommentSection/CommentSection.jsx";
import NextVideos from "../../components/NextVideos/NextVideos.jsx";
import "./MainVideoPage.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

export const apiUrl = "http://localhost:8001";
//export const apiKey = "934bc2ea-bf41-430c-a5db-b02987aec2a1";

const MainVideoPage = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
  const { videoId } = useParams();

  useEffect(() => {
    getVideos();
    document.title = "Brainflix - Welcome";
  }, []);

  useEffect(() => {
    if (videoId) {
      getSelectedVideo(videoId);
    } else if (videos.length) {
      getSelectedVideo(videos[0].id);
    }
  }, [videoId, videos]);

  const getVideos = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/videos`);
      setVideos(data);
    } catch (e) {
      console.log(e);
    }
  };

  const getSelectedVideo = async (videoId) => {
    try {
      const { data } = await axios.get(`${apiUrl}/videos/${videoId}`);
      setSelectedVideo(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <main>
        <VideoPlayer selectedVideo={selectedVideo} />
        <section className="page-content">
          <div className="page-content__selected-vid">
            <VideoDetails selectedVideo={selectedVideo} />
            <CommentSection
              selectedVideo={selectedVideo}
              getSelectedVideo={getSelectedVideo}
            />
          </div>
          <NextVideos videos={videos} selectedVideo={selectedVideo} />
        </section>
      </main>
    </div>
  );
};

export default MainVideoPage;
