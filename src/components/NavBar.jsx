import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">CRM System</Link>
      <div className="nav-links">
        {user ? (
          // Logged in menu items
          <>
            {user.role === 'medical' && (
              <Link to="/medical-dashboard">Medical Dashboard</Link>
            )}
            {user.role === 'admin' && (
              <Link to="/admin-dashboard">Admin Dashboard</Link>
            )}
            <Link to="/map">Resource Map</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/emergency">Emergency</Link>
            <button onClick={handleLogout} className="logout-button">
              Logout ({user.name})
            </button>
          </>
        ) : (
          // Public menu items
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/map">Resource Map</Link>
            <Link to="/emergency">Emergency</Link>
            <Link to="/login" className="login-link">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;