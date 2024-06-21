import errorImg from '../../assets/images/404error.svg';
import Button from "../../components/Button/Button";
import "./NotFoundPage.scss";
import { useEffect } from 'react';

const NotFoundPage = () => {

    useEffect(() => {
        document.title = "Page Not Found";
      },[]);

    return(
        <>
        <div className="not-found">
            <img className='not-found__img' src={errorImg} alt="404 Error Image" />
            <div className="not-found__container">
                <h1 className='not-found__heading'>Page Not Found</h1>
                <p className='not-found__text'>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <Button link="/" type="button"
                className="button--return"
                text="Back to Homepage" />
            </div>
        </div>
        </>
    );
}

export default NotFoundPage;