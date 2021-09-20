import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {
    
    
    render() {
        //const {count} = this.state
        const {count,increCount} = this.props
        return (
            <div>
                <h2 onMouseOver = {increCount}>  Hovered {count} times</h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter,10)
