import './Button.css'
const Button =(props)=>{
    const {type,className,text,onClick}=props;
    return(
    <button className={className} type={type} onClick={onClick}>
        
          {text}
        </button>
    )
}


export default Button;