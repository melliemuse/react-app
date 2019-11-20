import React, { Component } from 'react'

class OwnerCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Owner: <span className="ownername">{this.props.owner.name} 
                        </span></h3>
                </div>
            </div>
        )
    }
}

export default OwnerCard