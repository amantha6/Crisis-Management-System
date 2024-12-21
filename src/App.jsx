import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ResourceProvider } from './context/ResourceContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import PublicDashboard from './pages/Dashboard';
import MedicalDashboard from './pages/MedicalDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ResourceMap from './pages/ResourceMap';
import Inventory from './pages/Inventory';
import Emergency from './pages/Emergency';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <ResourceProvider>
        <BrowserRouter>
          <div className="app">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<PublicDashboard />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/medical-dashboard"
                  element={
                    <ProtectedRoute allowedRoles={['medical']}>
                      <MedicalDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin-dashboard"
                  element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route path="/map" element={<ResourceMap />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/emergency" element={<Emergency />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </ResourceProvider>
    </AuthProvider>
  );
}

export default App;