import React, {useState} from 'react'
import "./newentry.css"

function Newentry () {
    const [numbers,updateName]=useState(
        "4227"
    )
    return (
        <div className="newentry" >
        This is my Employee ID {numbers}
        </div>
    )
}

export default Newentry