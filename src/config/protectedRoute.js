import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './authContext';

const ProtectedRoute = ({ roles = [] }) => {
    const { userToken, userRole } = useContext(AuthContext);

    if (!userToken) {
        // Usuarios no autenticado, redirigir a la página de inicio de sesión
        return <Navigate to="/login" />;
    }

    if (roles.length && !roles.includes(userRole)) {
        // Usuarios no autorizado, redirigir a una página de acceso denegado
        return <Navigate to="/access-denied" />;
    }

    return <Outlet />; // Renderiza los componentes hijos cuando el usuario está autenticado y autorizado
};

export default ProtectedRoute;
