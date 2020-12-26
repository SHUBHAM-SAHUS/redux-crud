import React from "react";
import Avatar from 'react-avatar'

export const Cont = ({ val }) => {
  const { name, phone, email } = val;
  return (
    <>
      <tr>
        <td scope="row">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" />
            <label className="custom-control-label"> </label>
          </div>
        </td>
        <td> <Avatar size="45px" round={true}/> {val.name} </td>
        <td>{val.phone}</td>
        <td>{val.email}</td>
      </tr>
    </>
  );
};
