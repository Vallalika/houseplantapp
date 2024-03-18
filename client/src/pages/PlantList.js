import React, { useState } from 'react';
import PlantServices from 'services/PlantServices';
import PlantCreation from 'features/plants/PlantCreation';
import PlantCard from 'features/plants/PlantCard';
import PlantDetails from 'features/plants/PlantDetails';

const PlantList = ({ gardens, plants, setPlants, deletePlant }) => {
  const [showPlantForm, setShowPlantForm] = useState(false);
  const [showPlantList, setShowPlantList] = useState(true);
  const [showPlantDetails, setShowPlantDetails] = useState(false);
  const [showEditPlant, setShowEditPlant] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState({});

  const mapPlants = plants.map((plant, index) => (
    <section
      key={index}
      className='plant-card-wrapper'
    >
      <PlantCard
        plantDetails={plant}
        setSelectedPlant={setSelectedPlant}
        deletePlant={deletePlant}
        setShowPlantList={setShowPlantList}
        setShowPlantDetails={setShowPlantDetails}
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
          setShowPlantForm={setShowPlantForm}
        />
      )}
      {showPlantList && (
        <>
          <button
            className='add-buttons'
            onClick={handleAddPlant}
          >
            Add new plant
          </button>
          <div className='plantcard-view-wrapper'>{mapPlants}</div>
        </>
      )}
      {showPlantDetails && (
        <PlantDetails
          selectedPlant={selectedPlant}
          setSelectedPlant={setSelectedPlant}
        />
      )}
    </>
  );
};

export default PlantList;
