import React from 'react';
import Task from './Task';

const UpcomingTaskList = ({upcomingTasks}) => {
    
    const generateTaskList = upcomingTasks.map((upcomingTask, index) =>
        <Task
            key={index}
            upcomingTask = {upcomingTask}
            />)

    return (
    <>
        {generateTaskList}
    </>
    )
}

export default UpcomingTaskList;