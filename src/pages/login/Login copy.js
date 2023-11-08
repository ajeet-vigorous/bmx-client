import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions } from "../../_actions";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";

class Login extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(userActions.logout());
    this.loginSubmit = this.loginSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      fieldslogin: {},
      errorslogin: {},
      showMe: false,
      passtype: "password",
    };
  }

  inputChange(e) {
    e.preventDefault();
    let { name, value } = e.target;
    let fieldslogin = this.state.fieldslogin;
    let errorslogin = this.state.errorslogin;
    fieldslogin[name] = value;
    errorslogin[name] = "";
    console.log(name, value);
    this.setState({ fieldslogin, errorslogin });
  }

  loginSubmit(e) {
    // alert("sjhdjkshdjs")
    e.preventDefault();
    if (this.handleValidationLogin()) {
      // console.log("After hello validation");
      let data = {
        username: this.state.fieldslogin.username,
        password: this.state.fieldslogin.password,
        // number: this.state.fieldslogin.number,
      };
      this.props.dispatch(userActions.login(data, this.props));
    }
  }

  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      fieldslogin: {},
      errorslogin: {},
    });
    this.hideErrorMessage();
  };

  handleValidationLogin = () => {
    console.log("hello validation");

    let fieldslogin = this.state.fieldslogin;
    let errorslogin = {};
    let formIsValid = true;

    //User Name
    if (!fieldslogin["username"]) {
      formIsValid = false;
      errorslogin["username"] = "User Name Cannot Be Blank.";
    }
    //password
    if (!fieldslogin["password"]) {
      formIsValid = false;
      errorslogin["password"] = "Password Cannot Be Blank.";
    }

    console.log("errorsloginerrorsloginerrorsloginerrorslogin:::", errorslogin);

    this.setState({ errorslogin: errorslogin });
    return formIsValid;
  };

  show = () => {
    this.setState({ showMe: true, passtype: "text" });
  };
  hide = () => {
    this.setState({ showMe: false, passtype: "password" });
  };

  render() {
    console.log("this.state.errorslogin::::", this.state.errorslogin);

    return (
      <div className="bg-[#2A2A2A] h-screen">
        <div className="flex justify-center items-center h-screen">
          <div className="justify-between items-start w-[300px] md:w-[350px] mx-auto bg-white rounded p-8 space-y-3">
            <div className="flex items-center justify-center">
              <img src='/images/biharlogo.49d3c75d.png' alt='logo' className=' h-[110px] cursor-pointer' />
            </div>
            <div>
              <div className=" w-full flex">
                <div className="bg-[#F7BE27] p-3">
                  <FaUserAlt className="h-4 text-black/70" />
                </div>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={this.state.fieldslogin.username}
                  className="w-full bg-[#DFDFDF] px-2 py-3 focus:outline-none text-sm"
                  placeholder="Username"
                  onChange={this.inputChange}
                />
              </div>
              {this.state.errorslogin &&
                this.state.errorslogin["username"] ? (
                <div className="text-red-500 text-left text-sm">
                  {this.state.errorslogin["username"]}
                </div>
              ) : null}
            </div>

            <div className="w-full">
              <div className="w-full flex">
                <div className="bg-[#F7BE27] p-3">
                  <FaLock className="h-4 text-black/70" />
                </div>
                <input
                  type={this.state.passtype}
                  name="password"
                  id="password"
                  value={this.state.fieldslogin.password}
                  className="w-full bg-[#DFDFDF] px-2 py-3 focus:outline-none text-sm" placeholder="Password"
                  onChange={this.inputChange}
                />
              </div>

              {this.state.errorslogin &&
                this.state.errorslogin["password"] ? (
                <div className="text-red-500 text-left text-sm">
                  {this.state.errorslogin["password"]}
                </div>
              ) : null}
              <button type="button" onClick={this.loginSubmit} className="flex justify-center items-center mt-[2px] py-2 bg-[#F7BE27] text-black font-semibold rounded text-lg w-full uppercase space-x-1">
                <span className="tracking-wider">Log in</span>
                <BiLogIn />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { loggingIn, user, otpSent } = state.authentication;
  const { users } = state;
  return {
    loggingIn,
    otpSent,
    user,
    users,
  };
}
export default connect(mapStateToProps)(Login);
