import { combineReducers } from 'redux';
import books from './reducers/booksReducer';
import users from './reducers/userReducer'


const rootReducer = combineReducers({
books,
users
})

export default rootReducer;