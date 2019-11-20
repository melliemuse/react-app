import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeDetail.css'

class EmployeeDetail extends Component {

  state = {
      name: "",
      phoneNumber: "",
  }

  componentDidMount(){
    console.log("EmployeeDetail: ComponentDidMount");
    //get(id) from EmployeeManager and hang on to the data; put it into state
    EmployeeManager.get(this.props.employeeId)
    .then((employee) => {
      this.setState({
        name: employee.name,
        phoneNumber: employee.phoneNumber
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require("./conan.jpg")} alt="Conan in all his glory" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Phone Number: {this.state.phoneNumber}</p>
        </div>
      </div>
    );
  }
}

export default EmployeeDetail;