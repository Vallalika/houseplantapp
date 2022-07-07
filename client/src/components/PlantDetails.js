import React from "react";

const PlantDetails = ({selectedPlant}) => {

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
        </>
    );
}

export default PlantDetails;