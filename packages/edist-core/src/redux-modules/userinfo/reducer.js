import * as actions from "./actions";
import Immutable from "immutable";
const initialState = Immutable.fromJS({
  loading: false,
  data: {}
});

const startLoading = (state, action) => {
  return state.set("loading", true);
};

const loginResponse = (state, action) => {
  return state.set("loading", false);
};

const handlers = {
  [actions.LOGIN_REQUEST]: startLoading,
  [actions.LOGIN_SUCCESS]: loginResponse
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
