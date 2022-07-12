import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const TaskCreation = ({createTask, plants}) => {

    const [title, setTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [completed, setCompleted] = useState(false);
    const [plantId, setPlantId] = useState(0);
    
    
    const handleTitleChange = (ev) => setTitle(ev.target.value);
    
    const handleDescriptionChange = (ev) => setTaskDescription(ev.target.value);
    
    const handleStartDateChange = (ev) => setStart(ev.target.value);

    const handleEndDateChange = (ev) => setEnd(ev.target.value);
    
    const handleCompletedChange = (ev) => {
        if (ev.target.value === "Complete") {
            setCompleted(true);
        } else {
            setCompleted(false);
        }
    }
    
    const handlePlantIdChange = (ev) => setPlantId(ev.target.value);

    const Navigate = useNavigate();

    const handleSubmit = ev => {
        
        ev.preventDefault();
        const targetPlantIndex = plants.findIndex(plant => plant.id == plantId);
        const newPlant = {
            id: plantId,
            plantNameOne: plants[targetPlantIndex].plantNameOne,
            status: plants[targetPlantIndex].status }
        let newTask = {
            title: title,
            taskDescription: taskDescription,
            allDay: true,
            start: new Date(start),
            end: new Date(end),
            completed: completed,
            plant: newPlant,
        }
        createTask(newTask);
        setTitle("");
        setTaskDescription("");
        setStart("");
        setEnd("");
        setCompleted(false);
        setPlantId(1);
        Navigate(("/calendar"));
    }

    const generatePlantOptions = plants.map((plant, index) =>

        <option key = {index} value={plant.id}> {plant.plantNameOne} </option>

    )

    return (
        <>
            <p>Fill in the below form to add a task to your calendar</p>
            <form onSubmit = { handleSubmit }>

                <input type="text" placeholder = "Task title" name="title" id="title" size="50" value = {title} onChange = {handleTitleChange} required />
                <br />

                <textarea type="text" placeholder = "Task description" name="taskDescription" id="taskDescription" rows="10" cols="45" value={taskDescription} onChange={handleDescriptionChange} />
                <br />

                <input type="date" name="start" id="start" value={start} onChange = {handleStartDateChange} />
                <br />
                
                <input type="date" name="end" id="end" value={end} onChange = {handleEndDateChange} />
                <br />

                <select name="completed" id="completed" onChange = {handleCompletedChange} required>
                    <option value="Incomplete">Incomplete</option>
                    <option value="Complete">Complete</option>
                </select>
                <br />

                <select name="plantId" id="plantId" onChange = {handlePlantIdChange} required>
                    <option value = "Select an option"> Select a plant </option>
                    {generatePlantOptions}
                </select>

                <input type="submit" name="Submit" value="Save" />

            </form>
        </>
    );
}

export default TaskCreation;