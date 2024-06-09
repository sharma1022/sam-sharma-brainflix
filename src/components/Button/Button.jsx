import './Button.scss';

const Button = ({className, text, type}) => {
    return(
        <button type={type} className={`button ${className}`}>{text}</button>
    );
}

export default Button;