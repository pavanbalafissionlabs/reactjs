import React, { Component } from "react";
import UpdateComponent from "./Withcounter";
class Clickcounter extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       count: 0,
  //     };
  //   }

  //   increment = () => {
  //     this.setState((prevstate) => {
  //       return { count: prevstate.count + 1 };
  //     });
  //   };
  render() {
    const { count, increment } = this.props;
    return <button onClick={increment}>Clicked {count}times</button>;
  }
}

export default UpdateComponent(Clickcounter);
