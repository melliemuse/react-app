const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/owners/${id}`).then(results => results.json())
    },
    getAll() {
        return fetch(`${remoteURL}/owners`).then(results => results.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/owners/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },
    post(newOwner) {
        return fetch(`${remoteURL}/owners`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newOwner)
        }).then(data => data.json())
    },
    updateOwner(ownerToUpdate) {
        return fetch(`${remoteURL}/owners/${ownerToUpdate.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ownerToUpdate)
        }).then(data => data.json())
    }
}
