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
                    <h2>Location: <span className="card-locationname">{this.props.location.name}</span></h2>
        <p>{this.props.location.address}</p>
        <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Discharge</button>
        <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
                </div>
            </div>
        )

    }
}

export default LocationCard