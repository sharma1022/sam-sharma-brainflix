import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import MainVideoPage from "./pages/MainVideoPage/MainVideoPage.jsx";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainVideoPage />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/upload" element={<VideoUploadPage />} />
        <Route path="/videos/:videoId" element={<MainVideoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
