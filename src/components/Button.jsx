function Button({text, onClick}){
    return(
        <button onClick={onClick} className="emergency-button">
            {text}
        </button>
    )

}
export default Button;