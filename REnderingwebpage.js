import React, { Component } from "react";

class REnderingwebpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: true,
      username: "",
      password: "",
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log("button clicked");
    this.setState({
      isLogged: true,
    });
  };

  handleUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleLogout = (event) => {
    this.setState({
      username: "",
      password: "",
      isLogged: false,
    });
  };

  render() {
    const output = this.state.isLogged ? (
      <div>
        "The user {this.state.username} is logged in" <br />{" "}
        <button onClick={this.handleLogout}>Log Out</button>
      </div>
    ) : (
      "please log in"
    );
    return (
      <div>
        <h1>Please Fill the Form</h1>
        <form onSubmit={this.submitHandler}>
          <label>Username:</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsername}
          />{" "}
          <br />
          <label>Password: </label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePassword}
          />{" "}
          <br />
          <button>Log In</button>
        </form>

        {output}
      </div>
    );
  }
}

export default REnderingwebpage;
