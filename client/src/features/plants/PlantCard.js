import React from 'react';

const PlantCard = ({
  plantDetails,
  setSelectedPlant,
  deletePlant,
  setShowPlantList,
  setShowPlantDetails,
  setShowEditPlant,
}) => {
  const handleViewClick = () => {
    setSelectedPlant(plantDetails);
    setShowPlantList(false);
    setShowPlantDetails(true);
  };

  const handleClickEdit = () => {
    setSelectedPlant(plantDetails);
    setShowPlantList(false);
    setShowEditPlant(true);
  };

  const handleDeletePlant = () => {
    deletePlant(plantDetails.id);
  };

  return (
    <>
      <img
        className='plant-thumbnail'
        src={plantDetails.imageUrl}
        alt='Plant'
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
