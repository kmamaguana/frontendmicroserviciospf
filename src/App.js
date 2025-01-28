import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './config/authContext';
import Layout from "./components/Layout";
import ProtectedRoute from './config/protectedRoute';
import PublicRoute from './config/publicRoute'; // Nuevo componente para manejar rutas públicas
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Login from './auth/Login';
import Register from './auth/Register';
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';
import AccessDenied from './auth/AccessDenied';
import "./App.css";
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rutas públicas no disponibles para usuarios autenticados */}
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>

          <Route path="/" element={<Layout />}>
            {/* Rutas públicas accesibles por todos */}
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
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
          </Route>

          {/* Página de acceso denegado */}
          <Route path="/access-denied" element={<AccessDenied />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
