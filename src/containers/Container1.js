import React from "react";
import * as ACTION_TYPES from "../actions/action_types";
import * as ACTIONS from "../actions/actions";
import Auth from "../utils/auth";
import { connect } from "react-redux";


class Container1 extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.auth.login()}>Login</button>
        <button onClick={() => this.props.action1()}>Dispatch Action 1</button>
        <button onClick={() => this.props.action2()}>Dispatch Action 2</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    stateprop1: state.stateprop1
  };
};
const mapDispatchToProps = dispatch => {
  return {
    action1: () => {
      dispatch(ACTIONS.SUCCESS);
    },
    action2: () => dispatch(ACTIONS.FAILURE)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container1);
