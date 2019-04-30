import * as actions from "./actions";
import Immutable from "immutable";
const initialState = Immutable.fromJS({
  loading: false,
  data: {}
});

const startLoading = (state, action) => {
  // return { ...state, loading: true };
  return state.set("loading", true);
};

const loginResponse = (state, action) => {
  // return { ...state, loading: false };
  return state.set("loading", false);
};

const handlers = {
  [actions.LOGIN_REQUEST]: startLoading,
  [actions.LOGIN_SUCCESS]: loginResponse
};
export default ((state = initialState, action) => {
  debugger;
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
}); // import * as actions from "./actions";
// export function LoginReducer(state = {}, action) {
//   debugger;
//   switch (action.type) {
//     case actions.LOGIN_REQUEST:
//       return {
//         ...state,
//         loading: true
//       };
//     case actions.LOGIN_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         tasks: action.result
//       };
//     default:
//       return state;
//   }
// }