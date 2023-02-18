import { createContext } from "react";

const UserContext = createContext({
  user: { name: "Gaurav", email: "gauravbarde@gmail.com" },
});

UserContext.displayName = "UserContext";

export default UserContext;
