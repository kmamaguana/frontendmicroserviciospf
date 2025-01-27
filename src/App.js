import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './config/authContext';
import Layout from "./components/Layout";
import ProtectedRoute from './config/protectedRoute';
import Home from './pages/Home';  // Página principal
import Products from './pages/Products';  // Productos
import Cart from './pages/Cart';  // Carrito
import Login from './auth/Login';  // Login
import Register from './auth/Register';  // Registro
import ForgotPassword from './auth/ForgotPassword';  // Olvido de contraseña
import ResetPassword from './auth/ResetPassword';  // Restablecimiento de contraseña
import AccessDenied from './auth/AccessDenied';  // Página de acceso denegado
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            {/* Rutas públicas */}
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>

          {/* Ruta protegida para el carrito (solo usuarios autenticados) */}
          <Route element={<ProtectedRoute roles={['VENDOR', 'CUSTOMER']} />}>
            <Route path="/" element={<Layout />}>
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Route>

          {/* Rutas protegidas para administrador */}
          <Route element={<ProtectedRoute roles={['CUSTOMER']} />}>
            <Route path="/admin" element={<Layout />} />
            {/* Otras rutas de administración pueden ir aquí */}
          </Route>

          {/* Página de acceso denegado */}
          <Route path="/access-denied" element={<AccessDenied />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
