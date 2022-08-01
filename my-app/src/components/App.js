import React from "react"
import CountButton from "./CountButton"

const App = ()=>{
    return(
        <div>
            <CountButton incrementBy = {1} buttonColor = {"blue"} />
            <CountButton incrementBy = {7} buttonColor = {"green"} />
            <CountButton incrementBy = {10} buttonColor = {"purple"} />
        </div>
    )
}

export default App