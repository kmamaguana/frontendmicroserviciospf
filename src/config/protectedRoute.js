import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from './authContext';

const ProtectedRoute = ({ roles = [] }) => {
  const { userToken, userRole } = useContext(AuthContext);
  const location = useLocation();

  if (!userToken) {
    // Redirigir al login, pasando la ruta actual en el estado
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (roles.length && !roles.includes(userRole)) {
    // Redirigir a acceso denegado si el usuario no tiene permisos
    return <Navigate to="/access-denied" />;
  }

  return <Outlet />; // Renderiza los componentes hijos si está autenticado y autorizado
};

export default ProtectedRoute;
