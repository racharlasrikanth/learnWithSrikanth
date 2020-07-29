import React from "react";
import "./signup.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
    };
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleFirstname = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  };

  handleLastname = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };

  handleUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleConfirmPassword = (event) => {
    this.setState({
      confirmPassword: event.target.value,
    });
  };

  handleGenderChange = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  // checkValidDetails = (event) => {
  //   {
  //     this.state.password === this.state.confirmPassword
  //       ? ""
  //       : alert("Invalid");
  //   }
  // };

  handleSubmitButton = (event) => {
    alert(
      `Your first-name: ${this.state.firstname} Your lastname: ${this.state.lastname} Your Gmail: ${this.state.email} Your Password: ${this.state.password} Your Gender: ${this.state.gender}`
    );
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form
          // onSubmit={this.checkValidDetails}
          onSubmit={this.handleSubmitButton}
        >
          <div className="full-signup">
            <div className="signup-heading">Create a new account</div>
            <div className="quick">It's quick and easy.</div>
            <div className="sign-up-map">
              <input
                ref={this.inputRef}
                className="first-name"
                type="text"
                value={this.state.firstname}
                onChange={this.handleFirstname}
                placeholder="First name"
                required
              />
              <input
                className="last-name"
                type="text"
                value={this.state.lastname}
                onChange={this.handleLastname}
                placeholder="Last name"
                required
              />
            </div>

            <div>
              <input
                className="use-name"
                type="text"
                value={this.state.username}
                onChange={this.handleUsername}
                placeholder="Username"
                required
              />
            </div>

            <div>
              <input
                className="gmail"
                type="email"
                value={this.state.email}
                onChange={this.handleEmail}
                placeholder="Mobile number or email address"
                required
              />
            </div>

            <div>
              <input
                className="pass-word"
                type="password"
                value={this.state.password}
                onChange={this.handlePassword}
                placeholder="New Password"
                required
              />
            </div>

            <div>
              <input
                className="conf-pass-word"
                type="password"
                value={this.state.confirmPassword}
                onChange={this.handleConfirmPassword}
                placeholder="Confirm New Password"
                required
              />
            </div>
            <div>
              <h3 className="gender-heading">Gender</h3>
              <ul className="gender">
                <li>
                  <label className="radio-display">
                    <input
                      type="radio"
                      value="male"
                      checked={true}
                      checked={this.state.gender === "male"}
                      onChange={this.handleGenderChange}
                    />
                    Male
                  </label>
                </li>

                <li>
                  <label className="radio-display">
                    <input
                      type="radio"
                      value="female"
                      checked={this.state.gender === "female"}
                      onChange={this.handleGenderChange}
                    />
                    Female
                  </label>
                </li>

                <li>
                  <label className="radio-display">
                    <input
                      type="radio"
                      value="other"
                      checked={this.state.gender === "other"}
                      onChange={this.handleGenderChange}
                    />
                    Other
                  </label>
                </li>
              </ul>
            </div>
            <div>
              <div className="agree">
                By clicking Sign Up, you agree to our Terms, Data Policy and
                Cookie Policy. You may receive SMS notifications from us and can
                opt out at any time.
              </div>
            </div>
            <div>
              <button className="button-signup" type="submit">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
