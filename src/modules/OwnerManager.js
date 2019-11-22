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
                "Content-type": "application/json"
            },
            body: JSON.stringify(newOwner)
        }).then(data => data.json())
    }
}
