import {useState} from "react";


const Percentage = () => {
const [percentage,setPercentage]=useState(100);

return (
    <p>
    <center>
        This is the value of percentage
    <div>
        {percentage+"%"}
    
    <div>
        <button onClick={() => setPercentage(percentage + 1)}>+</button>
        <button onClick={() => setPercentage(percentage - 1)}>-</button>
    </div>
    </div>
    </center>
    </p>
    
);
};

export default Percentage;