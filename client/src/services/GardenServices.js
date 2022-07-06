const baseURL = 'http://localhost:8080/api/gardens';

const GardenServices =  {
    getGardens() {
        return fetch(baseURL)
        .then(res => res.json());
    },

    addGarden(garden) {
        return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(garden),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(res => res.json());
    },

    updatePlant(garden) {
        return fetch(baseURL + garden._id, {
        method: 'PUT',
        body: JSON.stringify(garden),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(res => res.json());
    },

    deletePlant(id) {
        return fetch(baseURL + id, {
        method: 'DELETE'
        });
    }
};

export default GardenServices;