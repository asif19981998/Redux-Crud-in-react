import React from 'react'

function Count(props) {

    return (
        <div>
           {props.count} 
           <button onClick={props.setCount}></button>
        </div>
    )
}

export default Count
