import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

class LocationDetail extends Component {

  state = {
      name: "",
      address: "",
      loadingStatus: true
  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(this.props.locationId)
    .then((location) => {
      this.setState({
        name: location.name,
        address: location.address,
        loadingStatus: false
      });
    });
  }

  handleDelete = () => {
    //  Has to be a fat arrow function if it's a function I define outside of a lifecycle hook otherwise this refers to the window
      this.setState({loadingStatus: true})
      LocationManager.delete(this.props.locationId)
      .then(() => this.props.history.push("/locations"))
  }

  render() {
    console.log(this.state)
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./street-scene-wellness-taipei.jpg')} alt="Street Scene Taipei" />
            </picture>
                    <h2>Location: <span className="card-locationname">{this.state.name}</span></h2>
        <p>{this.state.address}</p>
        <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default LocationDetail;