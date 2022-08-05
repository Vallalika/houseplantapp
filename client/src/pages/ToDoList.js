import Task from 'features/tasks/Task';
import { Link } from 'react-router-dom';

const ToDoList = ({ tasks, setSelectedTask, deleteTask }) => {

    // TO-DO: sort and filter tasks
    const generateTaskList = tasks.map((toDoTask, index) =>
        <Task
            key={index}
            toDoTask = { toDoTask }
            setSelectedTask = { setSelectedTask }
            deleteTask = { deleteTask }
            />)

    return (
    <>
        <Link to="/createTask" className = "add-buttons">Add new task</Link>
        { generateTaskList }
    </>
    )
}

export default ToDoList;