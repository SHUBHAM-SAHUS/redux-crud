import React from 'react'
import {useSelector} from "react-redux";
import { Cont } from './Cont';


const Contact = () => {

const contacts = useSelector(state=>state.contactreducer. contact);
console.log(contacts);
    return (
           <>
          <div>
          <table className="table table-striped ">
  <thead>
    <tr>
      <th scope="col">
      <div className="custom-control custom-checkbox">
        <input  type="checkbox"  className="custom-control-input" />
         <label className="custom-control-label"> </label>
        </div>
      
      </th>
      <th scope="col">Name</th>
      <th scope="col">phone</th>
      <th scope="col">email</th>
      <th scope="col">action</th>
    
    </tr>
  </thead>
  <tbody>
  {
    contacts.map(val=>(
   
      <Cont val={val} key={val.id}/>

    ))
  }

 

  </tbody>
</table>
               
         </div>    

          </>        

    )
}

export default Contact
