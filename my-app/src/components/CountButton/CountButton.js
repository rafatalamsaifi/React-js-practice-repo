import React, {useState} from "react"
import "./CountButton.css"

const CountButton = (props)=>{
    const [currentCount, setCurrentCount] = useState(0)
    const handleClick = ()=>{
        setCurrentCount(currentCount + props.incrementBy)
    }
    const buttonStyles = {
        background: props.buttonColor   
    }
return (
    <div>
        <button style={buttonStyles} onClick={handleClick}>
            +{props.incrementBy}
            </button>
        <div className="count-display">{currentCount}</div>
    </div>

)
}

export default CountButton