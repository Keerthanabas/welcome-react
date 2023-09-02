import React, {useState} from 'react'
import "./welcome.css"


function Welcome () {
    const [name,updateName]=useState(
        "keerthana"
    )
 return (
    
    <div className="welcome" >
        Welcome to the page...{name}
    </div>
 )
}

export default Welcome 
