import Task from 'features/tasks/Task';
import { Link } from 'react-router-dom';
import { isToDoTask } from 'services/DateServices';
import { formatDateToPrettyString, isOnSameDate } from 'services/DateServices';

const ToDoList = ({ tasks, setSelectedTask, setTasks }) => {
  const filteredTaskList = tasks.filter((task) => isToDoTask(task));

  const generateTaskList = filteredTaskList.map(
    (toDoTask, index, workingArray) => {
      const sameDate =
        index === 0
          ? false
          : isOnSameDate(
              workingArray[index].start,
              workingArray[index - 1].start
            );

      return (
        <div key={toDoTask.id}>
          {!sameDate && <h3>{formatDateToPrettyString(toDoTask.start)}</h3>}
          <Task
            key={toDoTask.id}
            toDoTask={toDoTask}
            setSelectedTask={setSelectedTask}
            setTasks={setTasks}
            tasks={tasks}
          />
        </div>
      );
    }
  );
  return (
    <>
      <Link
        to='/tasks/new'
        className='add-buttons'
      >
        Add new task
      </Link>
      <div className='table-wrapper'>
        <p className='completed-header'>Completed</p>
        <p className='header-style'>Edit</p>
        <p className='header-style'>Delete</p>
      </div>
      {generateTaskList}
    </>
  );
};

export default ToDoList;
