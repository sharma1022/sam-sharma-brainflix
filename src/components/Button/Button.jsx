import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({className, text, type, link}) => {
    if(link){
        return(
            <Link to={link} className={`button ${className}`}>{text}</Link>
        );
    }
    else{
        return(
            <button type={type} className={`button ${className}`}>{text}</button>
        );
    }
    
}

export default Button;