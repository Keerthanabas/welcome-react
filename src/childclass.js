import React from "react";

class ChildClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props, "this.props");
    let { value, updateValue } = this.props;
    return (
      <>
        amount {value}
        <button onClick={() => updateValue(value * 6)}> click * </button>
        <button onClick={() => updateValue(value / 6)}> click / </button>
      </>
    );
  }
}

export default ChildClass;
