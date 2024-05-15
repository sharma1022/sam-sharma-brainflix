import mohanImg from '../../assets/images/Mohan-muruge.jpg';

const CommentSection = ({ selectedVidComments }) => {

    return (
        <section className="comments">
            <p className="comments__count">{selectedVidComments.length} Comments</p>
            <div className="comments__top">
                <img className='comments__avatar' src={mohanImg} alt="Mohan Avatar" />
                <form className='comments__form'>
                    <div className='comments__form-container'>
                        <label className='comemnts__label' htmlFor="comment">Join the Conversation</label>
                        <textarea className='comments__input' name="comment" id="comment" placeholder='Add a new comment'></textarea>
                    </div>
                </form>
            </div>
        </section>
        
    );
}

export default CommentSection;