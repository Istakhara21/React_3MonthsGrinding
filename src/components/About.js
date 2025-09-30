import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
   constructor() {
      super() 
      // console.log("Parent Constructor")
   }

   componentDidMount() {
      // console.log("Parent Did Mount")
   }
  render() {
   // console.log("Parent Render")
    return (
      <>
        <h1>ABOUT US</h1>
        <h2>This is a Food Ordering App </h2>
        {/* <User name =  {"My name is Reehan"} /> // parent */}
        <UserClass name={"First Child"} />
        <UserClass name={"Second Child"} />
        <UserClass name={"Third Child"} />


      </>
    );
  }
}

export default About;
