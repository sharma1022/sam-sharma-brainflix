import './VideoCard.scss';

const VideoCard = ({id, title, image, channel, handleVideoClick}) => {
    
    return (
        <li className="next-videos__item" onClick={() => handleVideoClick(id)} >
        <div className="next-videos__img-container">
            <img className="next-videos__img" src={image} alt={`${title} video.`} />
        </div>
        <div className="next-videos__details">
            <p className="next-videos__title">{title}</p>
            <p className="next-videos__channel">{channel}</p>
        </div>
        </li>
    );
}

export default VideoCard;