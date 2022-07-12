// DATE FORMATTING FUNCTIONS

// Turns a given JS date into an easy to read string for the user
export const formatDateToPrettyString = (date) => {
    const months = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    };
    const monthName = months[date.getMonth()];
    
    const days = [
        'Sun',
        'Mon',
        'Tues',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ]
    
    const dayName = days[date.getDay()];
    
    const year = date.getFullYear();
    
    const day =  0 + date.getDate();

    const prettyDate = `${dayName}, ${day} ${monthName} ${year}`;
    return prettyDate;
}

// Turns a given JS date into a string of format YYYY-MM-DD (required for server send)
export const formatDateToString = (date) => {
    const year = date.getFullYear();
    let month = 0 + (date.getMonth() + 1).toString();
    let day =  0 + date.getDate().toString();
    return [year, month, day]. join('-');
}

// Changes a task's start and end dates from string to JS date objects (required for tasks to show in calendar view)
export const convertStringsToDates = (task) => {

    let updatedTask = { ...task }
    const stringStartDate = updatedTask.start;
    const stringEndDate = updatedTask.end;
    updatedTask.start = new Date(stringStartDate);
    updatedTask.end = new Date (stringEndDate);
    return updatedTask;
}

// Changes a task's start and end dates from JS date objects to string (required for tasks to be sent to server)

export const convertDatesToStrings = (task) => {
    let updatedTask = { ...task };
    const dateStartDate = updatedTask.start;
    const dateEndDate = updatedTask.end;
    updatedTask.start = formatDateToString(dateStartDate);
    updatedTask.end = formatDateToString(dateEndDate);
    return updatedTask;
}

// Sort upcoming tasks by later date first
export const sortUpcomingTasks = (upcomingTasks) => {
    const sortTasks = [...upcomingTasks].sort((taskA, taskB) => Number(taskB.start)-Number(taskA.start));
    return sortTasks;
}
