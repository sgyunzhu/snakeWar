import React,{PropTypes,Component} from "react";
import {Router} from 'react-router';

export default class Root extends Component{
    static propTypes: {
        history: PropTypes.object.isRequired,
        routes: PropTypes.element.isRequired
    }
    
    getPlatform() {
        let sUserAgent = navigator.userAgent.toLowerCase();
        let platform = '';
        if (sUserAgent.match(/micromessenger/)) {
            platform = 'wechat';
        } else if (sUserAgent.match(/weibo/)) {
            platform = 'weibo';
        } else if (sUserAgent.match(/anydoor/)) {
            platform = 'anydoor';
        } else if (sUserAgent.match(/ipad|iphone os/)) {
            platform = 'ios';
        } else if (sUserAgent.match(/android/)) {
            platform = 'android';
        } else {
            platform = 'unknow';
        }
        return platform;
    }

    render(){
        return(
            <div>
               <Router history={this.props.history}>
                  {this.props.routes}
               </Router>
            </div>
        )

    }



}
