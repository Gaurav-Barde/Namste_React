import { Component } from "react";
import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import ProfileClassComponent from "./ProfileClass";
import UserContext from "../utils/UserContext";

// const About = () => {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     console.log("Parent Constructor");
//   }

//   componentDidMount() {
//     console.log("Parent Component Did Mount");
//   }

//   render = () => {
//     console.log("Parent Render" );
//   return (
//     <div>
//       <h1>About Us Page</h1>
//       <p>This is Namate React Live Course Chapter 07 - Finding the path 🚀 </p>
//       {/* <ProfileFunctionalComponent name="GauravFunction" /> */}
//       <ProfileClassComponent name="Child1" />
//       <ProfileClassComponent name="Child2" />
//     </div>
//   );
// };

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          This is Namate React Live Course Chapter 07 - Finding the path 🚀{" "}
        </p>
        <UserContext.Consumer>
          {({ user }) => (
            <h1 className="font-semibold text-xl text-green-700">
              {user.email}
            </h1>
          )}
        </UserContext.Consumer>
        {/* <ProfileFunctionalComponent name="GauravFunction" /> */}
        <ProfileClassComponent name="Child1" />
      </div>
    );
  }
}

export default About;
