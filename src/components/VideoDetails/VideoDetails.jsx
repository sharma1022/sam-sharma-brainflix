import viewsIcon from '../../assets/icons/views.svg';
import likeIcon from '../../assets/icons/likes.svg';
import "./VideoDetails.scss";
const VideoDetails = props => {
    const date = (new Date(props.selectedVideo.timestamp)).toLocaleString();
    return(
        <section className="video-details">
            <h1 className="video-details__heading">{props.selectedVideo.title}</h1>
            <div className="video-details__container">
                <div className="video-details__info">
                    <p className="video-details__channel">By {props.selectedVideo.channel}</p>
                    <p className="video-details__date">Posted {date}</p>
                </div>
                <div className="video-details__numbers">
                    <div className="video-details__views">
                        <img className='video-details__views-icon' src={viewsIcon} alt="Views Icon" />
                        <p className='video-details__views-count'>{props.selectedVideo.views}</p>
                    </div>
                    <div className="video-details__likes">
                        <img className='video-details__likes-icon' src={likeIcon} alt="Likes Icon" />
                        <p className='video-details__likes-count'>{props.selectedVideo.likes}</p>
                    </div>
                </div>
            </div>
            <p className='video-details__description'>{props.selectedVideo.description}</p>
        </section>
    );
}

export default VideoDetails;