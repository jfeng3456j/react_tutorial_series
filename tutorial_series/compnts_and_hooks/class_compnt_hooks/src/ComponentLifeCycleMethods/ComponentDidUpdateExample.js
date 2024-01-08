import React from "react";

class ComponentDidUpdateExample extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  // This method will be called when the "Increment" button is clicked
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // ComponentDidUpdate is called after the component updates
  componentDidUpdate(prevProps, prevState) {
    // Access pre props and state here
    console.log("Component started");
    console.log("previous state: ", prevState);
    console.log("Current state:", this.state);
  }

  render() {
    return (
      <div className="Container">
        <div className="Body">
          <h1> Counter </h1>
          <p>Count: {this.state.count}</p>
          <button onClick={this.handleIncrement}>Increment</button>
        </div>
      </div>
    );
  }
}

export default ComponentDidUpdateExample;
