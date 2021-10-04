// //1 导入react
// import React from "react";
// import ReactDOM  from "react-dom";

// //2 创建react元素
// const title = React.createElement('h1',null,'hello')

// //3 渲染react元素
// ReactDOM.render(title,document.getElementById('root'))

/**
 * JSX创建
 */
// import React from 'react';
// import ReactDOM  from 'react-dom';

// //使用JSX创建render需要渲染的东西
// const title = (
//   <h1>hello world!</h1>
// )

// /*
// *基础使用
// */
// const isLoading = false;
// const show = () => {
//     // if(isLoading){
//     //   return <div>加载中请稍后</div>
//     // }
//     // return <div>加载完成，显示数据</div>

//     //三元运算符
//     //return isLoading?<div>加载中请稍后</div>:<div>加载完成，显示数据</div>

//     //逻辑运算符
//     return isLoading&&(<div>Loading...</div>)
//   }

// const title = (
//   <h1>{show()}</h1>
// )

/*
* 列表渲染 
*/

// const data = [
//   {id:1,name:'像我这样优秀的人'},
//   {id:2,name:'认真的雪'}
// ]

// const title = (
//   <ul>
//     {data.map(item => <li key={item.id}>{item.name}</li>)}
//   </ul>
// )


/*
* JSX样式处理 
*/
// const title = (
//   <h1 style={{color:'red'}}>
//     JSX的样式处理
//   </h1>
// )
// import React from 'react';
// import ReactDOM  from 'react-dom';
// import './css/index.css';//引入css样式

// const title = (
//   <div className="title">你好</div>
// )

// //渲染react元素
// ReactDOM.render(title,document.getElementById('root'));




/*
  函数组件
*/ 
import React from 'react';
import ReactDOM from 'react-dom';

// function Hello(){
//   return (
//     <div>函数组件</div>
//   )
// }

// 箭头函数
// const Hello = () => <div>函数组件</div>

// ReactDOM.render(<Hello/>,document.getElementById('root'))

/*
类组件
*/

// class Hello extends React.Component{
//   render(){
//     return (
//       <div>类标签创建组件</div>
//     )
//   }
// }

// ReactDOM.render(<Hello/>,document.getElementById('root'))


/*
抽离组件
*/
//引入组件
import Hello from './js/Hello';
//渲染组件
ReactDOM.render(<Hello />,document.getElementById("root"))