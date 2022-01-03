import React, { Component } from "react";
import activeLogo from "../../assets/images/active.png";
import inactiveLogo from "../../assets/images/inactive.png";
import { connect } from "react-redux";
import user from '../../utils/actions/users'
const Status = (props) => {
  const handleUpdate = () => {
    props.updateStatus(props.UID);
  };
  return props.status ? (
    <img
      src={activeLogo}
      alt="Loading"
      className="status"
      onClick={handleUpdate}
    ></img>
  ) : (
    <img
      src={inactiveLogo}
      className="status"
      onClick={handleUpdate}
      alt="Loading"
    ></img>
  );
};

const matchStateToProps = (state) => {
  return {
    ...state,
  };
};
const matchDispatchToProps = (dispatch) => {
  return {
    updateStatus: (payload) => {
      dispatch({ type: user.UPDATE_USER_STATUS, payload });
    },
  };
};

export default connect(matchStateToProps, matchDispatchToProps)(Status);
