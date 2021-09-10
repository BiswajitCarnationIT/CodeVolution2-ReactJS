import React from 'react'
import './myStyle.css'

function StyleSheet(props) {  //any name as parameter?
    let class_Name = props.primary_Props ? 'primary' : ''
    return (
        <div>
            {/*
            <h1 className = 'primary'> Style </h1>
            */}
            <h1 className = {`${class_Name} font-xl`}> Style </h1>
        </div>
    )
}

export default StyleSheet;
