import * as ACTION_TYPES from "../actions/action_types";

const initState = {
  stateprop1: false
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SUCCESS:
      return { ...state, stateprop1: true };
    case ACTION_TYPES.FAILURE:
      return {
        ...state,
        stateprop1: false
      };
    default:
      return state;
  }
};

export default rootReducer;
