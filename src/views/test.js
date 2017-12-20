import React,{Component} from "react";


class Test extends Component{
    constructors(props){
        this.state={};
    };
    componentWillMount(){
        console.log('组件即将被挂载');
    };
    componentDidMount(){
        console.log('组件挂载完毕');
    }

    render(){
        return(
                <div>
                    <p>Hello world</p>
                </div>
            )
    }
}
export default Test;