import React, { Component } from 'react'
import OwnerManager from '../../modules/OwnerManager'

class OwnerForm extends Component {
    state = {
        ownerName: "",
        phoneNumber: "",
        loadingStatus: false
    }

    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    constructNewOwner = event => {
        event.preventDefault()
        if (this.state.phoneNumber === "" || this.state.ownerName === "") {
            window.alert("Please enter information into all fields")
        } else {
            this.setState({loadingStatus: true})
            const owner = {
                name: this.state.ownerName,
                phoneNumber: this.state.phoneNumber
            }

            OwnerManager.post(owner)
            .then(() => this.props.history.push("/owners"))
        }
    }

    render() {
        console.log("this.state.phoneNumber", this.state.phoneNumber)
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="ownerName">Owner Name</label>
                            <input
                                type="text required"
                                onChange={this.handleFieldChange}
                                id="ownerName"
                                placeholder="Owner name" />
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input
                                type="text required"
                                onChange={this.handleFieldChange}
                                id="phoneNumber"
                                placeholder="Phone number" />
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewOwner}
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

export default OwnerForm