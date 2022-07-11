import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const PlantCreation = ({createPlant,gardens}) => {

    const [plantNameOne, setPlantNameOne] = useState("");
    const [plantNameTwo, setPlantNameTwo] = useState("");
    const [origin, setOrigin] = useState("");
    const [acquisitionDate, setAcquisitionDate] = useState("");
    const [status, setStatus] = useState("");
    const [growingSeason, setGrowingSeason] = useState("");
    const [light, setLight] = useState("");
    const [water, setWater] = useState("");
    const [temperature, setTemperature] = useState("");
    const [nutrients, setNutrients] = useState("");
    const [soil, setSoil] = useState("");
    const [humidity, setHumidity] = useState("");
    const [pruning, setPruning] = useState("");
    const [repotting, setRepotting] = useState("");
    const [notes, setNotes] = useState("");
    
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
        let newPlant = {
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
            garden: {
                id: gardens[0].id
            }
        }
        createPlant(newPlant);
        Navigate("/");
        setPlantNameOne("");
        setPlantNameTwo("");
        setOrigin("");
        setAcquisitionDate("");
        setStatus("");
        setGrowingSeason("");
        setLight("");
        setWater("");
        setTemperature("");
        setNutrients("");
        setSoil("");
        setHumidity("");
        setPruning("");
        setRepotting("");
        setNotes("");
    }

    return (
        <>
            <p>Fill in the below form to add a new plant to your garden</p>
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

                <input type="submit" name="Submit" value="Save" />

            </form>
        </>
    );
}

export default PlantCreation;