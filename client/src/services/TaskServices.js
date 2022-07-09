const baseURL = 'http://localhost:8080/api/careTasks/';

// Changes a task's start and end dates from string to JS date objects - requirement for tasks to show in calendar view
const convertStringsToDates = (task) => {
    let updatedTask = { ...task }
    const stringStartDate = updatedTask.start;
    const stringEndDate = updatedTask.end;
    updatedTask.start = new Date(stringStartDate);
    updatedTask.end = new Date (stringEndDate);
    return updatedTask;
    }

// Changes a task's start and end dates from JS date objects to string - requirement for tasks to be sent to server
const convertDatesToStrings = (task) => {
    let updatedTask = { ...task }
    const dateStartDate = updatedTask.start;
    const dateEndDate = updatedTask.end;
    updatedTask.start = formatDateToString(dateStartDate);
    updatedTask.end = formatDateToString(dateEndDate);
    return updatedTask;
}

// Turns a given JS date into a string of format YYYY-MM-DD
const formatDateToString = (date) => {
    const year = date.getFullYear();
    let month = 0 + (date.getMonth() + 1).toString();
    let day =  0 + date.getDate().toString();
    return [year, month, day]. join('-');
}

const TaskServices =  {
    
    getTasks() {
        return fetch(baseURL)
        .then(res => res.json())
        .then(tasks => tasks.map((task) =>
        convertStringsToDates(task)))
    },

    getUpcomingCareTasks() {
        return fetch(baseUrl/)
    }

    addTask(task) {
        convertDatesToStrings(task);
        return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(res => res.json())
        .then(task => convertStringsToDates(task))
    },

    updateTask(task) {
        return fetch(baseURL + task.id, {
        method: 'PUT',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(res => res.json());
    },

    deleteTask(id) {
        return fetch(baseURL + id, {
        method: 'DELETE'
        });
    }

};

export default TaskServices;