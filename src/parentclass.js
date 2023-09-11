import React from "react";
import Childclass from "./childclass.js";

class ParentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 6
    };
  }
  render() {
    return (
      <div className = "App">
        <div>
          <Childclass
            value={this.state.amount}
            updateValue={(value) =>this.setState({amount: value})}
            />
            
        </div>
        </div>
    );
  }
}

export default ParentClass;