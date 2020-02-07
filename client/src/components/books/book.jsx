import React, { Component } from "react";
import {
 getBookWithReviewer,
 clearBookWithReviewer
} from "../../redux/actions/action";
import { connect } from "react-redux";
import SingleBook from "./singleBook";

class BookView extends Component {
 componentDidMount() {
  this.props.dispatch(getBookWithReviewer(this.props.match.params.id));
 }
 componentWillUnmount() {
  this.props.dispatch(clearBookWithReviewer());
 }
 renderBook = books => (books.book ? <SingleBook books={books} /> : null);

 render() {
  let { books } = this.props;
  return (
   <div>
    <h2>test</h2>
    {this.renderBook(books)}
   </div>
  );
 }
}

function mapStateToProps(state) {
 return {
  books: state.books
 };
}

export default connect(mapStateToProps)(BookView);
