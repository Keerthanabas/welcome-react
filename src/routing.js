import { Routes, Route, useNavigate } from "react-router-dom";
import Crud from './crudhome';
import CreateWorkers from './Create';
import Modifyemp from "./modify"
import { useEffect, useState } from "react";
//import App from "./App";

// export default function App(){
// const navigate = {useNavigate}
// const[empData, setempData] = useState("");
// useEffect(()=> {
// const {details} = require("./data");
// setempData (details)
// },[])
// }

const Routing = () => {
      const navigate = useNavigate();
      const[empData, setempData] = useState([""]);
useEffect(()=> {
const {details} = require("./data");
setempData (details)
},[]);
const remove = (id) => {
    const removed = empData.filter((item)=> item.empId !== id)
    setempData(removed);
};
const build = (data) => {
    empData.push(data);
    setempData(empData);
};
const modify = (id, data) => {
    const details = empData.map((item) => {
      if (item.empId === id) {
        item.employeeName = data.employeeName;
        item.empRole = data.empRole;
        item.doj = data.doj;
      }
      return item;
    });
    setempData(details);
    navigate("/");
};
return (
         <div className="Routing">
           <Routes>
            <Route exact path = "/" element = {<div><Crud 
            empData={empData}
            remove={remove}
            modify={modify}
               /></div>} />
             <Route exact path = "/Create" element = {<CreateWorkers empData={empData} build={build}/>}/>
             <Route exact path = "/Update/:id" element = {<Modifyemp empData={empData} modify={modify}/>}/>
            </Routes>
        </div>
      );
    };
    export default Routing
    
    
    