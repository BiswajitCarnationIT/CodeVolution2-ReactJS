import react from 'react'
import React from 'react'
import { Fragment } from 'react'

function Columns() {
    const item = []
    /*
    return (
        <React.Fragment>
            {
                item.map( item => (
                    <React.Fragment key = {item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
            <td>Name</td>
            <td>Biswajit</td>
        </React.Fragment>
        
    ) 
    */
    return (
        
        <>
            
            <td>Name</td>
            <td>Biswajit</td>
        </>
    )
}

export default Columns
