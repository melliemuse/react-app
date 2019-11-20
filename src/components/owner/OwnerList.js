import React, { Component } from 'react'
import OwnerCard from './OwnerCard'
import OwnerManager from '../../modules/OwnerManager'

class OwnerList extends Component {
    state = {
        owner: [],
    }

componentDidMount(){
    console.log("OWNER LIST: ComponentDidMount");
    //getAll from OwnerManager and hang on to that data; put it in state
    OwnerManager.getAll()
    .then((owner) => {
        console.log(owner)
        this.setState({
            owner: owner
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