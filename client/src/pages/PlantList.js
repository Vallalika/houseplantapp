import React, { useState } from 'react';
import PlantServices from 'services/PlantServices';
import PlantCreation from 'features/plants/PlantCreation';
import PlantCard from 'features/plants/PlantCard';
import PlantDetails from 'features/plants/PlantDetails';
import EditPlant from 'features/plants/EditPlant';

const PlantList = ({ gardens, plants, tasks, setPlants, setTasks }) => {
  const [showPlantForm, setShowPlantForm] = useState(false);
  const [showPlantList, setShowPlantList] = useState(true);
  const [showPlantDetails, setShowPlantDetails] = useState(false);
  const [showEditPlant, setShowEditPlant] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState({});

  const deletePlant = (idToDelete) => {
    PlantServices.deletePlant(idToDelete);
    setPlants(plants.filter((plant) => plant.id !== idToDelete));
    setTasks(tasks.filter((task) => task.plant.id !== idToDelete));
  };

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
        setShowEditPlant={setShowEditPlant}
      />
    </section>
  ));

  const handleAddPlant = () => {
    setShowPlantForm(true);
    setShowPlantList(false);
  };

  // Plant functionalities
  const createPlant = (newPlant) => {
    PlantServices.addPlant(newPlant).then((savedPlant) =>
      setPlants([...plants, savedPlant])
    );
  };

  const editPlant = (editedPlant) => {
    PlantServices.updatePlant(editedPlant).then((dbUpdatedPlant) => {
      const editedPlantIndex = plants.findIndex(
        (plant) => plant.id === editedPlant.id
      );
      const updatedPlants = [...plants];
      updatedPlants[editedPlantIndex] = dbUpdatedPlant;
      setPlants(updatedPlants);
    });
  };

  return (
    <>
      {showPlantForm && (
        <PlantCreation
          gardens={gardens}
          createPlant={createPlant}
          setShowPlantForm={setShowPlantForm}
          setShowPlantList={setShowPlantList}
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
      {showEditPlant && (
        <EditPlant
          gardens={gardens}
          selectedPlant={selectedPlant}
          editPlant={editPlant}
          setShowEditPlant={setShowEditPlant}
          setShowPlantList={setShowPlantList}
        />
      )}
    </>
  );
};

export default PlantList;
