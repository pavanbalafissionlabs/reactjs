import React, { Component } from "react";
import UpdateComponent from "./Withcounter";

class HoverCounter extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       count: 0,
  //     };
  //   }

  //   incrementCount = () => {
  //     this.setState((prevstate) => {
  //       return { count: prevstate.count + 1 };
  //     });
  //   };

  render() {
    const { count, increment } = this.props;
    //     const { count } = this.state;
    //     if (count === 5) {
    //       alert("count reached to 10");
    //       // prompt("you have won the bidding ");

    return (
      <div>
        <h2 onMouseOver={increment}>Hovered {count}times</h2>
      </div>
    );
  }
}

export default UpdateComponent(HoverCounter);
