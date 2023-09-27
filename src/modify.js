import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Modifyemp = (empData,modifyEmp)=>{
    const [empName,setempName] = useState(id?.employeeName)
    const [empRole, setempRole] = useState(id?.empRole)
    const [empDoj, setempDoj] = useState(id?.doj)
    const [message,setMessage]= useState("")
    const navigate = {useNavigate}
    let {id} = useParams();
    console.log(
        empData.filter((item) => item.empId === Number(id)),id
        );
    const [emp,setEmp] = useState(
        empData.filter((item)=>item.empId === Number(id)),[0]
        );
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
        <td><button onClick={()=>modifyEmp(id,{employeeName: empName,
                empId: Number(id),
                empRole: empRole,
                doj: empDoj})}>Update</button></td>
    </tr>
    {message && <span style ={{color: "red"}}>{message}</span>}
</table>
</form>

</div>
        )
}
export default Modifyemp