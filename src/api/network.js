//发起ajax 请求
import axios from "axios";

export default {

    /**
     * axios使用API
     * send a Post request
     * axios({
     *     method: post,
     *     url: '/user/123456',
     *     data: {
     *          firstName: 'zhang',
     *          age: '18'
     *  }
     * })
     * 
     * 
     * axios.get('/user?id=123456').then((res)=>{console.log(res)})
     * axios.post('/user',{
     *                      params:{
     *                          id:123456,
     * }}).then((res)=>{console.log(res)})
     * 
     * 
     * 
     * 
     * 
     */

    getProductDetail: function (url){
        axios.get(url).then((response)=>{
            console.log(response);
        })
    }
}