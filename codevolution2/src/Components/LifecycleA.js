import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Biswajit'
        }
        console.log('LifecycleA constructore')
    }

    static getDerivedStateFromProps(props,state){

        console.log('lifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
    
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>LifecycleA</div>
                <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
