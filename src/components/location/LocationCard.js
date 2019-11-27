import React, { Component } from 'react'
import { Link } from "react-router-dom"

class LocationCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                <picture>
              <img src={require('./street-scene-wellness-taipei.jpg')} alt="Street Scene Taipei" />
            </picture>
                    <h2>Location: <span className="card-locationname">{this.props.locationQ.name}</span></h2>
        <p>{this.props.locationQ.address}</p>
        <button type="button" onClick={() => this.props.history.push(`/locations/${this.props.locationQ.id}/edit`)}>Edit</button>
        <button type="button" onClick={() => this.props.deleteLocation("locations", this.props.locationQ.id)}>Discharge</button>
        <Link to={`/locations/${this.props.locationQ.id}/details`}><button>Details</button></Link>
                </div>
            </div>
        )

    }
}

export default LocationCard