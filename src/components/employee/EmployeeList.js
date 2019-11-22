import React, { Component } from 'react'
import EmployeeCard from './EmployeeCard'
import EmployeeManager from '../../modules/EmployeeManager'

class EmployeeList extends Component {
    state = {
        employees: [],
    }

componentDidMount(){
    console.log("EMPLOYEE LIST: ComponentDidMount");
    //getAll from EmployeeManager and hang on to that data; put it in state
    EmployeeManager.getAll()
    .then((employees) => {
        console.log(employees)
        this.setState({
            employees: employees
        })
    })
}

deleteEmployee = id => {
    EmployeeManager.delete(id)
    .then(() => {
      EmployeeManager.getAll()
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
        <section>
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
            />
            )}
            </div>
            </>
    )
    }
}

export default EmployeeList