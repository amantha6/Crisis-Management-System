import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ResourceMap from './pages/ResourceMap.jsx';
import Inventory from './pages/Inventory.jsx';
import Emergency from './pages/Emergency.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/map" element={<ResourceMap />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/emergency" element={<Emergency />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;