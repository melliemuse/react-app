import React, { Component } from 'react'
import { Link } from "react-router-dom"

class OwnerCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Owner: <span className="ownername">{this.props.owner.name} 
                        </span></h3>
                        <button onClick={() => this.props.history.push(`/owners/${this.props.owner.id}/edit`)}>Edit</button>
                        <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Discharge</button>
                        <Link to={`owners/${this.props.owner.id}`}><button>Details</button></Link>
                </div>
            </div>
        )
    }
}

export default OwnerCard