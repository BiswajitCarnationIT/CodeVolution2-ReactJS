//   Higher Order Component //

import React from "react";

const UpdatedComponent =  (OriginalComponent,incrementNumber) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        incrementCount= () => {
            this.setState( previousState => {  ///any name
                return {count : previousState.count + incrementNumber}
            })
        }
        render(){
            return <OriginalComponent count={this.state.count} increCount = {this.incrementCount}{...this.props}/>
        }
    }
    return NewComponent
}

export default UpdatedComponent;