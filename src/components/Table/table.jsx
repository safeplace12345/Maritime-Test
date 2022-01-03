import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Status from "../Status/status";
import Type from "../Type/type";
import "./table.css"

function Table(props) {
  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col" className="text-center">
            Type
          </th>
          <th scope="col" className="text-center">
            Name
          </th>
          <th scope="col" className="text-center">
            Email
          </th>
          <th scope="col" className="text-center">
            Telephone
          </th>
          <th scope="col" className="text-center">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {props.users &&
          props.users.map((user) => {
            return (
              <tr key={user.id}>
                <th scope="row">
                  <Type userName={user.name} />
                </th>
                <td className="text-center">{user.name}</td>
                <td className="text-center">{user.email}</td>
                <td className="text-center">{user.phone}</td>
                <td className="text-center">
                  <Status UID={user.id} status={user.status ? true : false} />
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

const matchStateToProps = (state) => {
  return {
    ...state,
  };
};
const matchDispatchToProps = (dispatch) => {
  return {
    updateStatus: () => {
      dispatch({ type: "UPDATE" });
    },
  };
};
export default connect(matchStateToProps, matchDispatchToProps)(Table);
