import { useEffect } from "react";

const Profile = (props) => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Unmounted");
    };
  }, []);

  return (
    <div>
      <h1>Profile Component</h1>
      <h3>Name: {props.name}</h3>
    </div>
  );
};

export default Profile;
