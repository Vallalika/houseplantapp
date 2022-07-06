const baseURL = 'http://localhost:8080/api/careTasks';

const TaskServices =  {
    getTasks() {
        return fetch(baseURL)
        .then(res => res.json());
    },

    addTask(task) {
        return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(res => res.json());
    },

    updateTask(task) {
        return fetch(baseURL + task._id, {
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