import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
// import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'
// Router作为一个容器，将根节点包起来，路由才能跳转
moment.locale('zh-cn');
ReactDOM.render(
    <Router>
        <App/>
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
