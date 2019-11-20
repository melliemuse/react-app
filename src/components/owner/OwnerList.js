import React, { Component } from 'react'
import OwnerCard from './OwnerCard'
import OwnerManager from '../../modules/OwnerManager'

class OwnerList extends Component {
    state = {
        owners: [],
    }

componentDidMount(){
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

render(){
    console.log("OWNER LIST: Render");

    return(
        <div className="container-cards">
            {this.state.owners.map(owner => <OwnerCard key={owner.id} owner={owner}/>)}
        </div>
    )
}
}

export default OwnerList