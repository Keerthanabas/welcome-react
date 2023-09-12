import React,{useState} from "react";
import Child from "./child.js"

const Parent = () => {

    const [Count,setCount] = useState(0);

    return(
<div>
   <Child num = {Count} updateNum ={setCount}/>
</div>

)
} 
export default Parent;