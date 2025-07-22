import { createContext , useState , useEffect } from "react";

const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    useEffect(() => {
        fetch(`https://nexthorizon-backend-1.onrender.com/?${document.cookie}` , {
            credentials : 'include'
        })
        .then((resp) => resp.json())
        .then((data) => {
        localStorage.setItem('userData' , JSON.stringify(data))
        setUser(data)
        }).catch((err) => {
        console.log(err.message)
        setUser(false)
    })
} , [])
    return (
        <AuthContext.Provider value={{user , setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext , AuthProvider}