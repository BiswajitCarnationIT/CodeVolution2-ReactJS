import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
   
    
    render() {
        //const {count} = this.state
        const {count,increCount} = this.props
        return (
            <div>
                <button onClick ={increCount}> {this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter,5);
