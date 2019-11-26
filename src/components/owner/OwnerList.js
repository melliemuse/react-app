import React, { Component } from 'react'
import OwnerCard from './OwnerCard'
import OwnerManager from '../../modules/OwnerManager'

class OwnerList extends Component {
    state = {
        owners: [],
    }

    componentDidMount() {
        console.log("OWNER LIST: ComponentDidMount");
        //getAll from OwnerManager and hang on to that data; put it in state
        OwnerManager.getAll()
            .then((owners) => {
                console.log(owners)
                this.setState({
                    owners: owners
                })
            })
    }

    deleteOwner = id => {
        OwnerManager.delete(id)
            .then(() => {
                OwnerManager.getAll()
                    .then((newOwners) => {
                        this.setState({
                            owners: newOwners
                        })
                    })
            })
    }

    render() {
        console.log("this.props", this.props);

        return (
            <>
                <section className="section-content">
                    <button type="button" className="btn" onClick={() => this.props.history.push("/owners/new")}>Add Owner</button>
                </section>
                <div className="container-cards">
                    {this.state.owners.map(owner =>
                        <OwnerCard
                            key={owner.id}
                            owner={owner}
                            deleteOwner={this.deleteOwner}
                            {...this.props}
                        />
                    )}
                </div>
            </>
        )
    }
}

export default OwnerList