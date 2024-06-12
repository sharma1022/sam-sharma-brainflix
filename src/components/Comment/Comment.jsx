import './Comment.scss';
import timeSince from '../../utils/timeSince';
import deleteIcon from '../../assets/icons/delete.svg';

const Comment = ({name, timestamp, comment}) => {
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
                    <img className='comment__delete' src={deleteIcon} alt="Delete Icon" />
                </div>
                
            </div>
        </li>
    );
}
export default Comment;