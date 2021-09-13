// rce

import React, { Component } from 'react'

class RegularComp extends Component {
    render() {
        console.log("Regular Component Render")
        return (
            <div>
                Regular comments {this.props.name}
            </div>
        )
    }
}

export default RegularComp
