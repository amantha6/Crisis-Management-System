import { useState } from 'react';
import { useResources } from '../context/ResourceContext';

function Emergency() {
  const { addEmergency } = useResources();
  const [emergency, setEmergency] = useState({
    type: '',
    priority: 'Moderate',
    location: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmergency({
      ...emergency,
      status: 'New'
    });
    setEmergency({
      type: '',
      priority: 'Moderate',
      location: '',
      description: ''
    });
  };

  return (
    <div className="container">
      <h2 className="page-title">Declare Emergency</h2>
      
      <div className="emergency-form-container">
        <form onSubmit={handleSubmit} className="emergency-form">
          <div className="form-group">
            <label>Emergency Type</label>
            <select
              value={emergency.type}
              onChange={(e) => setEmergency({...emergency, type: e.target.value})}
              required
            >
              <option value="">Select Type</option>
              <option value="Medical">Medical</option>
              <option value="Natural Disaster">Natural Disaster</option>
              <option value="Fire">Fire</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Priority Level</label>
            <select
              value={emergency.priority}
              onChange={(e) => setEmergency({...emergency, priority: e.target.value})}
              required
            >
              <option value="Critical">Critical</option>
              <option value="Moderate">Moderate</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              value={emergency.location}
              onChange={(e) => setEmergency({...emergency, location: e.target.value})}
              placeholder="Enter location"
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={emergency.description}
              onChange={(e) => setEmergency({...emergency, description: e.target.value})}
              placeholder="Describe the emergency situation"
              required
            />
          </div>

          <button type="submit" className="emergency-button">
            Declare Emergency
          </button>
        </form>
      </div>
    </div>
  );
}

export default Emergency;