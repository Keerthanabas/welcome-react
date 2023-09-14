import React from 'react'
import {useNavigate} from 'react-router-dom';
import "./swiggy.css"
import './App.css';
import "./Routermenu";
import "./Routercontact";
import food from './food.jpg';



const Swiggy = () => {
    const navigate = useNavigate();
    
    return (
       
        
        <div className = "swiggy">
        <center>   
        <h1 ><b>Sai Hotel</b></h1>
        <div>
        <img src = {food} width = "300"  alt = "hotel"/>
        </div>
        <dt><i><b>About Sai Hotel</b></i></dt>
        <dd>Sai hotel vegetarian restaurant chain based out of Coimbatore ... In 1980, a lodging hotel was opened. Currently the sai group has more than 16 restaurants in Coimbatore and in other cities of Tamil Nadu.</dd>
        
        <p>
            <u>If you Want to order please click order button</u>
          <br></br>
        </p>
        <div>  
           
        {/* <a href = "https://www.swiggy.com/"target="_blank"rel="noreferrer">order</a> <br></br> */}
        {/* <a href = "menu.js">Menu</a> <br></br>
        <a href = "contact.js">Contact</a> */}
        <div>
        <button onClick={() => {navigate("/menu")}}>Menu</button>
        <button onClick={() => {navigate("/contact")}}>Contact</button>
        </div>
        </div>
        </center> 
        </div>
       
    )

}
export default Swiggy;