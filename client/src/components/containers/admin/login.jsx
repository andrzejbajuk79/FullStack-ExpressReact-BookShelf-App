import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../../redux/actions/action";

class Login extends Component {
 state = {
  email: "",
  password: "",
  error: "",
  success: ""
 };
 componentWillReceiveProps(nextProps) {
  if (nextProps.user.login.isAuth) {
   this.props.history.push("/user");
  }
 }
 submitForm = e => {
  e.preventDefault();
  this.props.dispatch(loginUser(this.state));
 };

 handleChange = event => {
  const { value, name } = event.target;
  this.setState({ [name]: value });
 };
 render() {
  const { user } = this.props;
  return (
   <div className="rl_container">
    <form onSubmit={this.submitForm}>
     <h2>Log In here</h2>
     <div className="form_element">
      <input
       name="email"
       onChange={this.handleChange}
       value={this.state.email}
       type="email"
       placeholder="twój email"
      />
     </div>
     <div className="form_element">
      <input
       name="password"
       onChange={this.handleChange}
       value={this.state.password}
       type="password"
       placeholder="hasło"
      />
     </div>
     <button type="submit">Zaloguj się</button>
     {user.login && <div className="error"> {user.login.message}</div>}
    </form>
   </div>
  );
 }
}

function mapStateToProps(state) {
 console.log(state);

 return {
  user: state.user
 };
}

export default connect(mapStateToProps)(Login);
