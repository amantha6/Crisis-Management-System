import { useResources } from '../context/ResourceContext';

function Dashboard() {
  const { resources, emergencies, teams } = useResources();

  // Calculate statistics
  const activeEmergencies = emergencies.length;
  const availableTeams = teams.filter(team => team.status === 'available').length;
  const totalResources = Object.values(resources).reduce((a, b) => a + b, 0);

  return (
    <div className="container">
      <h2 className="page-title">Dashboard</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Active Emergencies</h3>
          <div className="stat-number">{activeEmergencies}</div>
          <div className="stat-status">
            {emergencies.filter(e => e.priority === 'Critical').length} Critical, 
            {emergencies.filter(e => e.priority === 'Moderate').length} Moderate
          </div>
        </div>

        <div className="stat-card">
          <h3>Available Resources</h3>
          <div className="stat-number">{totalResources}</div>
          <div className="stat-status">
            Medical: {resources.medicalSupplies} units<br/>
            Food: {resources.foodSupplies} kg<br/>
            Water: {resources.waterSupplies} L
          </div>
        </div>

        <div className="stat-card">
          <h3>Response Teams</h3>
          <div className="stat-number">{teams.length}</div>
          <div className="stat-status">
            {availableTeams} Available, 
            {teams.length - availableTeams} Deployed
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="dashboard-section">
        <h3 className="section-title">Recent Activity</h3>
        <div className="activity-feed">
          {emergencies.slice(0, 5).map((emergency, index) => (
            <div key={index} className="activity-item">
              <div className="activity-time">
                {new Date(emergency.timestamp).toLocaleString()}
              </div>
              <div className="activity-content">
                <strong>Emergency Declared:</strong> {emergency.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;