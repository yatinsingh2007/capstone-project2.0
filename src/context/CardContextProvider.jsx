import React from 'react'
import CardContext from './CardContext'

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

export default CardContextProvider