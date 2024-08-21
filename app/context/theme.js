import { createContext, useEffect, useState } from "react";

export const ContextTheme = createContext()

export default function ThemeWrapper({ children }) {

    const [isDarkTheme, setDarkTheme] = useState(true)

    function initialThemeHandler(){
        if(!localStorage.getItem("isDarkTheme")){
            localStorage.setItem("isDarkTheme", 'true');
            document.querySelector("body").classList.add("dark");
            setDarkTheme(true);
        }else{
            const isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme"));
            isDarkTheme && document.querySelector("body").classList.add("dark")
            setDarkTheme(isDarkTheme)

        }
    }

    function togglethemeHandler() {
        const isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme"));
        const newTheme = !isDarkTheme;
        setDarkTheme(newTheme);
        document.querySelector("body").classList.toggle("dark");
        localStorage.setItem("isDarkTheme", JSON.stringify(newTheme));
    }

    useEffect(() =>{
    initialThemeHandler();
    }, []);

    
    const globalState = {
        isDarkTheme,
        togglethemeHandler,
    };


    return(
            <ContextTheme.Provider value={globalState}> 
                {children}
            </ContextTheme.Provider>
    )
}