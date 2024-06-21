import './Input.scss';

const Input = ({ className, txtArea, placeholder, name, id, value, handleChange}) => {    
        if(txtArea){
            return (
                <textarea className={`input ${className}`} placeholder={placeholder} name={name} id={id} value={value} onChange={(e) => {handleChange(e)}}/>
            );
        } else {
            return <input className={`input ${className}`} type="text" placeholder={placeholder} name={name} id={id} value={value} onChange={(e) => {handleChange(e)}}/>
        }

}

export default Input;