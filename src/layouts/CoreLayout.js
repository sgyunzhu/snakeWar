/**
 * author: zhangwei
 */
import React,{PropTypes,Component} from 'react';

class CoreLayout extends Component{
    constructors(props){
        this.state={

        }
    }

    static propTypes : {
       children: PropTypes.element,
    }

    componentWillMount(){
        console.log('===>','CoreLayout');
    }
    render(){
        return(
            <div className='page-container'>
                <div className='view-container'>{this.props.children}</div>
            </div>
        )
    }
}
export default CoreLayout;