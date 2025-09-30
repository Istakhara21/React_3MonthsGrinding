import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + "Child Constructor");

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }
  async componentDidMount() {
    // console.log(this.props.name + "Child Comp Did Mount?");
    //API Call
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
  }
  render() {
    const {name, location} = this.state.userInfo;
    return (
      <div className="user-about">
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h2>UserName: Istakhara21</h2>
        <h4>Contact: @Helloworld</h4>
      </div>
    );
  }
}

export default UserClass;
