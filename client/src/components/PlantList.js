import React from "react";
import PlantCard from "./PlantCard";
import PlantItem from "./PlantItem";

const PlantList = ({plants}) => {

    const mapPlants = plants.map((plant, index) =>
        <PlantCard key={index} className={plant.plantNameOne} plantDetails = {plant}> {plant.plantNameOne} </PlantCard>)

    return (
        <>
        <h3>All plants</h3>
        {mapPlants}
        </>
    );
}

export default PlantList;