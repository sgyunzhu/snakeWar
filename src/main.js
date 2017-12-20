import React,{Component} from "react";
import{render} from "react-dom";
import Root from './containers/Root.js';
import Config from './config.js';
import {hashHistory} from 'react-router';
import routes from './routes/index.js';
//import Test from "./index.js";

render(
    <Root history={hashHistory} routes={routes()}/>,
    document.getElementById('root')
);
