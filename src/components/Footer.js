import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

function Footer() {
  const { user } = useContext(UserContext);
  return (
    <div className="p-4 m-4">
      <h1 className="text-2xl">Footer</h1>
      <h3>Website Developed By: {user.name}</h3>
    </div>
  );
}

export default Footer;
