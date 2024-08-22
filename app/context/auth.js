import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export default function AuthWrapper({ children }) {
    const [globalLoginState, setGlobalLoginState] = useState({
        token: null,
        login
    })

    async function login(userInfo) {
        try {
            const url = "http://127.0.0.1:8000/api/token/";
            const res = await axios.post(url, userInfo);
            // update global state
            setGlobalLoginState({
                token: res.data,
                login
            });
            console.log(res.data);
        } catch (error) {
            console.error("Login failed", error);
        }
    }

    return(
            <AuthContext.Provider value={globalLoginState}> 
                {children}
            </AuthContext.Provider>
    )
}