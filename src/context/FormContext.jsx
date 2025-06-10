import { createContext , useContext , useState } from "react";

const FormContext = createContext()
export const FormProvider = ({children}) => {
    const [infoUser , setInfoUser] = useState({});
    return (
        <FormContext.Provider value={{infoUser , setInfoUser}}>
            {children}
        </FormContext.Provider>
    );
}

export const useForm = () => useContext(FormContext)
