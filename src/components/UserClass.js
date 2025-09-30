import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + "Child Constructor");

    this.state = {
      count: 0,
    };
  }
  async componentDidMount() {
    // console.log(this.props.name + "Child Comp Did Mount?");
    //API Call
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    console.log(json);
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;
    // console.log(this.props.name + "Child Render");
    return (
      <div className="user-about">
        <h1>
          Count: {count}{" "}
          <button
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            Count Inc
          </button>
        </h1>

        <h1>Name: {name}</h1>
        <h2>UserName: Istakhara21</h2>
        <h4>Contact: @Helloworld</h4>
      </div>
    );
  }
}

export default UserClass;
