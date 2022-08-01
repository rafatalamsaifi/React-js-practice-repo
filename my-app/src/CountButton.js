import React, {useState} from "react"

const CountButton = (props)=>{
    const {currentCount, setCurrentCount} = useState(0)
    const handleClick = ()=>{
        setCurrentCount(currentCount + props.incrementBy)
    }

return (
    <div>
        
    </div>

)
}