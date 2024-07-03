import "./Comment.scss";
import timeSince from "../../utils/timeSince";

const Comment = ({
  id,
  name,
  timestamp,
  comment,
  likes,
  likeComment,
  deleteComment,
  videoId,
}) => {
  const date = timeSince(new Date(timestamp));
  return (
    <li className="comment">
      <div className="comment__avatar"></div>
      <div className="comment__container">
        <div className="comment__sub-container">
          <p className="comment__name">{name}</p>
          <p className="comment__date">{date}</p>
        </div>
        <div className="comment__details">
          <p className="comment__txt">{comment}</p>

          <div className="comment__actions">
            <div
              className="comment__delete"
              onClick={() => {
                deleteComment(videoId, id);
              }}
            >
              <svg
                className="comment__delete-icon"
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="comment__delete-icon-path"
                  d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z"
                  fill="#afafaf"
                />
              </svg>
            </div>
            <div
              className="comment__likes"
              onClick={() => {
                likeComment(videoId, id);
              }}
            >
              <svg
                className="comment__likes-icon"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="comment__likes-icon-path"
                  d="M12.325 0C10.846 0 9.4265 0.682105 8.5 1.76C7.5735 0.682105 6.154 0 4.675 0C2.057 0 0 2.03789 0 4.63158C0 7.81474 2.89 10.4084 7.2675 14.3495L8.5 15.4526L9.7325 14.3411C14.11 10.4084 17 7.81474 17 4.63158C17 2.03789 14.943 0 12.325 0Z"
                  fill="#afafaf"
                />
              </svg>
            </div>
            <p className="comment__likes-count">{likes}</p>
          </div>
        </div>
      </div>
    </li>
  );
};
export default Comment;
