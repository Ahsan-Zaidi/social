import { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false 
    );
    
    /** Function to toggle dark mode */
    const toggle = () => {
        setDarkMode(!darkMode)
    }

    /*if it's users first visit we will write it into our local storage*/
    useEffect(() => {
        localStorage.setItem("darkMode", darkMode)
    }, [darkMode])

    return(
        <DarkModeContext.Provider value={{darkMode, toggle}}>
            {children}
        </DarkModeContext.Provider>
    )
};