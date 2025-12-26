// 项目入口
import React from 'react';
import ReactDOM from 'react-dom/client';
// 导入项目的根组件
import App from './App'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App /> // 把根组件渲染到id为root的节点

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
