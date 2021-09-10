import React from 'react'

const heading = {

    // camelCase css key : value 'string'
    
    fontSize : '72px',     // css property name but in react camel case
    color : 'blue'
}

function Inline() {
    return (
        <div>
            <h1 className = 'error'>Error from inline</h1>  {/*  As modules are localy scoper by default  */}
            <h1 style ={ heading } >Inline</h1>  {/*  style = object  */}
        </div>
    )
}

export default Inline
