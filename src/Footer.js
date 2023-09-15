import React from "react";
import {useNavigate} from 'react-router-dom';
import Keerthana from "./Keerthana.png";
import linkedin from "./linkedin.png";
import github from "./git.png";
import "./home";
import "./abouth";
import "./skills";
import "./contacth";
import "./portfoli.css"


const Footer = () => {
    const navigate = useNavigate();

    return(
        <div>
            <center>
            <img src ={Keerthana} width = "200 "alt = "K"/><br></br>
        
    <div className = "portfoli">
        
        <button onClick = {()=>{navigate("/home")}}>Home</button>
        <button onClick = {()=>{navigate("/abouth")}}>About</button>
        <button onClick = {()=>{navigate("/skill")}}>Skills</button>
        <button onClick = {()=>{navigate("/contacth")}}>Contact</button>
  <br></br>
        <a href = "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"><img src = {linkedin} width ="40" /></a>
        <a href = "https://github.com/Keerthanabas/welcome-react.git">                     <img src = {github} width = "40"  /></a>
    </div>
        
        </center>

    </div>
    
    
    );

};
export default Footer;