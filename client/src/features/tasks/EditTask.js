import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { formatDateToString } from "../../services/DateServices";

const EditTask = ({ editTask, selectedTask, setSelectedTask, deleteTask, plants }) => {

    const noNullValueForDescription = () => {
        if (selectedTask.taskDescription === null) {
            return "";
        } else {
            return selectedTask.taskDescription;
        }
    }

    const [title, setTitle] = useState(selectedTask.title);
    const [taskDescription, setTaskDescription] = useState(noNullValueForDescription());
    const [start, setStart] = useState(formatDateToString(selectedTask.start));
    const [end, setEnd] = useState(formatDateToString(selectedTask.end));
    const [completed, setCompleted] = useState(selectedTask.completed);
    const [plantId, setPlantId] = useState(selectedTask.plant.id);


    const handleTitleChange = (ev) => setTitle(ev.target.value);
    const handleDescriptionChange = (ev) => setTaskDescription(ev.target.value);
    const handleStartChange = (ev) => setStart(ev.target.value);
    const handleEndChange = (ev) => setEnd(ev.target.value);
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
        let editedTask = {
            id: selectedTask.id,
            title: title,
            taskDescription: taskDescription,
            start: new Date(start),
            end: new Date(end),
            completed: completed,
            plant: {
                id: plantId
            }
        };
        editTask(editedTask);
        Navigate("/upcomingCare");
        setSelectedTask({});
    }

    const handleCancelClick = () => {
        Navigate("/upcomingCare");
    }

    const generatePlantOptions = plants.map((plant, index) =>
        <option key = {index} value={plant.id}> {plant.plantNameOne} </option>

    )

    return (
        <>
            <h3>Edit task</h3>
            <form onSubmit = { handleSubmit }>

                <input text="text" name="title" id="title" size="50" value = {title} onChange = {handleTitleChange} required />
                <span className = "required-field"> *</span>
                <br />

                <textarea type="text" name="taskDescription" id="taskDescription" rows="8" cols="41" value={taskDescription} onChange={handleDescriptionChange} />
                <br />

                <input type="date" name="start" id="start" value={start} onChange = {handleStartChange} required />
                <span className = "required-field"> *</span>
                <br />
                
                <input type="date" name="end" id="end" value={end} onChange = {handleEndChange} required/>
                <span className = "required-field"> *</span>
                <br />

                <select name="completed" id="completed" onChange = {handleCompletedChange} required>
                    <option value="Incomplete">Incomplete</option>
                    <option value="Complete">Complete</option>
                </select>
                <span className = "required-field"> *</span>
                <br />

                <select name="plantId" id="plantId" onChange = {handlePlantIdChange} required>
                    <option value = {plantId}> { selectedTask.plant.plantNameOne } </option>
                    {generatePlantOptions}
                </select>
                <span className = "required-field"> *</span>
                <br />

                <button className = "cancel-button" onClick = { handleCancelClick }> Cancel </button>
                <input className = "submit-button" type="submit" name="Submit" value="Save" />

            </form>
        </>
    );
}

export default EditTask;