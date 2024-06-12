import "./CommentSection.scss";
import Button from "../Button/Button";
import Comment from "../Comment/Comment";
import axios from "axios";
import { apiKey, apiUrl } from "../../pages/MainVideoPage/MainVideoPage";
import { useEffect, useState } from "react";

const CommentSection = ({ selectedVideo, getSelectedVideo }) => {
  
const commentCount = selectedVideo.comments.length;
const comments = selectedVideo.comments;

const [comment, setComment] = useState("");

// useEffect(() => {
//   getSelectedVideo(selectedVideo.id);
// },[selectedVideo.comment])


const handleInputChange = (e) => {
  setComment(e.target.value);
}

const handleFormSubmit = async (e) =>{
  e.preventDefault();

  const newComment = {
    name: "Anonymous",
    comment: comment
  }

  try{
    await axios.post(`${apiUrl}videos/${selectedVideo.id}/comments?api_key=${apiKey}`, newComment);
    getSelectedVideo(selectedVideo.id);
    console.log(selectedVideo.id);
    console.log(comment);
    setComment("");
    } catch(e){
      console.log(e);
    }
}

const deleteComment = async (videoId, commentId) => {
  try{
    await axios.delete(`${apiUrl}videos/${videoId}/comments/${commentId}?api_key=${apiKey}`);
    getSelectedVideo(selectedVideo.id);
  } catch(e){
    console.log(e);
  }
}
  return (
    <section className="comments">
      <p className="comments__count">{`${commentCount} ${commentCount > 1 ? "Comments" : "Comment"}`}</p>
      <div className="comments__top">
        <div className="comments__avatar"></div>
        <form className="comments__form" action="submit" onSubmit={(e) => {handleFormSubmit(e)}}>
          <div className="comments__form-container">
            <label className="comments__label" htmlFor="comment">
              Join the Conversation
            </label>
            <textarea
              className="comments__input"
              name="comment"
              id="comment"
              placeholder="Add a new comment"
              onChange={handleInputChange}
              value={comment}
            ></textarea>
          </div>
          <Button type="submit" className="button--comment" text="Comment" />
        </form>
      </div>
      <div className="comments__bottom">
        <ul className="comments__list">
          {comments.map((comment) => {
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
