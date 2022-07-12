import React from "react";
import { Link } from "react-router-dom";

const PlantDetails = ({selectedPlant, setSelectedPlant}) => {

    const handleClick = () => {
        setSelectedPlant({});
    }

    return (
        <>
            <h4>{selectedPlant.plantNameOne}</h4>
            <p>{selectedPlant.plantNameTwo}</p>
            <p>Origin: {selectedPlant.origin}</p>
            <p>Acquisition date: {selectedPlant.acquisitionDate}</p>
            <p>Status: {selectedPlant.status} </p>
            <p>Growing season: {selectedPlant.growingSeason}</p>
            <p>Light: {selectedPlant.light}</p>
            <p>Water: {selectedPlant.water}</p>
            <p>Temperature: {selectedPlant.temperature}</p>
            <p>Nutrients: {selectedPlant.nutrients} </p>
            <p>Soil: {selectedPlant.soil}</p>
            <p>Humidity: {selectedPlant.humidity}</p>
            <p>Pruning: {selectedPlant.pruning}</p>
            <p>Repotting/Top Soil add: {selectedPlant.repotting}</p>
            <p>Notes: {selectedPlant.notes}</p>
            <Link to="/" className="add-buttons" onClick = { handleClick }>Back to plants</Link>
        </>
    );
}

export default PlantDetails;