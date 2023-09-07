import React from 'react'
import './App.css';



class PersonNum extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
          persons : person,num
        };
    }
      render(){
        let person = ["keerthana","anu","aarthi"]
        let num = ["1","2","3"]
        
        return (
            <div className = "App">
            <p>
            This is the persons name list

            <div>
           PersonNum {this.state.persons}
           </div>
           <div>
            <button onClick = {()=>this.setState({person :this.state.persons })}>person </button>
            <button onClick = {()=>this.setState({num :this.state.num })}>num</button>
           </div>
            </p>
            </div>
        )
      }
}
export default PersonNum;