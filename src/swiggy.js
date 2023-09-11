import React from 'react'
import "./swiggy.css"
import './App.css';
import "./menu";
import "./contact";
import "./styles.css";

const Swiggy = () => {
    return (
        
        
        <div className = "App" >
            
        <h1><b>Sai Hotel</b></h1>
        <dt><i><b>About Sai Hotel</b></i></dt>
        <dd>Sai hotel vegetarian restaurant chain based out of Coimbatore ... In 1980, a lodging hotel was opened. Currently the sai group has more than 16 restaurants in Coimbatore and in other cities of Tamil Nadu.</dd>
        
        <p>
            <u>If you Want to order please click order button</u>
          <br></br>
          <div className = "styles">  
        <a href = "https://www.swiggy.com/"target="_blank"rel="noreferrer">order</a> <br></br>
        <a href = "menu.js">Menu</a> <br></br>
        <a href = "contact.js">Contact</a>
        </div>
        </p>
        </div>
        
        
    )

}
export default Swiggy;