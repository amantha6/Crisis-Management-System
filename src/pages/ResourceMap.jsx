import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useResources } from '../context/ResourceContext';

function ResourceMap() {
  const { resources } = useResources();
  
  // Sample resource locations (we'll make this dynamic later)
  const resourceLocations = [
    {
      position: [40.7128, -74.0060],
      name: "NYC Medical Center",
      type: "Medical",
      supplies: resources.medicalSupplies
    },
    {
      position: [40.7580, -73.9855],
      name: "Manhattan Supply Hub",
      type: "Food and Water",
      supplies: resources.foodSupplies
    }
  ];

  return (
    <div className="container">
      <h2 className="page-title">Resource Distribution Map</h2>
      
      <div className="map-dashboard">
        <div className="map-container">
          <MapContainer 
            center={[40.7128, -74.0060]} 
            zoom={13} 
            style={{ height: '500px', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap contributors'
            />
            {resourceLocations.map((location, idx) => (
              <Marker key={idx} position={location.position}>
                <Popup>
                  <div>
                    <h3>{location.name}</h3>
                    <p>Type: {location.type}</p>
                    <p>Supplies: {location.supplies}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className="resource-sidebar">
          <h3>Resource Overview</h3>
          <div className="resource-stats">
            <div className="stat-item">
              <span>Medical Supplies</span>
              <span>{resources.medicalSupplies} units</span>
            </div>
            <div className="stat-item">
              <span>Food Supplies</span>
              <span>{resources.foodSupplies} kg</span>
            </div>
            <div className="stat-item">
              <span>Water Supplies</span>
              <span>{resources.waterSupplies} L</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourceMap;