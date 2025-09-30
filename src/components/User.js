import { useState } from "react";

const User = (props) => {
    const [count] = useState(0);
    return (
        <div className="user-about">
            <h1>Count: {count}</h1>
            <h1>Name: {props.name}</h1>
            <h2>UserName: Istakhara21</h2>
            <h4>Contact: @Helloworld</h4>
        </div>
    )
}

export default User;