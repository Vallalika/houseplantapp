import React, {useState} from "react";

const TaskCreation = ({createTask, plants}) => {

    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const [plantId, setPlantId] = useState(0);
    
    
    const handleNameChange = (ev) => setTaskName(ev.target.value);
    
    const handleDescriptionChange = (ev) => setTaskDescription(ev.target.value);
    
    const handleDateChange = (ev) => setTaskDate(ev.target.value);
    
    const handleCompletedChange = (ev) => {
        if (ev.target.value === "Complete") {
            setIsComplete(true);
        } else {
            setIsComplete(false);
        }
    }
    
    const handlePlantIdChange = (ev) => setPlantId(ev.target.value);

    const handleSubmit = ev => {
        ev.preventDefault();
        let newTask = {
            taskName: taskName,
            taskDescription: taskDescription,
            taskDate: taskDate,
            isComplete: isComplete,
            plant: {
                id: plantId
            }
        }
        createTask(newTask);
        setTaskName("");
        setTaskDescription("");
        setTaskDate("");
        setIsComplete(false);
        setPlantId(1);
    }

    const generatePlantOptions = plants.map((plant, index) =>

        <option key = {index} value={plant.id}> {plant.plantNameOne} </option>

    )

    return (
        <>
            <p>Fill in the below form to add a task to your calendar</p>
            <form onSubmit = { handleSubmit }>

                <input text="text" placeholder = "Task title" name="taskName" id="taskName" size="50" value = {taskName} onChange = {handleNameChange} required />
                <br />

                <textarea text="text" placeholder = "Task description" name="taskDescription" id="taskDescription" rows="10" cols="45" value={taskDescription} onChange={handleDescriptionChange} />
                <br />

                <input type="date" name="taskDate" id="taskDate" size="taskDate" value={taskDate} onChange = {handleDateChange} />
                <br />
                
                <select name="isComplete" id="isComplete" onChange = {handleCompletedChange} required>
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