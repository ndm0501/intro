import * as ACTION_TYPES from "../actions/action_types";

const initState = {
  is_authenticated: false
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        is_authenticated: true
      };
    case ACTION_TYPES.LOGIN_FAILURE:
      return {
        ...state,
        is_authenticated: false
      };
    default:
      return state;
  }
};
export default authReducer;
