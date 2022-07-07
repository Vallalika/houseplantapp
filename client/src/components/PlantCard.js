import React from "react";
import { Link } from "react-router-dom";

const PlantCard = ({plantDetails, setSelectedPlant}) => {

    const handleClick = () => {
        setSelectedPlant(plantDetails)
    }

    return (
        <>
            <h4>{plantDetails.plantNameOne}</h4>
            <p>Second name: {plantDetails.plantNameTwo}</p>
            <p>Origin {plantDetails.origin}</p>
            <p>Acquisition date: {plantDetails.acquisitionDate}</p>
            <p> Status: {plantDetails.status} </p>
            <p>Growing season: {plantDetails.growingSeason}</p>
            <p>Light: {plantDetails.light}</p>
            <p>Water: {plantDetails.water}</p>
            <p>Temperature: {plantDetails.temperature}</p>
            <p>Soil: {plantDetails.soil}</p>
            <p>Humidity: {plantDetails.humidity}</p>
            <p onClick = {handleClick}> <Link to="/plantDetails">More details</Link></p>
        </>
    );
}

export default PlantCard;