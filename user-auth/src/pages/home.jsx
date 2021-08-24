import React from 'react'

function Home(props) {
   
    return (
        <div>
            {props.name ? "hi "+props.name:"You are not logged in"}
        </div>
    )
}

export default Home
