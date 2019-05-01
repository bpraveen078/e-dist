import * as actions from "./actions";
import Immutable from "immutable";
import {
  checkUserSession,
  deleteUserSession
} from "../../helpers/authentication.helper";
const initialState = Immutable.fromJS({
  loading: false,
  data: {},
  isLoggedin: checkUserSession(),
  isMenuOpen: false,
  isMenuClose: false
});

const startLoading = (state, action) => {
  return state.set("loading", true);
};

const loginResponse = (state, action) => {
  state.set("isLoggedin", checkUserSession());
  state.set("isMenuOpen", true);
  state.set("isMenuClose", false);
  state.set("loading", false);
  return state;
};

const logout = (state, action) => {
  deleteUserSession();
  state.set("isLoggedin", false);
  state.set("isMenuOpen", false);
  state.set("isMenuClose", true);
  state.set("loading", false);
  return state;
};

const handlers = {
  [actions.LOGIN_REQUEST]: startLoading,
  [actions.LOGIN_SUCCESS]: loginResponse,
  [actions.LOGOUT]: logout
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
