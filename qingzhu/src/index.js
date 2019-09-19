import React from 'react';
import ReactDOM from 'react-dom';
import './style';
import './static/bootstrap/css/bootstrap.min.css';  //引入本地文件在index.js中引入
import store from './store/store';//1.引入store
import {Provider} from 'react-redux';//2.从react-redux下引入Provider
import App from './App';
import 'antd/dist/antd.css';  //引入antd样式
//3.使用Provider把公有数据通过Provider加载到所有组件中
ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root'));

