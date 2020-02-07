import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from "../../redux/actions/action";

export default function(ComposedClass, reload) {
 class AuthenthicationCheck extends Component {
  state = {
   loading: true
  };
  componentDidMount() {
   this.props.dispatch(auth());
  }
  componentWillReceiveProps(nextProps) {
   this.setState({ loading: false });
   //3 scenariuesze
   //1 user jest uwierzytelniony LUB NIE  i route toHome =zawsze pokzujemy Z roznymi info
   //2. user jest uwierzytelniony i route = NiePokazujemy
   //2. user jest uwierzytelniony i route = Pokazujemy
   if (!nextProps.user.login.isAuth) {
    if (reload === true) this.props.history.push("/login"); //true,False  pochodza z routes.js
   } else {
    if (reload === false) this.props.history.push("/user");
   }
  }
  render() {
   if (this.state.loading) {
    return <div className="loader">Loading...</div>;
   }
   return <ComposedClass {...this.props} user={this.props.user} />;
  }
 }

 function mapStateToProps(state) {
  return {
   user: state.user
  };
 }
 return connect(mapStateToProps)(AuthenthicationCheck);
}
