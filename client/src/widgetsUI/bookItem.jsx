import React from 'react';
import { Link } from 'react-router-dom';


const BookItem = (item) => {
 return (
  <Link to={`/books/${item._id}`} className='book_item'>
   <div className='book_header'>
    <h3>{item.name}</h3>
   </div>
   <div className='book_items'>
    <div className='book_author'>{item.author}
    </div>
   </div>
   <div className='book_bubble'>
    <strong>Cena</strong> ${item.price}
   </div>
   <div className='book_bubble'>
    <strong>Strony</strong> ${item.pages}
   </div>
   <div className='book_bubble rating'>
    <strong>Ranking</strong> ${item.rating}
   </div>


  </Link>
 )
}

export default BookItem;