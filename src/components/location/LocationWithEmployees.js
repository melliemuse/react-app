import React, { Component } from 'react'
import EmployeeCard from '../employee/EmployeeCard'
import LocationManager from '../../modules/LocationManager'

class LocationWithEmployees extends Component {
    state = {
        location: {},
        employees: []
    }
    
    componentDidMount() {
        console.log(this.props.match.params.locationId)
        LocationManager.getWithEmployees(this.props.match.params.locationId)
        .then((results) => {
            console.log(results)
            console.log(results.employees)
            this.setState({
                location: results,
                employees: results.employees
            })
        })
    }

    render() {
        console.log(this.state.location)
        return (
            <div>
                <p>{this.state.location.name}</p>
                {this.state.employees.map(employee => 
                <EmployeeCard
                key={employee.id}
                employee={employee}
                {...this.props}
                />
                )}
            </div>
        )
    }
}

export default LocationWithEmployees