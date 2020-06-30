import React from 'react'
import Axios from '../Axios'
import 'whatwg-fetch'    // 引入fetch
import api from '../Api'
import ShowDetail from '../ShowDetail'
import {Link,Route} from 'react-router-dom'
class ProductList extends React.Component {
    constructor() {
        super();
        this.state={
            list:[]
        }
    }
    // 组件挂载前（生命周期）
    componentWillMount() {
        // Axios请求
        // Axios.post("/reception/queryType")
        //     .then((res)=>{
        //         console.log(res.data)
        //     this.setState({
        //         list:res.data
        //     })
        // }).catch(function (err) {
        //     console.log(err)
        // })


        // fetch请求（第一个then是返回的格式是什么格式；第二个then才是说具体的json是什么数据;catch是出现的错误）
        fetch(`api/reception/queryType`,{
            // 请求的方式
            method:"POST",
            // 请求头
            headers:{
                'Content-Type': 'application/json'
            },
            // 要传的参数
            body:JSON.stringify({
            })
        }).then(function (res) {
            return res.json()
        }).then(function (json) {
            console.log(json)
            this.setState({
                list:json
            })
        }).catch(function (err) {
            console.log(err)
        })
    }

    render() {
        // 需要将值通过map遍历出来
        let list = this.state.list.map((item,index)=>{
            // 动态路由传参，类似于Post传参，接收参数使用：this.props.match.params.名称
            return <div key={index}><Link to={"/ProductList/ShowDetail/"+item.d_id}>id:{item.d_id}</Link>{item.d_type}</div>
            // 直接进行传参，类似于get传参，接收参数使用：this.props.lacation.query.名称
            // return <div key={index}><Link to={{pathname:"/Product/ShowDetail",query:{id:item.d_id}}}>id:{item.d_id}</Link>{item.d_type}</div>
        })
        return (
            <div>
                {list}
                <div>
                    {/*方法一*/}
                    <Route path="/Product/ShowDetail" component={ShowDetail}/>
                    {/*方法二*/}
                    {/*{this.props.children}*/}
                </div>
                {/*<ul>*/}
                {/*    <li><Link to="/ShowDetail">产品1</Link></li>*/}
                {/*    <li><Link to="/ShowDetail">产品2</Link></li>*/}
                {/*    <li><Link to="/ShowDetail">产品3</Link></li>*/}
                {/*</ul>*/}
            </div>
        )
    }
}

export {ProductList as default}
