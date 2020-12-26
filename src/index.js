import Raect from 'react';
import ReactDOM  from "react-dom";
 import "./style/index.scss";
import { App } from './App';
import {Provider} from "react-redux";
import { store } from './redux/store';
const val= document.getElementById("root");
ReactDOM.render(
<>
<Provider store={store}>
<App/>
 </Provider>
</>
,val);