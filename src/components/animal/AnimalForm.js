import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './AnimalForm.css'

class AnimalForm extends Component {
    state = {
        animalName: "",
        breed: "",
        employeeId: "",
        employees: [],
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal object, invoke the APIManager post method, and redirect to the full animal list
    */
    constructNewAnimal = evt => {
        evt.preventDefault();
        if (this.state.animalName === "" || this.state.breed === "") {
            window.alert("Please input an animal name and breed");
        } else {
            this.setState({ loadingStatus: true });
            const animal = {
                name: this.state.animalName,
                breed: this.state.breed,
                employeeId: this.state.employeeId
            };

            // Create the animal and redirect user to animal list
            APIManager.post("animals", animal)
                .then(() => this.props.history.push("/animals"));
        }
    };

    componentDidMount() {
        APIManager.getAll("employees")
        .then(employees => {
            console.log(employees)
            this.setState({
                employees: employees,
            }
            )
        })
    }

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="animalName"
                                placeholder="Animal name"
                            />
                            <label htmlFor="animalName">Name</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                className="form-control"
                                id="breed"
                                placeholder="Breed"
                            />
                            <label htmlFor="breed">Breed</label>
                            <select
                            className="form-control"
                            id="employeeId"
                            onChange={this.handleFieldChange}
                            >
                                {this.state.employees.map(employee =>
                                <option key={employee.id} value={employee.name}>{employee.name}</option>
                            )}
                            </select>

                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewAnimal}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default AnimalForm