import React from "react";
import { Link } from "react-router-dom";

const PlantDetails = ({selectedPlant, setSelectedPlant}) => {

    const handleClickBack = () => {
        setSelectedPlant({});
    }

    return (
        <>  
            <section>
                <img className = "plant-picture" src= {selectedPlant.imageUrl} alt="plant picture" />
                <p>Status: {selectedPlant.status} </p>
                <p>Light: {selectedPlant.light}</p>
                <p>Water: {selectedPlant.water}</p>
                <p>Temperature: {selectedPlant.temperature}</p>
                <p>Soil: {selectedPlant.soil}</p>
                <p>Humidity: {selectedPlant.humidity}</p>
                <p>Nutrients: {selectedPlant.nutrients} </p>
            </section>
            <section>
                <h4>{selectedPlant.plantNameOne}</h4>
                <p>{selectedPlant.plantNameTwo}</p>
                <p>Acquisition date: {selectedPlant.acquisitionDate}</p>
                <p>Origin: {selectedPlant.origin}</p>
                <br />
                <br />
                <p>Growing season: {selectedPlant.growingSeason}</p>
                <p>Repotting/Top Soil add: {selectedPlant.repotting}</p>
                <p>Pruning: {selectedPlant.pruning}</p>
                <p>Notes: {selectedPlant.notes}</p>
            </section>
            <Link to="/" className="add-buttons" onClick = { handleClickBack }>Back to plants</Link>
        </>
    );
}

export default PlantDetails;