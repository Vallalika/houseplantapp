import Task from 'features/tasks/Task';
import { Link } from 'react-router-dom';
import { isToDoTask } from 'services/DateServices';
import { formatDateToPrettyString, isOnSameDate } from 'services/DateServices';

const ToDoList = ({ tasks, setSelectedTask, editTask, deleteTask }) => {
    
    const filteredTaskList = tasks.filter((task) => isToDoTask(task));
    
    const generateTaskList = filteredTaskList.map((toDoTask, index, workingArray) => {
        const taskInfo = <Task
            key = { index }
            toDoTask = { toDoTask }
            setSelectedTask = { setSelectedTask }
            editTask = { editTask }
            deleteTask = { deleteTask }
            />
        
        if (index === 0) {
            return <>
                <h3>{formatDateToPrettyString(toDoTask.start)}</h3>
                { taskInfo }
            </>
            
        } else if ( isOnSameDate(workingArray[index].start, workingArray[index-1].start) ) {
            return <>{ taskInfo }</>
        } else {
            return <>
            <h3> {formatDateToPrettyString(toDoTask.start)} </h3>
            { taskInfo }
            </>
        }
    });

    return (
    <>
        <Link to="/createTask" className = "add-buttons">Add new task</Link>
        <div className="table-wrapper">
            <h4>Date</h4>
            <h4>Task</h4>
            <h4 className = "centered">Completed</h4>
            <h4>Edit</h4>
            <h4 className = "centered">Delete</h4>
        </div>
        { generateTaskList }
    </>
    )
}

export default ToDoList;