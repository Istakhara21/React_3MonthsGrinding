import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor");

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }
  async componentDidMount() {
    console.log("Comp Did Mount?");
    //API Call
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update")
  }
  render() {
    console.log("render");
    const {name, location} = this.state.userInfo;
    // debugger;
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



/**
 * --- Mounting ---
 * Constructor <Dummy>
 * render <Dummy>
 *        <HTML Dummy>
 * Component Did Mount
 *        <API call>
 *        <this.setSate>
 * 
 * 
 * --- Update ---
 * render(API Data)
 * <HTML(New API Data)
 * Component Did Mount
 */