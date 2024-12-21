import { useResources } from '../context/ResourceContext';
import { useAuth } from '../context/AuthContext';

function AdminDashboard() {
  const { user } = useAuth();
  const { resources, emergencies } = useResources();

  return (
    <div className="dashboard-container">
      <h2 className="page-title">Admin Dashboard</h2>
      <p className="welcome-text">Welcome, {user.name}</p>

      <div className="admin-grid">
        <div className="admin-card">
          <h3>Resource Overview</h3>
          <div className="resource-list">
            <div className="resource-item">
              <span>Medical Supplies:</span>
              <span>{resources.medicalSupplies} units</span>
            </div>
            <div className="resource-item">
              <span>Food Supplies:</span>
              <span>{resources.foodSupplies} kg</span>
            </div>
            <div className="resource-item">
              <span>Water Supplies:</span>
              <span>{resources.waterSupplies} L</span>
            </div>
          </div>
        </div>

        <div className="admin-card">
          <h3>Active Emergencies</h3>
          <div className="emergency-list">
            {emergencies.length === 0 ? (
              <p className="no-data">No active emergencies</p>
            ) : (
              emergencies.map((emergency, index) => (
                <div key={index} className="emergency-item">
                  <span className={`priority ${emergency.priority.toLowerCase()}`}>
                    {emergency.priority}
                  </span>
                  <span>{emergency.location}</span>
                  <span>{emergency.type}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;