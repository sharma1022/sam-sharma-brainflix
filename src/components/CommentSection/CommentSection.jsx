import "./CommentSection.scss";
import Button from "../Button/Button";
import Comment from "../Comment/Comment";
import Input from "../Input/Input";
import axios from "axios";
import { apiUrl } from "../../pages/MainVideoPage/MainVideoPage";
import { useEffect, useState } from "react";

const CommentSection = ({ selectedVideo, getSelectedVideo }) => {
  const commentCount = selectedVideo.comments?.length || 0;
  const comments = selectedVideo.comments;

  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [selectedVideo]);

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (comment === "") {
      setError(true);
    } else {
      const newComment = {
        name: "Anonymous",
        comment: comment,
      };

      try {
        await axios.post(
          `${apiUrl}/videos/${selectedVideo.id}/comments`,
          newComment
        );
        getSelectedVideo(selectedVideo.id);
        setComment("");
      } catch (e) {
        console.log(e);
      }
      setError(false);
    }
  };

  selectedVideo.comments?.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });

  const deleteComment = async (videoId, commentId) => {
    try {
      await axios.delete(`${apiUrl}/videos/${videoId}/comments/${commentId}`);
      getSelectedVideo(selectedVideo.id);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="comments">
      <p className="comments__count">{`${commentCount} ${
        commentCount > 1 ? "Comments" : "Comment"
      }`}</p>
      <div className="comments__top">
        <div className="comments__avatar"></div>
        <form
          className="comments__form"
          action="submit"
          onSubmit={(e) => {
            handleFormSubmit(e);
          }}
        >
          <div className="comments__form-container">
            <label className="comments__label" htmlFor="comment">
              Join the Conversation
            </label>
            <Input
              className={`input--comment
                ${error ? "input--error" : ""}
              `}
              name="comment"
              id="comment"
              value={comment}
              placeholder={
                error ? "Comment cannot be blank" : "Add a new comment"
              }
              handleChange={handleInputChange}
              txtArea
            />
          </div>
          <Button type="submit" className="button--comment" text="Comment" />
        </form>
      </div>
      <div className="comments__bottom">
        <ul className="comments__list">
          {comments?.map((comment) => {
            return (
              <Comment
                key={comment.id}
                name={comment.name}
                timestamp={comment.timestamp}
                comment={comment.comment}
                id={comment.id}
                videoId={selectedVideo.id}
                deleteComment={deleteComment}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default CommentSection;
