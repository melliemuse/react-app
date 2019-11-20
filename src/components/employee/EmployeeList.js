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

render(){
    console.log("EMPLOYEE LIST: Render");

    return(
        <div className="container-cards">
            {this.state.employees.map(employee => <EmployeeCard key={employee.id} employee={employee}/>)}
        </div>
    )
}
}

export default EmployeeList