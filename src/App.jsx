import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import MainVideoPage from "./pages/MainVideoPage/MainVideoPage.jsx";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainVideoPage />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/upload" element={<VideoUploadPage />} />
        <Route path="/videos/:videoId" element={<MainVideoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
