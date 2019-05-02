import * as actions from "./actions";
import Immutable from "immutable";
import { checkUserSession, deleteUserSession } from "../../helpers/authentication.helper"; // const initialState = Immutable.fromJS({
//   loading: false,
//   data: {},
//   isLoggedin: false,
//   isMenuOpen: false,
//   isMenuClose: false,
//   date: new Date()
// });

const initialState = {
  loading: false,
  data: {},
  isLoggedin: false,
  isMenuOpen: false,
  isMenuClose: false,
  date: new Date()
}; // const startLoading = (state, action) => {
//   state.set("isLoggedin", false);
//   state.set("isMenuOpen", false);
//   state.set("isMenuClose", true);
//   state.set("loading", false);
//   return state;
// };
// const loginResponse = (state, action) => {
//   const isLoggedin = checkUserSession();
//   // debugger;
//   // state.set("isLoggedin", isLoggedin);
//   // state.set("date", new Date());
//   // state.set("isMenuOpen", true);
//   // state.set("isMenuClose", false);
//   // state.set("loading", false);
//   const newState = { ...state };
//   return newState;
// };

const loginResponse = (state, action) => {
  state = state.isLoggedin = true;
  return state; // return { ...state, isLoggedin: true };
};

const startLoading = (state, action) => {
  state = state.isLoggedin = false;
  return state; // return { ...state, isLoggedin: false };
}; // const logout = (state, action) => {
//   deleteUserSession();
//   state.set("isLoggedin", false);
//   state.set("isMenuOpen", false);
//   state.set("isMenuClose", true);
//   state.set("loading", false);
//   return state;
// };


const handlers = {
  [actions.LOGIN_REQUEST]: startLoading,
  [actions.LOGIN_SUCCESS]: loginResponse // [actions.LOGOUT]: logout

};
export default ((state = initialState, action) => {
  debugger;
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
});