import { createContext, useContext, useState } from "react";

const SelectedIndexContext = createContext();
export const IndexProvider = ({ children }) => {
    const [index, setIndex] = useState(0)
    const [works, setWorks] = useState(0)
    const values = {
        index,
        setIndex,
        works,
        setWorks
    }
    return <SelectedIndexContext.Provider value={values}>
        {children}
    </SelectedIndexContext.Provider>
}
export const useSelectIndex = () =>{
    return useContext(SelectedIndexContext)
}