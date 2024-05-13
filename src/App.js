import './App.scss';
import Header from './components/Header/Header.jsx';
import VideoPlayer from './components/VideoPlayer/VideoPlayer.jsx';
import videoDetails from './data/video-details.json';
function App() {
  return (
    <div className="App">
      <Header />
      <VideoPlayer />
    </div>
  );
}

export default App;
