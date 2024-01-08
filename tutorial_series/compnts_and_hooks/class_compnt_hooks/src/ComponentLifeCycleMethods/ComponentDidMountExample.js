import React from "react";

class ComponentDidMountExample extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    // This is where to perform initial set up

    // Below example is to simulate fetching data from an API after component has mounted
    setTimeout(() => {
      const fetchData = "This data was fetched after mounting";
      this.setState({
        data: fetchData,
      });
    }, 2000);
  }

  render() {
    return (
      <div class="Container">
        <div className="Body">
          <h1>ComponentDidMount Example</h1>
          {this.state.data ? (
            <p>Data: {this.state.data}</p>
          ) : (
            <p>Loading data ...</p>
          )}
        </div>
      </div>
    );
  }
}

export default ComponentDidMountExample;
