import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

class LocationDetail extends Component {

  state = {
      name: "",
      address: "",
  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(this.props.locationId)
    .then((location) => {
      this.setState({
        name: location.name,
        address: location.address
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./street-scene-wellness-taipei.jpg')} alt="Street Scene Taipei" />
            </picture>
                    <h2>Location: <span className="card-locationname">{this.state.name}</span></h2>
        <p>{this.state.address}</p>
        </div>
      </div>
    );
  }
}

export default LocationDetail;