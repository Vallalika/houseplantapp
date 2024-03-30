import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PlantList from 'pages/PlantList';
import PlantDetails from 'features/plants/PlantDetails';
import PlantCreation from 'features/plants/PlantCreation';
import EditPlant from 'features/plants/EditPlant';

const PlantRoutes = ({
  gardens,
  plants,
  setPlants,
  selectedPlant,
  setSelectedPlant,
  tasks,
  setTasks
}) => {
  return (
    <Routes>
      <Route
        index
        element={
          <PlantList
            plants={plants}
            setPlants = {setPlants}
            setSelectedPlant={setSelectedPlant}
            tasks={tasks}
            setTasks={setTasks}
          />
        }
      />
      <Route
        path='/:id'
        element={
          <PlantDetails
            selectedPlant={selectedPlant}
            setSelectedPlant={setSelectedPlant}
          />
        }
      />
      <Route
        path='/new'
        element={
          <PlantCreation
            gardens={gardens}
            plants={plants}
            setPlants={setPlants}
          />
        }
      />
      <Route
        path='/:id/edit'
        element={
          <EditPlant
            gardens={gardens}
            plants={plants}
            setPlants={setPlants}
            selectedPlant={selectedPlant}
          />
        }
      />
    </Routes>
  );
};

export default PlantRoutes;
