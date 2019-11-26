import React, { Component } from 'react'
import OwnerManager from '../../modules/OwnerManager'

class OwnerEditForm extends Component {
    state = {
        ownerName: "",
        ownerPhoneNumber: "",
        loadingStatus: false
    }

    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    updateExistingOwner = event => {
        event.preventDefault()
        this.setState({ loadingStatus: true })
        const owner = {
            name: this.state.ownerName,
            phoneNumber: this.state.ownerPhoneNumber,
            id: this.props.match.params.ownerId
        }
        OwnerManager.updateOwner(owner)
            .then(() => this.props.history.push("/owners"))
    }

    componentDidMount() {
        OwnerManager.get(this.props.match.params.ownerId)
            .then(owners => {
                this.setState({
                    ownerName: owners.name,
                    ownerPhoneNumber: owners.phoneNumber
                })
            })
    }

    render() {
        console.log("state", this.state)
        console.log("props", this.props)
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="ownerName">Owner name</label>
                            <input
                                id="ownerName"
                                type="text"
                                required
                                value={this.state.ownerName}
                                onChange={this.handleFieldChange}
                            />
                            <label htmlFor="ownerPhoneNumber">Owner Phone Number</label>
                                <input
                                    id="ownerPhoneNumber"
                                    type="text"
                                    value={this.state.ownerPhoneNumber}
                                    required
                                    onChange={this.handleFieldChange}
                                />
                            
                        </div>
                        <div className="alignRight">
                            <button
                                onClick={this.updateExistingOwner}
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

export default OwnerEditForm