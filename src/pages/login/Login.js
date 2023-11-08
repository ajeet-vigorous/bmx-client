import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions } from "../../_actions";

import "./Login.css";

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
      isFetching: true,
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
        isClient: true,
      };
      if (this.state.isFetching) {
        this.setState({ isFetching: false })
        this.props.dispatch(userActions.login(data, this.props));
        setTimeout(() => this.setState({ isFetching: true }), 5000);
      }
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

      <div className="container-fluid" >
        <div className="row">
          <div className="col-xl-12 col-lg-12 items-center loginBackground new-login-content" >
            <div className="col-lg-6 col-xs-12 p-0" >
              <img className="img-responsive" src="https:bmxpro.in/static/media/poplogin1609.320f8bee.png" width={100} alt='logo' />
            </div>
            <div className="col-lg-1 col-xs-1">
            </div>
            <div className="col-lg-4 col-xs-12">
              <div className="Absolute-Center is-Responsive">
                <div className="col-lg-12">
                  <h4 style={{ fontWeight: 900, padding: '17px', color: 'rgb(255, 255, 255)', textAlign: 'center', fontSize: '18px' }}>Please Login To Continue</h4>
                </div>
                <div className="col-lg-12 col-md-12">
                  <form className="" onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input className={`py-2.5 px-2 text-xl text-gray-700 placeholder:text-gray-500 ${this.state.errorslogin && this.state.errorslogin["username"] ? "border-red-500 border" : "border-b-2 border-gray-300 focus:border-[#5c5696]"} focus:outline-none bg-transparent`} placeholder="Enter User Id..." onChange={this.inputChange} type="username" name="username" id="username"
                        value={this.state.fieldslogin.username} required />


                    </div>
                    <div className="form-group">
                      <input className={`py-2.5 px-2 text-xl text-gray-700 placeholder:text-gray-500 ${this.state.errorslogin && this.state.errorslogin["password"] ? "border-red-500 border" : "border-b-2 border-gray-300 focus:border-[#5c5696]"} focus:outline-none bg-transparent`} placeholder="Password" onChange={this.inputChange} type="password" name="password" id="password"
                        value={this.state.fieldslogin.password} required />

                    </div>
                    <div className="form-group input-group" style={{ display: 'table', width: '100%' }}>

                      <button onClick={this.loginSubmit} className="btn btn-def btn-block" style={{ background: 'linear-gradient(-180deg, rgb(49, 81, 149) 0%, rgb(20, 33, 61) 100%)', color: 'rgb(255, 255, 255)', fontWeight: 'bold', fontSize: '14px', padding: '8px' }}>Login</button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-xs-1 hidden-xs"></div>
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
