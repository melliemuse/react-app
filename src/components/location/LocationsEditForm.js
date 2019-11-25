import React, { Component } from 'react'

class LocationsEditForm extends Component {
    state = {
        locationName: "",
        address: "",
        loadingStatus: false
    }

    handleFieldChange = event => {
        stateToChange = {}
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
                name: this.state.locationName,
                address: this.state.address
            }
        }
    }


    componentDidMount() {

    }

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div>
                            <label>

                            </label>
                            <input

                            />
                            <label>

                            </label>
                            <input

                            />
                        </div>
                        <div>
                            <button>

                            </button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}