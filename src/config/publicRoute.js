import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './authContext';

const PublicRoute = () => {
    const { userToken } = useContext(AuthContext);

    if (userToken) {
        // Si el usuario está autenticado, redirigir a la página principal
        return <Navigate to="/" />;
    }

    // Si no está autenticado, permitir el acceso a las rutas públicas
    return <Outlet />;
};

export default PublicRoute;
