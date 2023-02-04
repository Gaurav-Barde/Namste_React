import { Component } from "react";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        avatar_url: "",
        location: "Dummy Location",
      },
    };
    console.log("Constructor" + this.props.name);
  }

  async componentDidMount() {
    const data = await fetch(" https://api.github.com/users/gaurav-barde");
    const json = await data?.json();
    console.log(json, "Child");
    this.setState({
      userInfo: json,
    });
    console.log("Component Did Mount " + this.props.name);
    this.interval = setInterval(() => {
      console.log("Set Time Out");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Comp DId Update", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("Unmount");
    clearInterval(this.interval);
  }

  render = () => {
    console.log("Render" + this.props.name);

    return (
      <div>
        <h1>Profile Class Base Component</h1>
        <h3>Name: {this.state.userInfo.name}</h3>
        <img src={this.state.userInfo.avatar_url} />
        <h3>Location: {this.state.userInfo.location}</h3>
        <h4>{this.props.name}</h4>
      </div>
    );
  };
}

export default Profile;
