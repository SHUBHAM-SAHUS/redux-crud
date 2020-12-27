import { CREATE_CONTACT } from "../type";

 
export const create_contact=(contact)=>{
     return{
         type:CREATE_CONTACT,
         payload:contact,
     }
}