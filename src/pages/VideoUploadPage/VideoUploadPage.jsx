import "./VideoUploadPage.scss"
import uploadImg from "../../assets/images/Upload-video-preview.jpg";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const VideoUploadPage = () => {

    return(
        <main>
            <section className="upload-video">
                <h1 className="upload-video__heading">Upload Video</h1>
                <form action="submit" className="upload-video__form">
                    <div className="upload-video__container">
                        <div className="upload-video__left">
                            <p className="upload-video__thumbnail-label">Video Thumbnail</p>
                            <img src={uploadImg} alt="Video Thumbnail" className="upload-video__img" />
                        </div>
                        <div className="upload-video__right">
                            <label htmlFor="" className="upload-video__label">Title your video</label>
                            <input type="text" className="upload-video__input" placeholder="Add a title to your video" name="videoTitle" id="videoTitle"/>
                            <label htmlFor="" className="upload-video__label">Add a Video Description</label>
                            <textarea className="upload-video__input upload-video__input--desc" name="videoDesc" id="videoDesc" placeholder="Add a description to your video" ></textarea>
                        </div>
                    </div>
                    <div className="upload-video__form-actions">
                        <Button type="submit" className="button--submit" text="Publish" />
                        <Link to="/">
                        <p>Cancel</p>
                        </Link>
                    </div>
                </form>
            </section>
        </main>
    );
}

export default VideoUploadPage;