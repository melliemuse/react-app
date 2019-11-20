import React, { Component } from 'react'

class LocationCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                <picture>
              <img src={require('./street-scene-wellness-taipei.jpg')} alt="Street Scene Taipei" />
            </picture>
                    <h3>Location: <span className="card-locationname">Taipei</span></h3>
                </div>
            </div>
        )

    }
}

export default LocationCard