import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './OwnerDetail.css'

class OwnerDetail extends Component {

  state = {
      name: "",
      phoneNumber: "",
  }

  componentDidMount(){
    console.log("OwnerDetail: ComponentDidMount");
    //get(id) from APIManager and hang on to the data; put it into state
    APIManager.get("owners", this.props.ownerId)
    .then((owner) => {
      this.setState({
        name: owner.name,
        phoneNumber: owner.phoneNumber
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
                    <h2>Location: <span className="card-locationname">{this.state.name}</span></h2>
        <p>{this.state.phoneNumber}</p>
        </div>
      </div>
    );
  }
}

export default OwnerDetail;