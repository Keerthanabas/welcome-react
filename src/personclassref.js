import React from 'react'
import './App.css';



class PersonNum extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
          persons : "keerthana",num : "1"
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
           PersonNum {this.state.persons} {this.state.num}
           </div>
           <div>
            <button onClick = {()=>this.setState({persons :person[Math.floor(Math.random() * person.length)],num :num[Math.floor(Math.random() * num.length)] })}>person </button>
            <button onClick = {()=>this.setState({num :num[Math.floor(Math.random() * num.length)],persons :person[Math.floor(Math.random() * person.length)]  })}>num</button>
           </div>
            </p>
            </div>
        )
      }
}
export default PersonNum;