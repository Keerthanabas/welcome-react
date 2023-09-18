import React from 'react';
import {useNavigate} from 'react-router-dom';
import Keerthana from "./Keerthana.png";
import "./home";
import "./abouth";
import "./skills";
import "./contacth";
import "./portfoli.css"


const Header = () => {
    const navigate = useNavigate();

    return (
        
        <div className = "Header">
          
          
        <img src ={Keerthana} width = "100 "alt = "K" />
  
        <div>
           
            <div className = "Portfoli">
            <center > 
            <button onClick = {()=>{navigate("/home")}}>Home</button>
            <button onClick = {()=>{navigate("/abouth")}}>About</button>
            <button onClick = {()=>{navigate("/skills")}}>Skills</button>
            <button onClick = {()=>{navigate("/contacth")}}>Contact</button>
        
            </center>
        </div>
        </div>
        
        
        </div>

   );

;}
export default Header;