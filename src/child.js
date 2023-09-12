import React from "react";


const Child = (props) => {
    let {num,updateNum} = props;
    return(
        <div>
        Count {num}
        <button onClick ={() => updateNum (num+1)}>+</button>
        <button onClick ={() => updateNum (num-1)}>-</button>
        </div>



    )
}
export default Child;