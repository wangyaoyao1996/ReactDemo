import React from 'react';
import './App.css';
// import CommentBox from './Comment/CommentBox'
import ProductList from './Product/ProductList'
import Nav from './Nav/Nav'
import Err404 from './Err404'
// import ShowDetail from './ShowDetail'
import LiYan from './LiYan'
import LianXi from './LianXi'
import GuanYu from './GuanYu'
import Home from './Home'
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom'
function App() {
    // let commentList=[
    //     {"name":"小王","date":"2009-9-9","content":"开心啊，放假了"},
    //     {"name":"小朱","date":"2009-9-9","content":"开心啊，放假了"},
    //     {"name":"小邓","date":"2009-9-9","content":"开心啊，放假了"}
    // ]
  return (
    <div className="App">

          {/*<CommentBox data={commentList}/>*/}
          {/*<ProductList/>*/}
          <Nav/>
          {/*exact表示精准匹配*/}
          <Switch>
              方法一
              <Route path="/ProductList"component={ProductList}/>
              {/*方法二*/}
              {/*<Route path="/ProductList" render={()=>*/}
              {/*  <ProductList>*/}
              {/*      <Route path="/Product/ShowDetail" component={ShowDetail}/>*/}
              {/*  </ProductList>*/}
              {/*}>*/}
              {/*</Route>*/}

              {/*<Route path="/ShowDetail" component={ShowDetail}/>*/}
              <Route path="/LiYan" component={LiYan}/>
              <Route path="/LianXi" component={LianXi}/>
              <Route path="/GuanYu" component={GuanYu}/>
              <Route path="/Home" component={Home}/>
              <Route path="/" exact component={Home}/>
              <Route component={Err404}/>
          </Switch>
    </div>
  );
}

export default App;
