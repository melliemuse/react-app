import React, { Component } from 'react'

class EmployeeCard extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="card">
                <div className="card-content">
                    <picture><img src={require("./conan.jpg")} alt="Conan in all his glory" /></picture>
                    <h2>Employee: <span className="card-employeename">{this.props.employee.name}</span></h2>
                    <p>Phone Number: {this.props.employee.phoneNumber}</p>
                    <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Discharge</button>
                </div>
            </div>
        );
    }
}


export default EmployeeCard