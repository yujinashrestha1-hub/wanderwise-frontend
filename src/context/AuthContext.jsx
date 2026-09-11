import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    const [token, setToken] = useState(localStorage.getItem("token") || null );
    const [userData, setUserData] = useState(null);


    const onLogin = (jwtToken, user)=>{
        setToken(jwtToken);
        setUserData(user);

        localStorage.setItem("token", jwtToken);
    }

    const onLogout = ()=>{
        setToken(null);
        setUserData(null);

        localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={{token, userData, onLogin, onLogout}}>
            {children}
        </AuthContext.Provider>
    )
}