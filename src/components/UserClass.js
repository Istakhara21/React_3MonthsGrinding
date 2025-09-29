import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props.name);
  }
  render() {
    return (
      <div className="user-about">
        <h1>Name: {this.props.name}</h1>
        <h2>UserName: Istakhara21</h2>
        <h4>Contact: @Helloworld</h4>
      </div>
    );
  }
}

export default UserClass;
