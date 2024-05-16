import './Comment.scss';

const Comment = ({name, timestamp, comment}) => {
    const date = (new Date(timestamp)).toLocaleString();
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