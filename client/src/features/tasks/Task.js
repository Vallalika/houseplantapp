import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDateToPrettyString } from 'services/DateServices';

const Task = ({ toDoTask, editTask, deleteTask, setSelectedTask }) => {
    
    const [isComplete, setIsComplete] = useState(toDoTask.completed);

    const taskDateView = formatDateToPrettyString(toDoTask.start);

    const Navigate = useNavigate();

    const handleClickEdit = () => {
        setSelectedTask(toDoTask)
        Navigate(("/editTask"));
    }

    const handleClickDelete = () => {
        deleteTask(toDoTask.id);
    }

    const handleIsCompleteChange = () => {
        setIsComplete(!isComplete);
    }

    return (
    <>
        <div className = "task-wrapper">
            <h3> { taskDateView } </h3>
            <p className='bold'> { toDoTask.plant.plantNameOne }: { toDoTask.title } </p>

            <input type="checkbox" name="isComplete" id="isComplete" value = { isComplete } onChange = { handleIsCompleteChange } checked = { isComplete } required/>

            <img className ="edit-icon" src="http://localhost:8080/draw.png" alt="edit icon" onClick = { handleClickEdit } />
            <img className ="delete-icon" src="http://localhost:8080/delete.png" alt="delete icon" onClick = { handleClickDelete } />

        </div>
    </>
    )
}

export default Task;