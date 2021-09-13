//rfce

import React from 'react'

function MemoComp({name}) {  //Destructuring name prop
    console.log("rendering memo component")
    return (
        <div>
            {name}
        </div>
    )
}

export default MemoComp
