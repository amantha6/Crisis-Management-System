import { useState } from 'react';
import { useResources } from '../context/ResourceContext';
import { useAuth } from '../context/AuthContext';

function MedicalDashboard() {
  const { user } = useAuth();
  const { resources, updateResources } = useResources();
  const [newSupply, setNewSupply] = useState({
    type: 'medical',
    quantity: '',
    location: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateResources({
      ...resources,
      medicalSupplies: resources.medicalSupplies + parseInt(newSupply.quantity)
    });
    setNewSupply({ type: 'medical', quantity: '', location: '', notes: '' });
  };

  return (
    <div className="dashboard-container">
      <h2 className="page-title">Medical Staff Dashboard</h2>
      <p className="welcome-text">Welcome, {user.name}</p>

      <div className="dashboard-grid">
        <div className="supply-update-card">
          <h3>Update Medical Supplies</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Quantity Change</label>
              <input
                type="number"
                value={newSupply.quantity}
                onChange={(e) => setNewSupply({
                  ...newSupply,
                  quantity: e.target.value
                })}
                placeholder="Enter quantity (+ or -)"
                required
              />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                value={newSupply.location}
                onChange={(e) => setNewSupply({
                  ...newSupply,
                  location: e.target.value
                })}
                placeholder="Enter location"
                required
              />
            </div>

            <div className="form-group">
              <label>Notes</label>
              <textarea
                value={newSupply.notes}
                onChange={(e) => setNewSupply({
                  ...newSupply,
                  notes: e.target.value
                })}
                placeholder="Add any relevant notes"
              />
            </div>

            <button type="submit" className="submit-button">
              Update Supplies
            </button>
          </form>
        </div>

        <div className="status-card">
          <h3>Current Status</h3>
          <div className="status-item">
            <span>Available Medical Supplies:</span>
            <span className="status-value">{resources.medicalSupplies} units</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicalDashboard;