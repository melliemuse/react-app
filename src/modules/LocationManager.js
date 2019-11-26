const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/locations/${id}`).then(results => results.json())
    },
    getWithEmployees(id) {
        return fetch(`${remoteURL}/locations/${id}/?_embed=employees`).then(results => results.json())
    },
    getAll() {
        return fetch(`${remoteURL}/locations`).then(results => results.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/locations/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },
    post(newLocation) {
        console.log(newLocation)
        return fetch(`${remoteURL}/locations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newLocation)
        }).then(data => data.json())
    },
    updateLocation(locationToUpdate) {
        console.log(locationToUpdate)
        return fetch(`${remoteURL}/locations/${locationToUpdate.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locationToUpdate)
        }).then(data => data.json)
    }
}