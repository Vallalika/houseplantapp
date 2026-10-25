const baseURL = import.meta.env.VITE_API_URL + '/gardens';

const GardenServices = {
  getGardens() {
    return fetch(baseURL).then((res) => res.json());
  },

  addGarden(garden) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(garden),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  },

  updateGarden(garden) {
    return fetch(baseURL + '/' + garden.id, {
      method: 'PUT',
      body: JSON.stringify(garden),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  },

  deleteGarden(id) {
    return fetch(baseURL + '/' + id, {
      method: 'DELETE',
    });
  },
};

export default GardenServices;
