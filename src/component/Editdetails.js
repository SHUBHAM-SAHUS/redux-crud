import React,{useState} from 'react'
import {useDispatch}  from "react-redux";
import { create_contact } from '../redux/action';
import shortid from "shortid";
import {useHistory} from "react-router-dom";
export const Edit Detail = () => {
     const history =useHistory();
    const [name,setname] =useState("");  
    const [phone,setphone] =useState("");
    const [email,setemail] =useState("");
     const dispatch = useDispatch();
       const handle=(e)=>{
           e.preventDefault();
           const new_contact ={
               id:shortid.generate(),
               name:name,
               email:email,
               phone:phone
           }
           dispatch(create_contact(new_contact));
           history.push("/");

       }

    return (
        <div  className="shadow mt-4">
               <h2 className="text-capitalize"> add contact</h2>   
               <div className="mx-auto w-50 py-4">
               <form onSubmit={handle}>
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
      value={name}
      onChange={(e)=>setname(e.target.value)}
      required="required"
    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
    <input type="text" className="form-control" id="exampleInputPassword1"
     value={phone}
     required="required"
     onChange={(e)=>setphone(e.target.value)}
    />
  </div>
 
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">email</label>
    <input type="email" className="form-control" id="exampleInputPassword1"
    value={email}
    required="required"
    onChange={(e)=>setemail(e.target.value)}
    />
  </div>
 

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

           </div>
            
        </div>
    )
}




