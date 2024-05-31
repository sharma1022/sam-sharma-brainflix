const VideoCard = ({video}) => {
    return (
        <li className="next-videos__item">
        <div className="next-videos__img-container">
            <img className="next-videos__img" src={video.image} alt={`${video.title} video.`} />
        </div>
        <div className="next-videos__details">
            <p className="next-videos__title">{video.title}</p>
            <p className="next-videos__channel">{video.channel}</p>
        </div>
        </li>
    );
}

export default VideoCard;