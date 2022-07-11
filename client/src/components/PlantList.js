import React from "react";
import PlantCard from "./PlantCard";
import { Link } from "react-router-dom";


const PlantList = ({plants, setSelectedPlant, deletePlant}) => {

    const mapPlants = plants.map((plant, index) =>
        <section key = {index} className = "plant-card-wrapper">
            <PlantCard
                plantDetails = {plant}
                setSelectedPlant = {setSelectedPlant}
                deletePlant = {deletePlant}
                />
        </section>)

    return (
        <>
        <Link to="/createPlant" className="add-buttons">Add new plant</Link>
        <div className = "plantcard-view-wrapper">
            {mapPlants}
        </div>
        </>
    );
}

export default PlantList;