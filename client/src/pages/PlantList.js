import React from 'react';
import PlantCard from 'features/plants/PlantCard';

const PlantList = ({ plants, setSelectedPlant, deletePlant }) => {
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
    console.log('clicked');
  };

  return (
    <>
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
