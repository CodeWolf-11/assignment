import React, { createContext, useContext, useState, Dispatch, SetStateAction, useEffect } from "react";

export const auth = createContext<{ isLoggedIn: boolean, setIsLoggedIn: Dispatch<SetStateAction<boolean>> }>({
    isLoggedIn: false,
    setIsLoggedIn: () => { }
});

export const useAuth = () => {
    return useContext(auth);
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (!isLoggedIn) {
            const token = localStorage.getItem("token");
            const user = localStorage.getItem("user");

            if (token && user) {
                setIsLoggedIn(true);
            }
        }
    }, [])

    return (
        <auth.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </auth.Provider>
    )
}

export default AuthProvider;