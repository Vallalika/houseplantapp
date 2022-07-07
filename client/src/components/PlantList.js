import React from "react";
import PlantCard from "./PlantCard";
import { Link } from "react-router-dom";


const PlantList = ({plants,setSelectedPlant, deletePlant}) => {

    const mapPlants = plants.map((plant, index) =>
        <PlantCard
            key={index}
            className={plant.plantNameOne}
            plantDetails = {plant}
            setSelectedPlant = {setSelectedPlant}
            deletePlant = {deletePlant}
            >
                {plant.plantNameOne}
            </PlantCard>)

    return (
        <>
        <h3>All plants</h3>
        <button><Link to="/createplant">Add new plant</Link></button>
        {mapPlants}
        </>
    );
}

export default PlantList;