import React from "react";
import { Link } from "react-router-dom";

const PlantCard = ({plantDetails, setSelectedPlant, deletePlant}) => {

    const handleClick = () => {
        setSelectedPlant(plantDetails)
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


                <Link to="/plantDetails" onClick = {handleClick}>More details</Link>
                <Link to="/editPlant" onClick={handleClick}>Edit plant</Link>
                <Link to="/editPlant" onClick={handleDeletePlant}> <span>❌</span> Delete plant</Link>
            </div>
        </>
    );
}

export default PlantCard;