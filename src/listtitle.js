import React, {useEffect, useState} from "react";
import axios from "axios";

const ListId = () => {
    const[Id,setId]=useState([]);
    useEffect (() => {
        axios
        .get ("https://jsonplaceholder.typicode.com/todos")
        .then ((res) =>{
            setId(res.data,"Title")
        })
        .catch ((err) =>{
            console.log(err, "error");
        });
      },[]);
      console.log(Id, "id");
    return(
    <>
    ListId 
    <table>
       <thead>
         <tr>
           <th>ID</th> 
           <th>Title</th>
           <th>completed status</th>
         </tr>
         </thead>
         <tbody>
            {Id.map((item,key) =>{
                
                return(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.completed ? "TRUE": "FALSE"}</td>
                    </tr>
                )
              })}
         </tbody>
    </table>
    </>

    );
};
export default ListId;