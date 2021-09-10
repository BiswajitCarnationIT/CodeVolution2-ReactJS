import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username : ''
        }
    }

    handlerUsernameChange = (eventUsername) => {
        this.setState({username : eventUsername.target.value})
    }
    
    render() {
        return (
            <form>
                <lable> User Name </lable>
                <input type = 'text' 
                value = {this.state.username} onChange = {this.handlerUsernameChange} />
            </form>
        )
    }
}

export default Form
