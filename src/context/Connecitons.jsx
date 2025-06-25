import { useState , useEffect } from "react";

import { createContext } from "react";

const ConnectionsContext = createContext(null);

const ConnectionsProvider = ({children}) => {
    const [connectionData , setConnectionData] = useState(() => {
        const storedData = localStorage.getItem('connectionData')
        if (storedData) {
            return JSON.parse(storedData)
        }
        return {
            connections: [],
        }
    })
    useEffect(() => {
        localStorage.setItem('connectionData', JSON.stringify(connectionData))
    } , [connectionData])
    return (
        <ConnectionsContext.Provider value={{connectionData , setConnectionData}}>
            {children}
        </ConnectionsContext.Provider>
    )
}
export { ConnectionsProvider , ConnectionsContext }