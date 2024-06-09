import "./VideoUploadPage.scs"
import uploadImg from "../../assets/images/Upload-video-preview.jpg";

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
                    </div>
                </form>
            </section>
        </main>
    );
}