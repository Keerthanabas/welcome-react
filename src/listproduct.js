import React, {useEffect} from "react";
import axios from "axios";

const ListTitle = () =>{
    useEffect (()=>{
        axios
        .get ("https://jsonplaceholder.typicode.com/todos")
        .then ((res)=>{ 
            console.log(res, "res");
            console.log(res.data,"Title");
        })
        .catch((err)=>{
            console.log((err,"error"));
        });
        },[])
        return <> ListTitle </>;

};
export default ListTitle