import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const AuthContext = createContext();

export default function AuthWrapper({ children }) {
    const [globalLoginState, setGlobalLoginState] = useState({
        token: null,
        username: null,
        login,
        logout
    });

    useEffect(() => {
        // Load token and username from localStorage if they exist
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');
        if (token && username) {
            setGlobalLoginState({
                token,
                username,
                login,
                logout
            });
        }
    }, []);

    // async function login(userInfo) {
    //     try {
    //         const url = "http://127.0.0.1:8000/api/token/";
    //         const res = await axios.post(url, userInfo);
    //         // update global state
    //         setGlobalLoginState({
    //             token: res.data.access,
    //             login,
    //             logout
    //         });
    //         console.log('Login successful');
    //         // console.log(res.data);
    //     } catch (error) {
    //         console.error("Login failed", error);
    //     }
    // }

    async function login(userInfo) {
        try {
            const url = "http://127.0.0.1:8000/api/token/";
            const res = await axios.post(url, userInfo);
            localStorage.setItem('token', res.data.access);
            localStorage.setItem('username', userInfo.username);
            setGlobalLoginState({
                token: res.data.access,
                username: userInfo.username,
                login,
                logout
            });
            console.log('Login successful');
        } catch (error) {
            console.error("Login failed", error);
        }
    }
    
    function logout() {
        // Remove token and username from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setGlobalLoginState({
            token: null,
            username: null,
            login,
            logout
        });
        console.log('Logged out');
    }

    return(
            <AuthContext.Provider value={globalLoginState}> 
                {children}
            </AuthContext.Provider>
    )
}