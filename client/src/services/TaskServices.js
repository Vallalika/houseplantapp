import { convertStringsToDates, convertDatesToStrings } from "./DateServices";

const baseURL = 'http://localhost:8080/api/careTasks/';

const TaskServices =  {
    
    getTasks() {
        return fetch(baseURL)
        .then(res => res.json())
        .then(tasks => tasks.map((task) =>
        convertStringsToDates(task)))
    },

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
    },

    deleteTask(id) {
        return fetch(baseURL + id, {
        method: 'DELETE'
        });
    }

};

export default TaskServices;