import './Input.scss';

const Input = ({ className, type, placeholder, name, id, value }) => {    
        if(type === "txtArea"){
            return (
                <textarea className={`input ${className}`} placeholder={placeholder} name={name} id={id} value={value} />
            );
        } else {
            return <input className={`input ${className}`} placeholder={placeholder} name={name} id={id} value={value} />
        }

}

export default Input;