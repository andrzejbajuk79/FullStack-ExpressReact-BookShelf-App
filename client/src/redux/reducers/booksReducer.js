
import { GET_BOOKS } from './../constants/contants';

const INITIAL_STATE = {
	books: null
};
export default function(state=INITIAL_STATE,action){
 switch(action.type){
  case GET_BOOKS:
   return {...state.books,list:action.payload}
default:
   return state;
 }
}
