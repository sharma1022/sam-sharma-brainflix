import { useEffect, useState } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer.jsx";
import videoDetails from "../../data/video-details.json";
import VideoDetails from "../../components/VideoDetails/VideoDetails.jsx";
import CommentSection from "../../components/CommentSection/CommentSection.jsx";
import NextVideos from "../../components/NextVideos/NextVideos.jsx";
import "./MainVideoPage.scss";
import axios from 'axios';

const MainVideoPage = () => {
    const apiUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
    const apiKey = "934bc2ea-bf41-430c-a5db-b02987aec2a1";

    const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);
    
    const getVideos = async () => {
        try{
            const { data } = await axios.get(`${apiUrl}videos?api_key=${apiKey}`);
            setVideos(data);
            console.log(data);
        } catch(e){
            console.log(e);
        }
    }
    const handleVideoClick = (videoId) => {
      const clickedVideo = videoDetails.find((video) => video.id === videoId);
      console.log(videoId);
      console.log(clickedVideo);
      setSelectedVideo(clickedVideo);
      
    };
    return (
      <div className="App">
        <main>
          <VideoPlayer selectedVideo={selectedVideo} />
          <section className="page-content">
            <div className="page-content__selected-vid">
              <VideoDetails selectedVideo={selectedVideo} />
              <CommentSection selectedVideo={selectedVideo} />
            </div>
            <NextVideos
              videos={videos}
              selectedVideo={selectedVideo}
              handleVideoClick={handleVideoClick}
            />
          </section>
        </main>
      </div>
    );
}

export default MainVideoPage;