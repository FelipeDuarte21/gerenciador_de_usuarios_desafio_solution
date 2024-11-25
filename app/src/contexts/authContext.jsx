import { createContext, useEffect, useState } from "react";
import { getDados , resetDados } from "../services/localStorage";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [isAutentication, setIsAutentication] = useState(false);

    useEffect(() => {

        const { ID_USER, EMAIL_USER, NAME_USER, TOKEN } = getDados();

        if(TOKEN && ID_USER && NAME_USER && EMAIL_USER) {
            let user = {
                token: TOKEN,
                id: ID_USER,
                name: NAME_USER,
                email: EMAIL_USER
            }
            setUser(user);
            setIsAutentication(true);
        }

    }, []);

    const login = () => {
        
        const { ID_USER, EMAIL_USER, NAME_USER, TOKEN } = getDados();

        let user = {
            token: TOKEN,
            id: ID_USER,
            nome: NAME_USER,
            email: EMAIL_USER
        }
        setUser(user);
        setIsAutentication(true);
    }

    const logout = () => {
        resetDados();
        setUser(null);
        setIsAutentication(false);
    }

    return <AuthContext.Provider value={{user, isAutentication, login, logout}}>{children}</AuthContext.Provider>
};