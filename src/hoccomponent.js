import React from 'react';
import Header from './Header';
import Footer from './Footer';


const HOC = (props) => {
    const { childElement } = props;
    return (
      <div>
        <Header/>
        <div> {childElement} </div> <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer/>
      </div>
    );
  };
  
  export default HOC;