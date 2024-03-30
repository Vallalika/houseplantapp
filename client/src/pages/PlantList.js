import React from 'react';
import PlantCard from 'features/plants/PlantCard';
import { Link } from 'react-router-dom';

const PlantList = ({
  plants,
  setPlants,
  tasks,
  setTasks,
  setSelectedPlant,
}) => {
  const mapPlants = plants.map((plant, index) => (
    <section
      key={index}
      className='plant-card-wrapper'
    >
      <PlantCard
        plants={plants}
        setPlants={setPlants}
        tasks={tasks}
        setTasks={setTasks}
        plantDetails={plant}
        setSelectedPlant={setSelectedPlant}
      />
    </section>
  ));

  return (
    <>
      <Link
        to='/plants/new'
        className='add-buttons'
      >
        Add new plant
      </Link>
      <div className='plantcard-view-wrapper'>{mapPlants}</div>
    </>
  );
};

export default PlantList;
