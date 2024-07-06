import viewsIcon from "../../assets/icons/views.svg";
import "./VideoDetails.scss";
import timeSince from "../../utils/timeSince";

const VideoDetails = ({ selectedVideo, likeVideo }) => {
  const date = timeSince(new Date(selectedVideo?.timestamp));
  return (
    <section className="video-details">
      <h1 className="video-details__heading">{selectedVideo.title}</h1>
      <div className="video-details__container">
        <div className="video-details__info">
          <p className="video-details__channel">By {selectedVideo.channel}</p>
          <p className="video-details__date">Posted {date}</p>
        </div>
        <div className="video-details__numbers">
          <div className="video-details__views">
            <img
              className="video-details__views-icon"
              src={viewsIcon}
              alt="Views Icon"
            />
            <p className="video-details__views-count">{selectedVideo.views}</p>
          </div>
          <div className="video-details__likes">
            <div
              className="video-details__likes-icon-container"
              onClick={() => {
                likeVideo(selectedVideo.id);
              }}
            >
              <svg
                className="video-details__likes-icon"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="video-details__likes-icon-path"
                  d="M12.325 0C10.846 0 9.4265 0.682105 8.5 1.76C7.5735 0.682105 6.154 0 4.675 0C2.057 0 0 2.03789 0 4.63158C0 7.81474 2.89 10.4084 7.2675 14.3495L8.5 15.4526L9.7325 14.3411C14.11 10.4084 17 7.81474 17 4.63158C17 2.03789 14.943 0 12.325 0Z"
                  fill="#afafaf"
                />
              </svg>
            </div>
            <p className="video-details__likes-count">{selectedVideo.likes}</p>
          </div>
        </div>
      </div>
      <p className="video-details__description">{selectedVideo.description}</p>
    </section>
  );
};

export default VideoDetails;
