import React, { Component } from "react";
import { getBookWithReviewer } from "../../redux/actions/action";
import { connect } from "react-redux";

class BookView extends Component {
 componentDidMount() {
  this.props.dispatch(getBookWithReviewer);
 }
 render() {
  console.log("test");
  return <div>book view</div>;
 }
}


function mapStateToProps(state) {
 return {
  books: state.books
 };
}

export default connect(mapStateToProps)(BookView);
