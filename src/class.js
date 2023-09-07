import React from 'react';

class ClickButton extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            touch : 2
        };
    }
    render() {
        return (
            <div className = "App">
            <div>
                touch {this.state.touch}
            </div>
                <button onClick ={() => this.setState({touch :this.state.touch * 2})}>press *</button>
                <button onClick ={() => this.setState({touch :this.state.touch / 2})}>press /</button>
            </div>
            
        )
    }

}
export default ClickButton;