import React from 'react';
import {Route,IndexRoute,Redirect} from 'react-router';
import CoreLayout from '../layouts/CoreLayout.js';

//懒加载
function lazyLoadComponent(lazyModule) {
    return (location,callback) =>{
        lazyModule(module => callback(null,module));
    }
}

//定义路由的钩子
const cusProps = {
    onEnter(){
        const pos =this[this.path];
        setTimeou(()=>{
            pos && window.scrollTo(0,pos.top)
        },0);
    },
    onLeave(){
        const $page = document.querySelector('.page-container');
        const pos = $page && $page.getBoundingClientRec();
        this[this.path] = {
            top: pos ? (-pos.top - 100) : 0,
        };
    }
}


export default () =>{
    <Route path='/' component={CoreLayout}>
    </Route>
}

