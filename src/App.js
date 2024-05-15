import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header.jsx';
import VideoPlayer from './components/VideoPlayer/VideoPlayer.jsx';
import videoDetails from './data/video-details.json';
import VideoDetails from './components/VideoDetails/VideoDetails.jsx';
import CommentSection from './components/CommentSection/CommentSection.jsx';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  return (
    <div className="App">
      <Header />
      <VideoPlayer selectedVideo={selectedVideo}/>
      <VideoDetails selectedVideo={selectedVideo} />
      <CommentSection selectedVidComments={selectedVideo.comments}/>
    </div>
  );
}

export default App;
