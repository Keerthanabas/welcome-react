import React , {useState}from "react";
import axios from "axios"; 
import {useNavigate} from 'react-router-dom';

const Create = () =>{
    const navigate = useNavigate();
    const [employeeName, setempName] = useState("");
    const [empRole , setempRole] = useState("");
    const [doj, setdoj] = useState("");
    const[ message, setMessage] = useState("");
    
   const onLogin = () => {
    
        axios
        .post ('data')
        .then ((res) =>{
            setMessage("create successfully");
            navigate("/")
        })
        .catch ((err) =>{
            console.log(err, "error");
            setMessage("Please enter enter the details");
        });
      };
       
return (
<>    
<center>
        EmployeeName :
        <input type = "text" value = {employeeName} placeholder="EmpName" onChange={(e) =>setempName(e.target.value)}/> <br></br>
        EmpRole :
        <input type = "text" value = {empRole} placeholder="EmpRole" onChange={(e) =>setempRole(e.target.value)}/><br></br>
        EmpDOJ :
        <input type = "text" value = {doj} placeholder="DOJ" onChange={(e) =>setdoj(e.target.value)}/>
        <br></br>
<div>
<button type ="submit" onClick={()=>onLogin()}>Submit</button>
</div>
{message && <span style={{ color: "red" }}>{message} </span>}
</center>
    
</>
    );

};

export default Create;