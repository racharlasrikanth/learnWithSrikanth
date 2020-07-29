import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <h1>Welcome to LearnWithSrikanth</h1>
        <p>
          By using this website you can learn AWS, Devops, Java, Python, Linux,
          ShellScripting, HTML, CSS, Bootstrap, JavaScript, DOM, ReactJs
        </p>
        <button className="button-left">Get Started</button>
        <Link to="/signup">
          <button className="button-right" onClick={this.handleRegister}>
            Register
          </button>
        </Link>
      </div>
    );
  }
}

export default Home;
