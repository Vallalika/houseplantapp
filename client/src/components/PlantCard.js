import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PlantCard = ({plantDetails, setSelectedPlant, deletePlant}) => {

    const Navigate = useNavigate();

    const handleViewClick = () => {
        setSelectedPlant(plantDetails);
        Navigate("/plantDetails");
    }

    const handleClickEdit = () => {
        setSelectedPlant(plantDetails)
        Navigate(("/editPlant"));
    }

    const handleDeletePlant = () => {
        deletePlant(plantDetails.id);
    }

    return (
        <>
            <img className="plant-thumbnail" src = {plantDetails.imageUrl} alt="Picture of plant" />

            <div className="plant-card-text-wrapper">
                <h3 className = "plantcard-title">{plantDetails.plantNameOne}</h3>
                
                <p className = "plantcard-paragraph"><span className="plantcard-field-titles">Second name: </span>
                {plantDetails.plantNameTwo}</p>

                <p className = "plantcard-paragraph">
                <span className="plantcard-field-titles">Status: </span>
                {plantDetails.status} </p>

                <p className = "plantcard-paragraph">
                <span className="plantcard-field-titles">Light: </span>
                {plantDetails.light}</p>

                <p className = "plantcard-paragraph">
                <span className="plantcard-field-titles">Water: </span>
                {plantDetails.water}</p>

                <div className = "plant-card-icon-wrapper">
                {/* <Link to="/plantDetails" onClick = {handleClick}>More details</Link> */}
                    <img className="view-icon" src="http://localhost:8080/eye.png" alt="view icon" onClick={ handleViewClick }/>
                    <img className ="edit-icon" src="http://localhost:8080/draw.png" alt="edit icon" onClick = { handleClickEdit } />
                    <img className ="delete-icon" src="http://localhost:8080/delete.png" alt="delete icon" onClick = { handleDeletePlant } />
                </div>
                
            </div>
        </>
    );
}

export default PlantCard;