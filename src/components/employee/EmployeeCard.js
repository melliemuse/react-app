import React, { Component } from 'react'

class EmployeeCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture><img src={require("./conan.jpg")} alt="Conan in all his glory" /></picture>
                    <h3>Employee: <span className="card-employeename">Conan the Barbarian</span></h3>
                </div>
            </div>
        )
    }
}

export default EmployeeCard