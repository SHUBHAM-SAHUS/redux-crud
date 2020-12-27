import React from "react";
import Avatar from 'react-avatar';
import {GrEdit} from "react-icons/gr";
import{AiFillDelete} from "react-icons/ai";

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
        <td> <Avatar name={name} size="45px" round={true}/> {val.name} </td>
        <td>{val.phone}</td>
        <td>{val.email}</td>
         <td className="action">  
          <GrEdit className="text-primary font-weight-bold"/>
          <AiFillDelete className="ml-3 text-danger font-weight-bold"/>

         </td>
      </tr>
    </>
  );
};
