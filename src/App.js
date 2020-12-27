import React from "react";
import Contact from "./component/Contact";
import Header from "./component/Header";
import{BrowserRouter as Router,Route,Switch} from "react-router-dom";
import "./style/look.scss";
import { Detail } from "./component/Detail";
export const  App=()=>{
  return(
    <>
      

       <Router>
       <Header/>
          <Switch>
         <Route exact path="/">
         <Contact/>
       </Route>

       <Route exact path="/detail">
        <Detail/>
       </Route>
        
        
          </Switch>

       </Router>
   
    </>
  );
}

