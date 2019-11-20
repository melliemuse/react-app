import React, { Component } from 'react'

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
                </div>
            </div>
        )

    }
}

export default LocationCard