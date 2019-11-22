import React, { Component } from 'react'
import LocationManager from '../../modules/LocationManager'

class LocationForm extends Component {
    state = {
        locationName: "",
        locationAddress: "",
        loadingStatus: false
    }

    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    createNewLocation = event => {
        event.preventDefault()
        if (this.state.locationName === "" || this.state.locationAddress === "") {
            window.alert("Please fill out all fields")
        } else {
            this.setState({ loadingStatus: true })
            const location = {
                name: this.state.locationName,
                address: this.state.locationAddress
            }

            LocationManager.post(location)
                .then(() => this.props.history.push("/locations"))
        }
    }

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <label 
                        htmlFor="locationName">
                            Location Name
                            </label>
                        <input
                            id="locationName"
                            placeholder="Location Name"
                            onChange={this.handleFieldChange}
                        />

                    </fieldset>
                    <fieldset>
                        <label 
                        htmlFor="locationAddress">
                            Location Address
                            </label>
                        <input
                            id="locationAddress"
                            placeholder="Location Address"
                            onChange={this.handleFieldChange}
                        />
                <div className="alignRight">
                    <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.createNewLocation}>
                        Submit
                </button>
                </div>
                        </fieldset>
                    </form>
            </>
        )
    }
}

export default LocationForm