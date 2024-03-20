import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PlantList from 'pages/PlantList';
import PlantDetails from 'features/plants/PlantDetails';
import PlantCreation from 'features/plants/PlantCreation';
import EditPlant from 'features/plants/EditPlant';

const PlantRoutes = ({
  plants,
  gardens,
  selectedPlant,
  setSelectedPlant,
  createPlant,
  editPlant,
  deletePlant,
}) => {
  return (
    <Routes>
      <Route
        index
        element={
          <PlantList
            plants={plants}
            setSelectedPlant={setSelectedPlant}
            deletePlant={deletePlant}
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
            createPlant={createPlant}
            gardens={gardens}
          />
        }
      />
      <Route
        path='/:id/edit'
        element={
          <EditPlant
            editPlant={editPlant}
            selectedPlant={selectedPlant}
            gardens={gardens}
          />
        }
      />
    </Routes>
  );
};

export default PlantRoutes;
