import mohanImg from '../../assets/images/Mohan-muruge.jpg';
import './CommentSection.scss';
import Button from '../Button/Button';

const CommentSection = ({ selectedVidComments }) => {

    return (
        <section className="comments">
            <p className="comments__count">{selectedVidComments.length} Comments</p>
            <div className="comments__top">
                <div className='comments__avatar'></div>
                <form className='comments__form'>
                    <div className='comments__form-container'>
                        <label className='comments__label' htmlFor="comment">Join the Conversation</label>
                        <textarea className='comments__input' name="comment" id="comment" placeholder='Add a new comment'></textarea>
                    </div>
                    <Button className="button--comment" text="Comment"/>
                </form>
            </div>
        </section>
        
    );
}

export default CommentSection;