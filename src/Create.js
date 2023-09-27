import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { data } from "./data";

const CreateWorkers = ({createEmp,empData}) => {
    const [empName,setempName] =useState("")
    const [empRole, setempRole] = useState("")
    const [empDoj, setempDoj] = useState("")
    const [message,setMessage]= useState("")
    const navigate = {useNavigate}
    const createWorkers = ()=> {
        if(empName && empRole && empDoj) {
            const data = {
                employeeName: empName,
                empId: empData.length + 1,
                empRole: empRole,
                doj: empDoj
            };
            createEmp(data);
            navigate("/")
        }else {
        setMessage("Please enter the details");
    }
    }
    
    return(
<div>
    <form>
<table>
    <tr>
        <td>EmployeeName</td> <td><input type = "text" value ={empName} placeholder="EmployeeName" onChange={(e)=>setempName(e.target.value)}></input></td>
    </tr>
    <tr>
        <td>Role</td> <td><input type ="text" value = {empRole} placeholder="Role" onChange={(e)=>setempRole(e.target.value)}></input></td>
    </tr>
    <tr>
        <td>DOJ</td> <td><input type ="text" value = {empDoj} placeholder="DOJ" onChange={(e)=>setempDoj(e.target.value)}></input></td>
    </tr>
    <tr>
        <td><button type="submit" onClick={()=>createWorkers()}>Submit</button></td>
    </tr>
    {message && <span style ={{color: "red"}}>{message}</span>}
</table>
</form>
</div>
)
}
export default CreateWorkers;