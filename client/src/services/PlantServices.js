const baseURL = 'http://localhost:8080/api/plants/';

const PlantServices =  {
    getPlants() {
        return fetch(baseURL)
        .then(res => res.json());
    },

    addPlant(plant) {
        return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(plant),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(res => res.json());
    },

    updatePlant(plant) {
        return fetch(baseURL + plant.id, {
            method: 'PUT',
            body: JSON.stringify(plant),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(updatedPlant => updatedPlant.json());
    },

    deletePlant(id) {
        return fetch(baseURL + id, {
        method: 'DELETE'
        });
    }
};

export default PlantServices;