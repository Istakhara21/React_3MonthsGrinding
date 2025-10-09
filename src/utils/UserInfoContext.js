import { createContext } from "react";

const UserInfoContext = createContext({
    loggedInUser: "Default User",
})

export default UserInfoContext;