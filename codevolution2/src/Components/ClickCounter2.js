import React, { Component } from 'react'

class ClickCounter2 extends Component {
    
    
    render() {
        //const {count,incrementCount} = this.state        //It is not state anymore
        const {count,incrementCount} = this.props
        return (
            <button onClick = {incrementCount}>Clicke {count} times</button>
        )
    }
}

export default ClickCounter2
