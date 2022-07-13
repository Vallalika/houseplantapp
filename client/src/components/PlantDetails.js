import React from "react";
import { Link } from "react-router-dom";

const PlantDetails = ({selectedPlant, setSelectedPlant}) => {

    // const handleClickBack = () => {
    //     setSelectedPlant({});
    // }

    return (
        <>  
            <div className = "plant-details-wrapper">
                <section className = "id-card-wrapper">
                    <img className = "plant-picture" src= {selectedPlant.imageUrl} alt="plant picture" />
                    <p className = "plant-details-paragraph"><span className = "plantcard-field-titles"> Status: </span>{selectedPlant.status} </p>
                    <p className = "plant-details-paragraph"><span className = "plantcard-field-titles">Light: </span>{selectedPlant.light}</p>
                    <p className = "plant-details-paragraph"><span className = "plantcard-field-titles">Water: </span>{selectedPlant.water}</p>
                </section>
                <section className = "details-wrapper">
                    <h3 className = "plant-details-main-name">{selectedPlant.plantNameOne}</h3>
                    <p  className = "plant-details-other-name">{selectedPlant.plantNameTwo}</p>
                    <p className = "plant-details-paragraph"><span className = "plantcard-field-titles">Acquisition date: </span>{selectedPlant.acquisitionDate}</p>
                    <p className = "plant-details-paragraph"><span className = "plantcard-field-titles">Origin: </span>{selectedPlant.origin}</p>
                    <p className = "plant-details-paragraph"><span className = "plantcard-field-titles">Growing season:</span> {selectedPlant.growingSeason}</p>
                    <p className = "plant-details-paragraph"><span className = "plantcard-field-titles">Temperature: </span>{selectedPlant.temperature}</p>
                    <p className = "plant-details-paragraph"><span className = "plantcard-field-titles">Humidity: </span>{selectedPlant.humidity}</p>
                    <p className = "plant-details-paragraph"><span className = "plantcard-field-titles">Soil: </span> {selectedPlant.soil}</p>
                    <p className = "plant-details-paragraph"><span className = "plantcard-field-titles">Nutrients: </span>{selectedPlant.nutrients} </p>
                    <p className = "plant-details-paragraph"><span className = "plantcard-field-titles">Repotting/Top Soil add: </span> {selectedPlant.repotting}</p>
                    <p className = "plant-details-paragraph"><span className = "plantcard-field-titles">Pruning: </span>{selectedPlant.pruning}</p>
                    <p className = "plant-details-paragraph"><span className = "plantcard-field-titles">Notes: </span>{selectedPlant.notes}</p>
                </section>
            </div>
        </>
    );
}

export default PlantDetails;