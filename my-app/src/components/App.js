import React, { useState, useEffect } from "react"
// import CountButton from "./CountButton/CountButton"
// import SearchBar from "./SearchBar/SearchBar"
import Button from "./Button/Button"



const App = () => {
    const [productsState, setProductsState] = useState([])
    useEffect(() => {


        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((productsArray) => {
                const newProductsState = productsArray.map((product)=>{
                    return product.title
                })
                setProductsState(newProductsState)
            })

        // setTimeout(() => {
        //     setProductsState([
        //         "tooth paste",
        //         "tooth brush",
        //         "mouth wash",
        //         "dental floss",
        //         "mouth guard"
        //     ])
        // }, 2000)
    }, [])

    // const hasProducts = productsState.length > 0
    return (
        <div>
            <Button>Hello World</Button>
            <Button>Hello World2</Button>
            <Button>Hello World3</Button>
            {/* <CountButton incrementBy={1} buttonColor={"blue"} /> */}
            {/* {hasProducts ? <SearchBar products={productsState} /> : "Loading..."} */}
        </div>
    )
}

export default App