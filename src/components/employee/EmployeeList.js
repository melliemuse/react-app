import React, { Component } from 'react'
import EmployeeCard from './EmployeeCard'
import APIManager from '../../modules/APIManager'

class EmployeeList extends Component {
    state = {
        employees: [],
    }

componentDidMount(){
    console.log("EMPLOYEE LIST: ComponentDidMount");
    //getAll from APIManager and hang on to that data; put it in state
    APIManager.getAll("employees")
    .then((employees) => {
        console.log(employees)
        this.setState({
            employees: employees
        })
    })
}

deleteEmployee = (module, id) => {
    APIManager.delete("employees", id)
    .then(() => {
      APIManager.getAll("employees")
      .then((newEmployees) => {
        this.setState({
            employees: newEmployees
        })
      })
    })
  }


render(){
    console.log("EMPLOYEE LIST: Render");

    return(
        <>
        <section className="section-content">
            <button 
            className="btn"
            onClick={() => (this.props.history.push("employees/new"))}
            >
                Add New Employee
            </button>
        </section>
        <div className="container-cards">
            {this.state.employees.map(employee => 
            <EmployeeCard 
            key={employee.id} 
            employee={employee} 
            deleteEmployee={this.deleteEmployee}
            {...this.props} 
            />
            )}
            </div>
            </>
    )
    }
}

export default EmployeeList