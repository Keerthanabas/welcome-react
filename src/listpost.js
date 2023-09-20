import React , {useState} from "react";
import axios from "axios";

const ListPost = () => {
const [firstname,setFirstname] = useState("");
const [lastname,setLastname] = useState("");
const [age, setAge]  = useState("");
const [message, setMessage] = useState("");
const onLogin = () =>{
    if(firstname && lastname && age)
{
    axios
    .post("https://dummyjson.com/users/add",
    {
        firstName : 'Muhammad',
        lastName : 'Ovi',
        age : '250'
    }
    )
    .then ((res)=> {
        console.log(res.data, "res");
        setMessage("User Created");
    })
    .catch((err)=> {
        console.log(err);
        setMessage ("Something went wrong!")
    })
}
};
return (
    
<>
firstName
<input type ="text" value = {firstname} onChange={(e)=> setFirstname(e.target.value)}/><br></br>
lastName
<input type ="text" value = {lastname} onChange = {(e)=> setLastname(e.target.value)}/><br></br>
age
<input type ="text" value = {age} onChange = {(e)=> setAge(e.target.value)}/>

<div>
    <button type ="submit" onClick={()=>onLogin()}>Submit</button>
</div>
{message }
</>

);
}
export default ListPost;