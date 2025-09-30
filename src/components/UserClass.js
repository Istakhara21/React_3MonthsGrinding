import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div className="user-about">
        <h1>
          Count: {count}{" "}
          <button
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          ></button>
        </h1>

        <h1>Name: {name}</h1>
        <h2>UserName: Istakhara21</h2>
        <h4>Contact: @Helloworld</h4>
      </div>
    );
  }
}

export default UserClass;
