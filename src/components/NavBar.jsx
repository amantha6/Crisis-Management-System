import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">CRM System</Link>
      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/map">Resource Map</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/emergency">Emergency</Link>
      </div>
    </nav>
  );
}

export default Navbar;