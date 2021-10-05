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
// import React from 'react';
// import ReactDOM from 'react-dom';

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
// import Hello from './js/Hello';
//渲染组件
// ReactDOM.render(<Hello />,document.getElementById("root"))



/* 
* React事件处理
*/

import React from 'react'
import ReactDOM from 'react-dom'
//类组件中绑定
// class App extends React.Component{
//   //事件处理程序
//   handleClick(){
//     console.log('执行单机处理事件')
//   }
//   render(){
//     return (
//       <button onClick={this.handleClick}>点我</button>
//     )
//   }
// }


// // 函数组件中绑定
// function App(){
//   //事件处理程序
//   function handleClick(){
//     console.log('函数组件中的事件绑定')
//   }
//   return(
//     <button onClick={handleClick}>点我</button>
//   )
// }


//阻止浏览器发生跳转
// class App extends React.Component{
//   handleClick(e){
//     e.preventDefault()
//     console.log('阻止了默认跳转的行为')
//   }
//   render(){
//     return (
//       <a href="http://baidu.com" onClick={this.handleClick} >百度</a>
//     )
//   }
// }


// /*
//    state的基本使用 
// */
// class App extends React.Component{
//   // 复杂语法
//   //----------------------------------------
//   // //constructor 初始化
//   // constructor(){
//   //   //必须添加super，es6中class的要求
//   //   super()

//   //   //初始化state
//   //   this.state = {
//   //     count:0
//   //   }
//   // }
//   //-----------------------------------------

//   //简化语法
//   state = {
//     count:0
//   }

//   render(){
//     return(
//       <div>
//         <h1>计数器：{this.state.count}</h1>
//       </div>
//     )
//   }
// }

/*
* 修改state中的值 
*/
// class App extends React.Component{
//   state = {
//     count:0
//   }
//   add(){
//     this.setState({
//       count:this.state.count +1
//     })
//   }
//   render(){
//     return(
//       <div>
//         <h1>计数器：{this.state.count}</h1>
//         {/* <button onClick={() => {
//           this.setState({
//             count:this.state.count +1
//           })
//         }}>+1</button> */}
//       </div>
//     )
//   }
// }

//箭头函数解决
// class App extends React.Component{
//   state = {
//     count:0
//   }
//   add(){
//     this.setState({
//       count:this.state.count +1
//     })
//   }
//   render(){
//     return(
//       <div>
//         <h1>计数器：{this.state.count}</h1>
//         <button onClick={()=>this.add()}>+1</button>
//       </div>
//     )
//   }
// }

// 

// //class的实例方法解决
// class App extends React.Component{
//   state = {
//     count:0
//   }

//   add = () => {
//     this.setState({
//       count:this.state.count +1
//     })
//   }
//   render(){
//     return(
//       <div>
//         <h1>计数器：{this.state.count}</h1>
//         <button onClick={this.add}>+1</button>
//       </div>
//     )
//   }
// }


// /*
// * 受控组件 
// */
// //class的实例方法解决
// class App extends React.Component{
//   state = {
//     txt:''
//   }
//   handleChange = e => {
//     this.setState({
//       txt:e.target.value
//     })
//   }
//   render(){
//     return(
//       <div>
//         <h1>内容：{this.state.txt}</h1>
//         <input 
//           value={this.state.txt}
//           onChange={this.handleChange}
//         ></input>
//       </div>
//     )
//   }
// }



/*
*   受控组件示例 
*/
// class App extends React.Component{
//   state = {
//     txt:'',
//     content:'',
//     food:'kj',
//     isCheck:false
//   }
//   //文本框
//   handleChange = e => {
//     this.setState({
//       txt:e.target.value
//     })
//   }
//   //富文本框
//   handleChange2 = e => {
//     this.setState({
//       content:e.target.value
//     })
//   }
//   //下拉框
//   changeFood = e =>{
//     this.setState({
//       food:e.target.value
//     })
//   }
//   //单选框
//   changeCheck = e =>{
//     this.setState({
//       isCheck:e.target.checked
//     })
//   }
//   render(){
//     return(
//       <div>
//         {/* 文本框 */}
//         <h1>内容：{this.state.txt}</h1>
//         <input 
//           value={this.state.txt}
//           onChange={this.handleChange}
//         ></input>
//         <br />
//         {/* 富文本框 */}
//         <h1>富文本框: {this.state.content}</h1>
//         <textarea
//           value = {this.state.content}
//           onChange = {this.handleChange2}
//         ></textarea>
//         <br/>
//         {/* 下拉框 */}
//         <select 
//           value={this.food}
//           onChange = {this.changeFood} 
//         >
//           <option value="kj">烤鸡</option>
//           <option value="ky">烤鸭</option>
//           <option value="zc">炸串</option>
//         </select>
//         <br />
//         {/* 单选框 */}
//         <h3>{this.state.isCheck?'是':'否'}</h3>
//         <input 
//           type="checkbox" 
//           checked={this.state.isCheck}
//           onChange={this.changeCheck}
//         ></input>
//       </div>
//     )
//   }
// }

/*
*  受控组件示例优化
*/
// class App extends React.Component{
//   state = {
//     txt:'',
//     content:'',
//     food:'kj',
//     isCheck:false
//   }
//   // 处理函数
//   handlechange = e => {
//     //获取当前DOM对象
//     const target = e.target

//     //根据表单元素类型获取值
//     const value = target.type === 'checkbox'
//         ? target.checked
//         : target.value
    
//     //获取name
//     const name = target.name

//     //根据name设置对应state
//     this.setState({
//       [name]:value
//     })
//   }
//   render(){
//     return(
//       <div>
//         {/* 文本框 */}
//         <h1>内容：{this.state.txt}</h1>
//         <input 
//           value={this.state.txt}
//           name='txt'
//           onChange={this.handlechange}
//         ></input>
//         <br />
//         {/* 富文本框 */}
//         <h1>富文本框: {this.state.content}</h1>
//         <textarea
//           value = {this.state.content}
//           name='content'
//           onChange = {this.handlechange}
//         ></textarea>
//         <br/>
//         {/* 下拉框 */}
//         <select 
//           value={this.state.food}
//           name='food'
//           onChange = {this.handlechange} 
//         >
//           <option value="kj">烤鸡</option>
//           <option value="ky">烤鸭</option>
//           <option value="zc">炸串</option>
//         </select>
//         <br />
//         {/* 单选框 */}
//         <h3>{this.state.isCheck?'是':'否'}</h3>
//         <input 
//           type="checkbox" 
//           checked={this.state.isCheck}
//           name = 'isCheck'
//           onChange={this.handlechange}
//         ></input>
//       </div>
//     )
//   }
// }

/*
* 非受控组件：
*/
// class App extends React.Component{
//   constructor(){
//     super()
//     this.txtRef = React.createRef()
//   }
//   change = () => {
//     console.log(this.txtRef.current.value)
//   }
//   render(){
//     return(
//       <div>
//         <input type='text' ref={this.txtRef} onChange={this.change} ></input>
//       </div>
//     )
//   }
// }


/*
* 综合实例渲染列表 
*/

class App extends React.Component{
  state = {
    msg:[
      
    ],
    id:'',
    message:''
  }
  change = e => {
    const name = e.target.name
    this.setState({
      [name]:e.target.value
    })
  }
  add = ()=> {
    var msg2 = this.state.msg.concat({
      id:this.state.id,
      msg:this.state.message
    })
    console.log(msg2)
    this.setState({
      msg:msg2
    })
  }

  //渲染评论列表
  renderList(){
    return this.state.msg.length === 0 
    ? (<div>暂无评论</div>)
    : (
      <div >
        {this.state.msg.map(item => (
          <div key={item.id}>
            <li >{item.id}</li>
            <p >{item.msg}</p>
          </div>
        ))}
      </div>
    )
  }
  render(){
    return(
      <div>
        <input value={this.state.id} name='id' onChange={this.change}></input>
        <br/>
        <textarea value={this.state.message} name='message' onChange={this.change}></textarea>
        <br />
        <button onClick={this.add}>添加</button>
        {/* 通过条件渲染是否显示是否没有数据 */}
        {/* {
          this.state.msg.length === 0 
            ? (<div>暂无评论</div>)
            : (
              <div >
                {this.state.msg.map(item => (
                  <div key={item.id}>
                    <li >{item.id}</li>
                    <p >{item.msg}</p>
                  </div>
                ))}
              </div>
            )
        } */}

        {/* 优化渲染评论列表 */}
        {this.renderList()}
        
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'))


