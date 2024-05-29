import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Catalog from './components/pages/Catalog/Catalog';
import Product from './components/pages/Product/Product';
import Contacts from './components/pages/Contacts/Contacts';
import { AuthProvider } from './components/auth/AuthContext/AuthContext';
import Login from './components/auth/Login/Login';
import ProtectedRoute from './components/auth/ProtectedRoute/ProtectedRoute';
import Register from './components/auth/Registration/Register';
import Profile from './components/pages/Profile/Profile';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/catalog"
            element={
              <ProtectedRoute>
                <Catalog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product/:productId"
            element={
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <ProtectedRoute>
                <Contacts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
