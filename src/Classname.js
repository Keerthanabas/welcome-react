import React from 'react';
import './App.css';

class ClassName extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            percentage : 10
        };
    }
    render (){
        return (
            <div className = "App">+
            <p>
                This is the percentage
            
            <div>
                Percentage {this.state.percentage}%
            </div>
            <div>
            <button onClick={() => this.setState({percentage :this.state.percentage + 1})}>+</button>
            <button onClick={() => this.setState({percentage :this.state.percentage - 1})}>-</button>

        </div>
        </p>
        </div>
        )
    }
}

export default ClassName;