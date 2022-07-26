import Task from 'features/tasks/Task';
import { Link } from 'react-router-dom';

const UpcomingTaskList = ({ upcomingTasks, setSelectedTask, deleteTask }) => {

    const generateTaskList = upcomingTasks.map((upcomingTask, index) =>
        <Task
            key={index}
            upcomingTask = {upcomingTask}
            setSelectedTask = {setSelectedTask}
            deleteTask = {deleteTask}
            />)

    return (
    <>
        <Link to="/createTask" className = "add-buttons">Add new task</Link>
        {generateTaskList}
    </>
    )
}

export default UpcomingTaskList;