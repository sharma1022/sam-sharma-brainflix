import './Comment.scss';
import timeSince from '../../utils/timeSince';
import deleteIcon from '../../assets/icons/delete.svg';

const Comment = ({id, name, timestamp, comment, deleteComment, videoId}) => {
    const date = timeSince(new Date(timestamp));
    return(
        <li className="comment">
            <div className="comment__avatar"></div>
            <div className="comment__container">
                <div className='comment__sub-container'>
                    <p className="comment__name">{name}</p>
                    <p className="comment__date">{date}</p>
                </div>
                <div className="comment__details">
                    <p className="comment__txt">{comment}</p>
                    <img className='comment__delete' src={deleteIcon} alt="Delete Icon" onClick={() => {deleteComment(videoId,id)}}/>
                </div>
                
            </div>
        </li>
    );
}
export default Comment;