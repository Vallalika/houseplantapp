import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Task = ({ toDoTask, editTask, deleteTask, setSelectedTask }) => {
    
    const [isComplete, setIsComplete] = useState(toDoTask.completed);

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
        <div className = "table-wrapper">
            <p> { toDoTask.title } </p>

            <input type="checkbox" name="isComplete" id="isComplete" value = { isComplete } onChange = { handleIsCompleteChange } checked = { isComplete } required/>

            <img className ="centered-icons" src="http://localhost:8080/draw.png" alt="edit icon" onClick = { handleClickEdit } />
            <img className ="centered-icons" src="http://localhost:8080/delete.png" alt="delete icon" onClick = { handleClickDelete } />

        </div>
    </>
    )
}

export default Task;