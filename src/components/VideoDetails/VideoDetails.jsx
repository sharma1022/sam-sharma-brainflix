import viewsIcon from '../../assets/icons/views.svg';
import likeIcon from '../../assets/icons/likes.svg';
import "./VideoDetails.scss";
import timeSince from '../../utils/timeSince';
const VideoDetails = ({ selectedVideo }) => {
    console.log(selectedVideo);
    const date = timeSince(new Date(selectedVideo.timestamp));
    return(
        <section className="video-details">
            <h1 className="video-details__heading">{selectedVideo.title}</h1>
            <div className="video-details__container">
                <div className="video-details__info">
                    <p className="video-details__channel">By {selectedVideo.channel}</p>
                    <p className="video-details__date">Posted {date}</p>
                </div>
                <div className="video-details__numbers">
                    <div className="video-details__views">
                        <img className='video-details__views-icon' src={viewsIcon} alt="Views Icon" />
                        <p className='video-details__views-count'>{selectedVideo.views}</p>
                    </div>
                    <div className="video-details__likes">
                        <img className='video-details__likes-icon' src={likeIcon} alt="Likes Icon" />
                        <p className='video-details__likes-count'>{selectedVideo.likes}</p>
                    </div>
                </div>
            </div>
            <p className='video-details__description'>{selectedVideo.description}</p>
        </section>
    );
}

export default VideoDetails;