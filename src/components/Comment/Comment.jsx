import './Comment.scss';
import timeSince from '../../utils/timeSince';

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
                <p className="comment__txt">{comment}</p>
            </div>
        </li>
    );
}
export default Comment;