import React from "react"

const Button = (props)=>{
    
    return (
        <div style={{backgroundColor: "green", color: "blue", borderRadius: "10px" }}>
            {props.children}
            </div>
    )
}

export default Button