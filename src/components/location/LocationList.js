import React, { Component } from 'react'
import LocationCard from './LocationCard'
import APIManager from '../../modules/APIManager'

class LocationList extends Component {
    state = {
        locations: [],
    }

    componentDidMount() {
        console.log("LOCATION LIST: ComponentDidMount");
        //getAll from APIManager and hang on to that data; put it in state
        APIManager.getAll("locations")
            .then((locations) => {
                console.log(locations)
                this.setState({
                    locations: locations
                })
            })
    }

    deleteLocation = (module, id) => {
        APIManager.delete("locations", id)
        .then(() => {
            APIManager.getAll("locations")
            .then((newLocations) => {
                this.setState({
                    locations: newLocations
            })
            })
        })
    }

    render() {
        console.log("LOCATION LIST: Render");
        return (
            <>
            <section>
                <button
                className="btn"
            onClick={() => this.props.history.push("/locations/new")}
                >
                    Create New Location</button>
            </section>
            <div className="container-cards">
                {this.state.locations.map(location => <LocationCard 
                 {...this.props}
                key={location.id} locationQ={location} deleteLocation={this.deleteLocation} 
               
                />)}
            </div>
            </>
        )
    }
}

export default LocationList
