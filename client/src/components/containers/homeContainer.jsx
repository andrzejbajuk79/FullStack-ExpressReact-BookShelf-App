import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../redux/actions/action';
import BookItem from '../../widgetsUI/bookItem';


class HomeContainer extends Component {
 componentDidMount() {
  this.props.dispatch(getBooks(1, 0, 'desc'))
 }
 renderItems = (books) => (
  books.list ? books.list.map(item => (
   <BookItem  {...item} key={item._id} />
  ))
   : null
 )
 loadmore = () => {
  let count= this.props.books.list.length;
  //count to tyle ile ma parametr skip czyli dlugosc obecnej listy
  this.props.dispatch(getBooks(1,count, 'desc',this.props.books.list))
 }


 render() {
  return (
   <div>
    {this.renderItems(this.props.books)}
    <div className='loadmore'
     onClick={this.loadmore}>Pokaż więcej</div>
   </div>
  )
 }
}

const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps)(HomeContainer);