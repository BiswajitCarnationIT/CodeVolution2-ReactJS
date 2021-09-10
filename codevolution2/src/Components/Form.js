import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
            comments: '',
            topic:'React'
        }
    }

    handlerUsernameChange = (eventUsername) => {
        this.setState({username : eventUsername.target.value})
    }
    handelCommentChange = (event) => {
        this.setState({comments: event.target.value})
    }
    handelTopicChange = event => {
        this.setState({topic: event.target.value})
    }

    handelSubmit = event =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()  //page does not refress aafter submission
    }
    
    render() {
        const {username,comments,topic} = this.state // destructuring
        return (
            <form onSubmit = {this.handelSubmit}>
                <div>
                    <lable> User Name </lable>
                    <input type = 'text' 
                    value = {this.state.username} onChange = {this.handlerUsernameChange} />
                </div>

                <div>
                    <lable> Comments </lable>
                    <textarea value = {this.state.comments}
                    onChange = {this.handelCommentChange}></textarea>
                </div>

                <div>
                    <label>Topic</label>
                    <select value = {this.state.topic} onChange = {this.handelTopicChange}>
                        <option value = "React">React</option>
                        <option value = "Angular">Angular</option>
                        <option value = "Vue">Vue</option>
                    </select>
                </div>
                <button type = "submit">Submit</button>
                


            </form>
        )
    }
}

export default Form
