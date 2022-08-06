import Task from 'features/tasks/Task';
import { Link } from 'react-router-dom';
import { isToDoTask } from 'services/DateServices';

const ToDoList = ({ tasks, setSelectedTask, deleteTask }) => {
    
    const filteredTaskList = tasks.filter((task) => isToDoTask(task));

    const generateTaskList = filteredTaskList.map((toDoTask, index) =>
        <Task
            key = { index }
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