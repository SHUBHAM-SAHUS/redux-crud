import React from 'react'
import {NavLink} from "react-router-dom";

 const Header=()=> {
    return (
       <>
     <div className="bg-primary">

      <h5  className="text-light text-capitalize  font-bold text-center hh py-2"> Redux </h5>
         <NavLink to="/detail"> <button className="btn btn-danger"> contact details  </button> </NavLink>
                        
     </div>    

    

        </>
    )
}

export default Header

