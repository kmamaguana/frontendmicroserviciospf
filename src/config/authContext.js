import React, { createContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(() => localStorage.getItem('userToken'));
    const [userRole, setUserRole] = useState(() => {
        const token = localStorage.getItem('userToken');
        return token ? jwtDecode(token).role : null;
    });
    const [username, setUsername] = useState(() => {
        const token = localStorage.getItem('userToken');
        return token ? jwtDecode(token).sub : null;
    });

    const signIn = (token) => {
        setUserToken(token);
        localStorage.setItem('userToken', token);
        const decodedToken = jwtDecode(token);
        setUserRole(decodedToken.role);
        setUsername(decodedToken.sub);
    };

    const signUp = (token) => {
        setUserToken(token);
        localStorage.setItem('userToken', token);
        const decodedToken = jwtDecode(token);
        setUserRole(decodedToken.role);
        setUsername(decodedToken.sub);
    };

    const signOut = (navigate) => {
        setUserToken(null); // Limpiar el token en el estado
        setUserRole(null); // Limpiar el rol del usuario
        setUsername(null); // Limpiar el nombre de usuario
        localStorage.removeItem('userToken'); // Eliminar el token de localStorage
        navigate('/'); // Redirigir a la página principal
    };
    
    useEffect(() => {
        if (!userToken) {
            setUserRole(null);
            setUsername(null);
        }
    }, [userToken]);

    return (
        <AuthContext.Provider value={{ userToken, userRole, username, signIn, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};