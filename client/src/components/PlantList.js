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
        <h3>All plants</h3>
        <button><Link to="/createPlant">Add new plant</Link></button>
        {mapPlants}
        </>
    );
}

export default PlantList;