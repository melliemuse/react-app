
const remoteURL = `http://localhost:5002`

export default {
    get(module, id) {
        return fetch(`${remoteURL}/${module}/${id}`).then(results => results.json())
    },
    getAll(module) {
        return fetch(`${remoteURL}/${module}`).then(results => results.json())
    },
    getWith(module, id, secondDataSet) {
        return fetch(`${remoteURL}/${module}/${id}/?_embed=${secondDataSet}`).then(results => results.json())
    },
    delete(module, id) {
        return fetch(`${remoteURL}/${module}/${id}`, {
            method: "DELETE"
        }).then(results => results.json())
    },
    post(module, newItem) {
        return fetch(`${remoteURL}/${module}`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newItem)
        }).then(results => results.json())
    },
    update(module, editedItem) {
        return fetch(`${remoteURL}/${module}/${editedItem.id}`, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(editedItem)
        }).then(results => results.json())
    }
}
