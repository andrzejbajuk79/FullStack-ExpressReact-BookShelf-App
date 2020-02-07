import { USER_LOGIN } from "../constants/contants";

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
 switch (action.type) {
  case USER_LOGIN:
   return { ...state, login: action.payload };
  default:
   return state;
 }
}
