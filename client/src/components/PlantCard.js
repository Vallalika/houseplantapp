import React from "react";

const PlantCard = ({plantDetails}) => {

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
        </>
    );
}

export default PlantCard;