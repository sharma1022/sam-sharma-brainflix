import "./VideoCard.scss";
import { apiUrl } from "../../pages/MainVideoPage/MainVideoPage";
const VideoCard = ({ title, image, channel }) => {
  return (
    <li className="next-videos__item">
      <div className="next-videos__img-container">
        <img
          className="next-videos__img"
          src={`${apiUrl}${image}`}
          alt={`${title} video.`}
        />
      </div>
      <div className="next-videos__details">
        <p className="next-videos__title">{title}</p>
        <p className="next-videos__channel">{channel}</p>
      </div>
    </li>
  );
};

export default VideoCard;
