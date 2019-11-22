import React, { Component } from 'react'
import EmployeeManager from '../../modules/EmployeeManager'

class EmployeeForm extends Component {
    state= {
        employeeName: "",
        employeePhoneNumber: "",
        loadingStatus: false
    }

    handleFieldChange = event => {
        const toChange = {}
        toChange[event.target.id] = event.target.value
        this.setState(toChange)
    }

    createNewEmployee = event => {
        if (this.state.employeeName === "" || this.state.employeePhoneNumber === "") {
            window.alert("Please complete all fields before hitting submit")
        } else {
            event.preventDefault()
            const employee = {
                name: this.state.employeeName,
                phoneNumber: this.state.employeePhoneNumber
            }
            EmployeeManager.post(employee)
            .then(this.props.history.push("/employees"))
        }
    }

    render() {
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
                    </div>
                <div className="alignRight">
                    <button
                    onClick={this.createNewEmployee}
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