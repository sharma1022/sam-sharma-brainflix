const VideoCard = ({videos}) => {
    return (
        <li className="next-videos__item">
        <div className="next-videos__img-container">
            <img className="next-videos__img" src={videos.thumbnail} alt={`${props.title} video.`} />
        </div>
        <div className="next-videos__details">
            <p className="next-videos__title">{videos.title}</p>
            <p className="next-videos__channel">{videos.channel}</p>
        </div>
        </li>
    );
}

export default VideoCard;