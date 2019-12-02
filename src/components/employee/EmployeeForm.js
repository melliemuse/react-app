import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'

class EmployeeForm extends Component {
    state = {
        employeeName: "",
        employeePhoneNumber: "",
        locationId: "",
        locations: [],
        loadingStatus: false
    }

    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    createNewEmployee = event => {
        console.log("state", this.state)
        if (this.state.employeeName === "" || this.state.employeePhoneNumber === "") {
            window.alert("Please complete all fields before hitting submit")
        } else {
            event.preventDefault()
            const employee = {
                name: this.state.employeeName,
                phoneNumber: this.state.employeePhoneNumber,
                locationId: Number(this.state.locationId)
            }
            console.log("employee", employee)
            APIManager.post("employees", employee)
                .then(() => this.props.history.push("/employees"))
        }
    }

    componentDidMount() {
        APIManager.getAll("locations")
        .then(locations => {
            this.setState({
                locations: locations
            })
        })
    }

    render() {
        console.log("locations", this.state.locations)
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="employeeName">Employee Name</label>
                            <input
                                id="employeeName"
                                onChange={this.handleFieldChange}
                                placeholder="Employee Name"
                            />
                            <label htmlFor="employeePhoneNumber">Employee Phone Number</label>
                            <input
                                id="employeePhoneNumber"
                                onChange={this.handleFieldChange}
                                placeholder="Employee Phone Number"
                            />
                            <select
                            className="form-control"
                            id="locationId"
                            onChange={this.handleFieldChange}
                            >
                                {this.state.locations.map(location => 
                                <option key={location.id} value={location.id}>{location.name}</option>
                                )}
                            </select>
                        </div>
                        <div className="alignRight">
                            <button
                                onClick={this.createNewEmployee}
                                disabled={this.loadingStatus}
                            >
                                Submit
                    </button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }

}

export default EmployeeForm