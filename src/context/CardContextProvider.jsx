import React from 'react'
import { createContext } from "react";

const CardContext = createContext(null)

const CardContextProvider = ({children}) => {
    const [cardData , setCardData] = React.useState({
        photo : null,
        name : ''
    })
    return (
        <CardContext.Provider value={{cardData, setCardData}}>
            {children}
        </CardContext.Provider>
    )
}

export { CardContextProvider , CardContext }