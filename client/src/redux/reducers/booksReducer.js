import {
 GET_BOOKS,
 GET_BOOK_W_REVIEWER,
 CLEAR_BOOK_W_REVIEWER
} from "./../constants/contants";

const INITIAL_STATE = {};
export default function(state = INITIAL_STATE, action) {
 switch (action.type) {
  case GET_BOOKS:
   return { ...state.books, list: action.payload };
  case GET_BOOK_W_REVIEWER:
   return {
    ...state,
    book: action.payload.book,
    reviewer: action.payload.reviewer
   };
  case CLEAR_BOOK_W_REVIEWER:
   return {
    ...state,
    book: action.payload.book,
    reviewer: action.payload.reviewer
   };

  default:
   return state;
 }
}
