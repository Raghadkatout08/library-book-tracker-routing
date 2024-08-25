import { useContext } from "react";
import { ContextTheme } from "../context/theme";
import { AuthContext } from "../context/auth";

function Header() {

    const { isDarkTheme, togglethemeHandler } = useContext(ContextTheme);
    const { token, username, login, logout } = useContext(AuthContext);

    const handleLogin = () => {
        login({ username: 'user', password: 'pass' });
    };

    const lightThemePath = "M12 3v1m0 16v1m-9-9h1m16 0h1M4.22 4.22l.707.707M18.364 18.364l.707.707M1 12a11 11 0 1022 0 11 11 0 10-22 0z";
    const darkThemePath = "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z";

    return (
        < nav class="bg-gray-700 dark:bg-black" >
            <div class="container mx-auto py-4 flex justify-between items-center">



                <div class="flex items-center space-x-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                        </svg>

                    </span>
                    <h1 class="text-2xl font-bold text-gray-50">Library Book Tracker</h1>
                </div>

                <div class="flex space-x-10">
                    <div class="flex items-center space-x-2">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h1a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2v-8a2 2 0 012-2zm14 0h1a2 2 0 012 2v8a2 2 0 01-2 2h-1a2 2 0 01-2-2v-8a2 2 0 012-2zm-7-5a2 2 0 012 2v13a2 2 0 01-2 2h-1a2 2 0 01-2-2V7a2 2 0 012-2h1z" />
                            </svg>
                        </span>
                        <a href="/" class="text-gray-50">Home</a>
                    </div>
                    <div class="flex items-center space-x-2">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </span>
                        <a href="" class="text-gray-50">Books</a>
                    </div>
                    <div class="flex items-center space-x-2">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>

                        </span>
                        <a href="/about" class="text-gray-50">About US</a>
                    </div>
                </div>
                <div class="lg:flex hidden items-center space-x-2 bg-white py-1 px-2 rounded-full">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </span>
                    <input class="outline-none" type="text" placeholder="Search" />
                </div>

                <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isDarkTheme ? lightThemePath : darkThemePath} />
                    </svg>
                    <button onClick={togglethemeHandler} className="text-gray-50">
                        {isDarkTheme ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    </button>
                </div>

                <div className="flex items-center space-x-2">
                    {token ? (
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-50">Welcome, {username}!</span>
                            <button onClick={logout} className="text-gray-50 bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
                                Logout
                            </button>
                        </div>
                    ) : null}
                </div>

            </div>
        </nav >
    )
}

export default Header;