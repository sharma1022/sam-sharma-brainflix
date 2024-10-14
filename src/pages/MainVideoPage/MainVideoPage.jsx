import { useEffect, useState } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer.jsx";
import VideoDetails from "../../components/VideoDetails/VideoDetails.jsx";
import CommentSection from "../../components/CommentSection/CommentSection.jsx";
import NextVideos from "../../components/NextVideos/NextVideos.jsx";
import "./MainVideoPage.scss";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export const apiUrl = "https://brainflix-api-one.vercel.app";

const MainVideoPage = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
  const [isVideoFound, setIsVideoFound] = useState(true);
  const { videoId } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    let timer = "";
    if (!isVideoFound) {
      timer = setTimeout(() => {
        navigate("/");
        setIsVideoFound(true);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isVideoFound, navigate]);

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
      setIsVideoFound(true);
    } catch (e) {
      console.log(e);
      setIsVideoFound(false);
    }
  };

  const likeVideo = async (videoId) => {
    try {
      await axios.put(`${apiUrl}/videos/${videoId}/likes`);
      getSelectedVideo(videoId);
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
            <VideoDetails selectedVideo={selectedVideo} likeVideo={likeVideo} />
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
