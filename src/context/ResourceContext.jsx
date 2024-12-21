import { createContext, useState, useContext } from 'react';

const ResourceContext = createContext();

export function ResourceProvider({ children }) {
  const [resources, setResources] = useState({
    medicalSupplies: 0,
    foodSupplies: 0,
    waterSupplies: 0,
    shelterUnits: 0
  });

  const [emergencies, setEmergencies] = useState([]);
  const [teams, setTeams] = useState([]);

  const updateResources = (newResources) => {
    setResources(newResources);
  };

  const addEmergency = (emergency) => {
    setEmergencies([...emergencies, { ...emergency, timestamp: new Date() }]);
  };

  return (
    <ResourceContext.Provider 
      value={{
        resources,
        emergencies,
        teams,
        updateResources,
        addEmergency
      }}
    >
      {children}
    </ResourceContext.Provider>
  );
}

export function useResources() {
  return useContext(ResourceContext);
}