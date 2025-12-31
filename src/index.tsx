// 项目入口
import React from 'react';
import ReactDOM from 'react-dom/client';
// 导入项目的根组件
import App from './App';
import store from './store'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <App /> // 把根组件渲染到id为root的节点
</Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
