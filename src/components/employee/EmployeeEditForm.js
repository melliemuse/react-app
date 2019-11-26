import React, { Component } from 'react'
import EmployeeManager from '../../modules/EmployeeManager'

class EmployeeEditForm extends Component {
    state = {
        employeeName: "",
        employeePhoneNumber: "",
        loadingStatus: true
    }

    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    updateEmployee = event => {
        if (this.state.employeeName === "" || this.state.employeePhoneNumber === "") {
            window.alert("Please complete all fields before hitting the 'submit' button")
        } else {
            this.setState({ loadingStatus: true })
            event.preventDefault()
            const employee = {
                id: this.props.match.params.employeeId,
                name: this.state.employeeName,
                phoneNumber: this.state.employeePhoneNumber,
            }
            EmployeeManager.update(employee)
            .then(() => this.props.history.push("/employees"))
        }
    }

    componentDidMount() {
        EmployeeManager.get(this.props.match.params.employeeId)
        .then(employee => {
            this.setState({
                employeeName: employee.name,
                employeePhoneNumber: employee.phoneNumber,
                loadingStatus: false
            })
        })
    }

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="employeeName">Employee Name</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                value={this.state.employeeName}
                                id="employeeName"
                                onChange={this.handleFieldChange}
                            />
                            <label htmlFor="employeePhoneNumber">Employee Phone Number</label>
                            <input
                                type="text"
                                required
                                id="employeePhoneNumber"
                                className="form-control"
                                value={this.state.employeePhoneNumber}
                                onChange={this.handleFieldChange}
                            />
                        </div>
                        <button
                            className="alignRight"
                            onClick={this.updateEmployee}
                        >
                            Submit
                        </button>
                    </fieldset>
                </form>
            </>
        )

    }
}

export default EmployeeEditForm