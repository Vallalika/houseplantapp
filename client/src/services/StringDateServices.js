// FUNCTIONS SUPPORTING STRING TO DATE CONVERSION

// Turns a given JS date into a string of format YYYY-MM-DD
export const formatDateToString = (date) => {
    const year = date.getFullYear();
    let month = 0 + (date.getMonth() + 1).toString();
    let day =  0 + date.getDate().toString();
    return [year, month, day]. join('-');
}

// Changes a task's start and end dates from string to JS date objects - requirement for tasks to show in calendar view
export const convertStringsToDates = (task) => {

    let updatedTask = { ...task }
    const stringStartDate = updatedTask.start;
    const stringEndDate = updatedTask.end;
    updatedTask.start = new Date(stringStartDate);
    updatedTask.end = new Date (stringEndDate);
    return updatedTask;
}

// Changes a task's start and end dates from JS date objects to string - requirement for tasks to be sent to server
export const convertDatesToStrings = (task) => {
    let updatedTask = { ...task }
    const dateStartDate = updatedTask.start;
    const dateEndDate = updatedTask.end;
    updatedTask.start = formatDateToString(dateStartDate);
    updatedTask.end = formatDateToString(dateEndDate);
    return updatedTask;
}