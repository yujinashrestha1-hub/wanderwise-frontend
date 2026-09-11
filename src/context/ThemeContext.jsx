import { createContext, useState } from "react";

export const ThemeContext =  createContext();

export const ThemeProvider = ({children}) =>{

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const changeTheme = (userTheme)=>{
        setTheme(userTheme);
    }

    return(
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )


}
