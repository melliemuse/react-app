import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'

class LocationsEditForm extends Component {
    state = {
        locationName: "",
        address: "",
        loadingStatus: false
    }

    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    updateExistingLocation = event => {
        if (this.state.locationName === "" || this.state.address === "") {
            window.alert("Please fill out all fields before hitting the 'submit' button")
        } else {
            event.preventDefault()
            this.setState({loadingStatus: true})
            const location = {
                id: this.props.match.params.locationId,
                name: this.state.locationName,
                address: this.state.address
            }
            APIManager.update("locations", location)
            .then(() => this.props.history.push("/locations"))
        }
    }


    componentDidMount() {
        APIManager.get("locations", this.props.match.params.locationId)
        .then(location => {
            this.setState({
                locationName: location.name,
                address: location.address
            })
        })
    }

    render() {
        console.log("state", this.state)
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="locationName">
                            Location Name
                            </label>
                            <input
                                type="text"
                                required
                                id="locationName"
                                value={this.state.locationName}
                                onChange={this.handleFieldChange}
                            />
                            <label>
                                Location Address
                            </label>
                            <input
                                type="text"
                                required
                                id="locationAddress"
                                value={this.state.address}
                                onChange={this.handleFieldChange}
                            />
                        </div>
                        <div>
                            <button
                                onClick={this.updateExistingLocation}
                            >
                                Submit
                            </button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default LocationsEditForm