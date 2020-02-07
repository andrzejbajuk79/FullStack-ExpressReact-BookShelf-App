import axios from "axios";
import {
 GET_BOOKS,
 USER_LOGIN,
 GET_BOOK_W_REVIEWER,
 CLEAR_BOOK_W_REVIEWER,
 USER_AUTH,
 CLEAR_NEWBOOK,
 ADD_BOOK
} from "./../constants/contants";

/*==================BOOK ============================*/

export function getBooks(limit = 10, start = 0, order = "asc", list = "") {
 const request = axios
  .get(`/api/books?limit=${limit}&skip=${start}&order=${order}`)
  .then(res => {
   if (list) {
    return [...list, ...res.data];
   } else {
    return res.data;
   }
  });
 return {
  type: GET_BOOKS,
  payload: request
 };
}

export function getBookWithReviewer(id) {
 //majac id ksiazki musimy zrobic dwa requesty, jeden z BOOK collections
 //i to bedzie kska a drugi z USER na podstawie ownerID tej ksiazki
 //uzywamy redux THUNK
 const request = axios.get(`/api/getBook?id=${id}`);
 //z request dostajemy promise i dostajemy response.data
 return dispatch => {
  request.then(({ data }) => {
   let book = data; //ksiazka z BOOK collections

   //Thunk monza opoznic wykonanie requestu, i na koncu dopier zrobic
   //dispatch

   axios
    .get(`/api/getReviewer?id=${book.ownerId}`)

    .then(({ data }) => {
     let response = {
      book, //pochodzi z piewrszego requeste
      reviewer: data //pochodzi z drugiego request
     };
     //i robimy dispatch tych dwoch
     dispatch({
      type: GET_BOOK_W_REVIEWER,
      payload: response
     });
    });
  });
 };
}

//czyscimy przy unmouncie state
export function clearBookWithReviewer() {
 return {
  type: CLEAR_BOOK_W_REVIEWER,
  payload: {
   book: {},
   reviewer: {}
  }
 };
}

// addBook, clearNewBook

export function addBook(book) {
 const request = axios.post("/api/book", book).then(response => response.data);
 return {
  type: ADD_BOOK,
  payload: request
 };
}

export function clearNewBook() {
 return {
  type: CLEAR_NEWBOOK,
  payload: ""
 };
}
/*================== USER============================*/

export function loginUser({ email, password }) {
 const request = axios
  .post("api/login", { email, password })
  .then(response => response.data);
 return {
  type: USER_LOGIN,
  payload: request
 };
}

export function auth() {
 const request = axios.get("/api/auth").then(response => response.data);

 return {
  type: USER_AUTH,
  payload: request
 };
}
