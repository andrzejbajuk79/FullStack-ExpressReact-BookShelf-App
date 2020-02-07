import { combineReducers } from "redux";
import books from "./reducers/booksReducer";
import user from "./reducers/userReducer";

const rootReducer = combineReducers({
 books,
 user
});

export default rootReducer;
