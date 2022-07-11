import React from "react";
import PlantCard from "./PlantCard";
import { Link } from "react-router-dom";


const PlantList = ({plants, setSelectedPlant, deletePlant}) => {

    const mapPlants = plants.map((plant, index) =>
        <PlantCard
            key={index}
            className={plant.plantNameOne}
            plantDetails = {plant}
            setSelectedPlant = {setSelectedPlant}
            deletePlant = {deletePlant}
            />)

    return (
        <>
        <Link to="/createPlant" className="add-buttons">Add new plant</Link>
        {mapPlants}
        </>
    );
}

export default PlantList;