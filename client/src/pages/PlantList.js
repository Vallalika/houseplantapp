import React, { useState } from 'react';
import { PlantServices } from 'services/PlantServices';
import PlantCreation from 'features/plants/PlantCreation';
import PlantCard from 'features/plants/PlantCard';

const PlantList = ({
  gardens,
  plants,
  setPlants,
  setSelectedPlant,
  deletePlant,
}) => {
  const [showPlantForm, setShowPlantForm] = useState(false);

  const mapPlants = plants.map((plant, index) => (
    <section
      key={index}
      className='plant-card-wrapper'
    >
      <PlantCard
        plantDetails={plant}
        setSelectedPlant={setSelectedPlant}
        deletePlant={deletePlant}
      />
    </section>
  ));

  const handleAddPlant = () => {
    setShowPlantForm(true);
  };

  // Plant functionalities
  const createPlant = (newPlant) => {
    PlantServices.addPlant(newPlant).then((savedPlant) =>
      setPlants([...plants, savedPlant])
    );
  };

  return (
    <>
      {showPlantForm && (
        <PlantCreation
          gardens={gardens}
          createPlant={createPlant}
        />
      )}

      <button
        className='add-buttons'
        onClick={handleAddPlant}
      >
        Add new plant
      </button>
      <div className='plantcard-view-wrapper'>{mapPlants}</div>
    </>
  );
};

export default PlantList;
