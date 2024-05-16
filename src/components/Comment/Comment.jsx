const Comment = ({id, name, timestamp, comment}) => {
    const date = (new Date(timestamp)).toLocaleString();
    return(
        <li className="comment__item">
            <div className="comment__avatar"></div>
            <div className="comment__container">
                <p className="comment__name">{name}</p>
                <p className="comment__date">{date}</p>
                <p className="comment__txt">{comment}</p>
            </div>
        </li>
    );
}
export default Comment;