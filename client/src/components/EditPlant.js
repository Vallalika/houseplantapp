import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const EditPlant = ({editPlant, selectedPlant, gardens}) => {

    const [plantNameOne, setPlantNameOne] = useState(selectedPlant.plantNameOne);
    const [plantNameTwo, setPlantNameTwo] = useState(selectedPlant.plantNameTwo);
    const [origin, setOrigin] = useState(selectedPlant.origin);
    const [acquisitionDate, setAcquisitionDate] = useState(selectedPlant.acquisitionDate);
    const [status, setStatus] = useState(selectedPlant.status);
    const [growingSeason, setGrowingSeason] = useState(selectedPlant.plantGrowingSeason);
    const [light, setLight] = useState(selectedPlant.light);
    const [water, setWater] = useState(selectedPlant.water);
    const [temperature, setTemperature] = useState(selectedPlant.temperature);
    const [nutrients, setNutrients] = useState(selectedPlant.nutrients);
    const [soil, setSoil] = useState(selectedPlant.soil);
    const [humidity, setHumidity] = useState(selectedPlant.humidity);
    const [pruning, setPruning] = useState(selectedPlant.pruning);
    const [repotting, setRepotting] = useState(selectedPlant.repotting);
    const [notes, setNotes] = useState(selectedPlant.notes);
    
    const handleNameOneChange = (ev) => setPlantNameOne(ev.target.value);
    const handleNameTwoChange = (ev) => setPlantNameTwo(ev.target.value);
    const handleOriginChange = (ev) => setOrigin(ev.target.value);
    const handleAcquisitionDateChange = (ev) => setAcquisitionDate(ev.target.value);
    const handleStatusChange = (ev) => setStatus(ev.target.value);
    const handleGrowingSeasonChange = (ev) => setGrowingSeason(ev.target.value);
    const handleLightChange = (ev) => setLight(ev.target.value);
    const handleWaterChange = (ev) => setWater(ev.target.value);
    const handleTemperatureChange = (ev) => setTemperature(ev.target.value);
    const handleNutrientsChange = (ev) => setNutrients(ev.target.value);
    const handleSoilChange = (ev) => setSoil(ev.target.value);
    const handleHumidityChange = (ev) => setHumidity(ev.target.value);
    const handlePruningChange = (ev) => setPruning(ev.target.value);
    const handleRepottingChange = (ev) => setRepotting(ev.target.value);
    const handleNotesChange = (ev) => setNotes(ev.target.value);

    const Navigate = useNavigate();

    const handleSubmit = ev => {
        ev.preventDefault();
        let editedPlant = {
            id: selectedPlant.id,
            plantNameOne: plantNameOne,
            plantNameTwo: plantNameTwo,
            origin: origin,
            acquisitionDate: acquisitionDate,
            status: status,
            growingSeason: growingSeason,
            light: light,
            water: water,
            temperature: temperature,
            nutrients: nutrients,
            soil: soil,
            humidity: humidity,
            pruning: pruning,
            repotting: repotting,
            notes: notes,
            imageUrl: "http://localhost:8080/noimage.jpg",
            garden: {
                id: gardens[0].id
            }
        };
        editPlant(editedPlant);
        console.log("From EditPlant: "+ editedPlant);
        Navigate("/");
    }

    return (
        <>
            <p>Edit plant</p>
            <form onSubmit = { handleSubmit }>

                <input text="text" placeholder = "Name" name="plantNameOne" id="plantNameOne" size="50" value = {plantNameOne} onChange = {handleNameOneChange} required />
                <br />

                <input text="text" placeholder = "Second name" name="plantNameTwo" id="plantNameTwo" size="50" value={plantNameTwo} onChange={handleNameTwoChange} />
                <br />

                <input text="text" placeholder = "Origin" name="origin" id="origin" size="50" value={origin} onChange = {handleOriginChange} />
                <br />

                <input text="text" placeholder = "Acquisition date" name="acquisitionDate" id="acquisitionDate" size="50" value = {acquisitionDate} onChange = {handleAcquisitionDateChange} />
                <br />        
        
                <input text="text" placeholder="Status e.g. healthy" name="status" id="status" size="50" value = {status} onChange = {handleStatusChange} required />
                <br />
                
                <input text="text" placeholder="Growing season" name="growingSeason" id="growingSeason" size="50" value = {growingSeason} onChange = {handleGrowingSeasonChange} />
                <br />

                <input text="text" placeholder="Light needs e.g. direct sunlight, partial shade, etc." name="light" id="light" size="50" value = {light} onChange = {handleLightChange} required />
                <br />

                <input text="text" placeholder="Water e.g. signs of ideal soil humidity" name="water" id="water" size="50" value = { water } onChange = {handleWaterChange} required />
                <br />

                <input text="text" placeholder="Ideal temperature range" name="temperature" id="temperature" size="50" value = { temperature } onChange = {handleTemperatureChange} />
                <br />
                
                <input text="text" placeholder="Nutrient needs e.g. NPK, general schedule, etc." name="nutrients" id="nutrients" size="50" value = {nutrients} onChange = {handleNutrientsChange} />
                <br />

                <input text="text" placeholder="Ideal potting mix, including soil additives such as perlites" name="soil" id="soil" size="50" value = { soil } onChange = {handleSoilChange} />
                <br />
            
                <input text="text" placeholder="Ideal air humidity levels" name="humidity" id="humidity" size="50" value = {humidity} onChange = {handleHumidityChange} />
                <br />

                <input text="text" placeholder="Pruning" name="pruning" id="pruning" size="50" value = {pruning} onChange = {handlePruningChange} />
                <br />

                <input text="text" placeholder="Repotting frequency" name="repotting" id="repotting" size="50" value = {repotting} onChange = {handleRepottingChange} />
                <br />

                <textarea placeholder="Additional notes" name="notes" id="notes" rows="10" cols="45" value = {notes} onChange = {handleNotesChange} />
                <br />

                <input type="submit" name="Submit" value="Update" />

            </form>
        </>
    );
}

export default EditPlant;