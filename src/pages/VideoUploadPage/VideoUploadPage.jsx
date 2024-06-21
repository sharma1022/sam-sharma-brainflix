import "./VideoUploadPage.scss";
import uploadImg from "../../assets/images/Upload-video-preview.jpg";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoUploadPage = () => {
  const [vidTitle, setVidTitle] = useState("");
  const [vidDesc, setVidDesc] = useState("");
  const [isTitleBlank, setIsTitleBlank] = useState(false);
  const [isDescBlank, setIsDescBlank] = useState(false);
  const [publish, setPublish] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Brainflix - Upload Video";
  },[])

  useEffect(() => {
    setTimeout(() => {
      if (publish) {
        navigate("/");
      }
    }, 2500);
  }, [publish, navigate]);
  const handleTitleChange = (e) => {
    setVidTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setVidDesc(e.target.value);
  };

  const validateForm = () => {
    setIsTitleBlank(false);
    setIsDescBlank(false);

    if (vidTitle === "" && vidDesc === "") {
      setIsTitleBlank(true);
      setIsDescBlank(true);
    } else if (vidTitle === "") {
      setIsTitleBlank(true);
    } else if (vidDesc === "") {
      setIsDescBlank(true);
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsTitleBlank(false);
      setIsDescBlank(false);
      setPublish(true);
      setVidTitle("");
      setVidDesc("");
    }
  };

  return (
    <main>
      <section className="upload-video">
        <h1 className="upload-video__heading">Upload Video</h1>
        <form
          action="submit"
          className="upload-video__form"
          onSubmit={handleSubmit}
        >
          <div className="upload-video__container">
            <div className="upload-video__left">
              <p className="upload-video__thumbnail-label">Video Thumbnail</p>
              <img
                src={uploadImg}
                alt="Video Thumbnail"
                className="upload-video__img"
              />
            </div>
            <div className="upload-video__right">
              <label htmlFor="vidTitle" className="upload-video__label">
                Title your video
              </label>
              <Input
                type="text"
                className={isTitleBlank ? "input--error" : ""}
                value={vidTitle}
                placeholder={
                  isTitleBlank
                    ? "Video title cannot be empty"
                    : "Add a title to your video"
                }
                name="vidTitle"
                id="vidTitle"
                handleChange={handleTitleChange}
              />
              <label htmlFor="vidDesc" className="upload-video__label">
                Add a Video Description
              </label>
              <Input className={`input--desc ${isDescBlank ? "input--error" : ""}`}
              value={vidDesc}
              name="vidDesc"
              id="vidDesc"
              placeholder={
                isDescBlank
                  ? "Video description cannot be empty"
                  : "Add a description to your video"
              }
              handleChange={handleDescChange} txtArea/>
            </div>
          </div>
          {publish ? (
            <div className="upload-video__success">
              <p className="upload-video__txt">
                Video uploaded successfully. Redirecting you to the home page.
              </p>
              <div className="upload-video__loading"></div>
            </div>
          ) : (
            <div className="upload-video__form-actions">
              <Button
                type="submit"
                className="button--publish"
                text="Publish"
              />
              <Button
                type="button"
                className="button--cancel"
                text="Cancel"
                link="/"
              />
            </div>
          )}
        </form>
      </section>
    </main>
  );
};

export default VideoUploadPage;
