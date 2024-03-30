import React from 'react';
import { useNavigate } from 'react-router-dom';
import PlantServices from 'services/PlantServices';

const PlantCard = ({
  plants,
  setPlants,
  tasks,
  setTasks,
  plantDetails,
  setSelectedPlant,
}) => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    setSelectedPlant(plantDetails);
    navigate(`/plants/${plantDetails.id}`);
  };

  const handleClickEdit = () => {
    setSelectedPlant(plantDetails);
    navigate(`/plants/${plantDetails}/edit`);
  };

  const handleDeletePlant = () => {
    const idToDelete = plantDetails.id;
    PlantServices.deletePlant(idToDelete);
    const updatedPlants = plants.filter((plant) => plant.id !== idToDelete);
    setPlants(updatedPlants);
    const updatedTasks = tasks.filter((task) => task.plant.id !== idToDelete);
    setTasks(updatedTasks);
  };

  return (
    <>
      <img
        className='plant-thumbnail'
        src={plantDetails.imageUrl}
        alt='plant'
      />

      <div className='plant-card-text-wrapper'>
        <h3 className='plantcard-title'>{plantDetails.plantNameOne}</h3>

        <p className='plantcard-paragraph'>
          <span className='plantcard-field-titles'>Second name: </span>
          {plantDetails.plantNameTwo}
        </p>

        <p className='plantcard-paragraph'>
          <span className='plantcard-field-titles'>Status: </span>
          {plantDetails.status}{' '}
        </p>

        <p className='plantcard-paragraph'>
          <span className='plantcard-field-titles'>Light: </span>
          {plantDetails.light}
        </p>

        <p className='plantcard-paragraph'>
          <span className='plantcard-field-titles'>Water: </span>
          {plantDetails.water}
        </p>

        <div className='plant-card-icon-wrapper'>
          <img
            className='view-icon'
            src='http://localhost:8080/eye.png'
            alt='view icon'
            onClick={handleViewClick}
          />
          <img
            className='edit-icon'
            src='http://localhost:8080/draw.png'
            alt='edit icon'
            onClick={handleClickEdit}
          />
          <img
            className='delete-icon'
            src='http://localhost:8080/delete.png'
            alt='delete icon'
            onClick={handleDeletePlant}
          />
        </div>
      </div>
    </>
  );
};

export default PlantCard;
