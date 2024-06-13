import "./VideoUploadPage.scss"
import uploadImg from "../../assets/images/Upload-video-preview.jpg";
import Button from "../../components/Button/Button";
import { useState } from "react";

const VideoUploadPage = () => {

    const [vidTitle, setVidTitle] = useState("");
    const [vidDesc, setVidDesc] = useState("");
    const [isTitleBlank, setIsTitleBlank] = useState(false);
    const [isDescBlank, setIsDescBlank] = useState(false);
    const handleTitleChange = (e) => {
        setVidTitle(e.target.value);
    };

    const handleDescChange = (e) => {
        setVidDesc(e.target.value);
    }

    const validateForm = () => {

        setIsTitleBlank(false);
        setIsDescBlank(false);

        if(vidTitle === "" && vidDesc === ""){
            setIsTitleBlank(true);
            setIsDescBlank(true);
        } else if (vidTitle === ""){
            setIsTitleBlank(true);
        } else if (vidDesc === "") {
            setIsDescBlank(true);
        } else {
            return true;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(validateForm()) {
            setIsTitleBlank(false);
            setIsDescBlank(false);
        }
    }

    return(
        <main>
            <section className="upload-video">
                <h1 className="upload-video__heading">Upload Video</h1>
                <form action="submit" className="upload-video__form" onSubmit={handleSubmit}>
                    <div className="upload-video__container">
                        <div className="upload-video__left">
                            <p className="upload-video__thumbnail-label">Video Thumbnail</p>
                            <img src={uploadImg} alt="Video Thumbnail" className="upload-video__img" />
                        </div>
                        <div className="upload-video__right">
                            <label htmlFor="" className="upload-video__label">Title your video</label>
                            <input type="text" className={`upload-video__input ${isTitleBlank ? "upload-video__input-error" : ""}`} value={vidTitle} placeholder={`${isTitleBlank ? "Video title cannot be empty" : "Add a title to your video"}`} name="vidTitle" id="vidTitle" onChange={handleTitleChange}/>
                            <label htmlFor="" className="upload-video__label">Add a Video Description</label>
                            <textarea className="upload-video__input upload-video__input--desc" value={vidDesc} name="vidDesc" id="vidDesc" placeholder="Add a description to your video" onChange={handleDescChange}></textarea>
                        </div>
                    </div>
                    <div className="upload-video__form-actions">
                        <Button type="submit" className="button--publish" text="Publish" />
                        <Button type="button" className="button--cancel" text="Cancel" link="/" /> 
                    </div>
                </form>
            </section>
        </main>
    );
}

export default VideoUploadPage;