import React from 'react'
import  ReactDOM, { render }  from 'react-dom'

/*
* props
*/

//函数组件

// //接收数据
// const Hello = props => {
//   //props是一个对象
//     return(
//       <div>
//         <h1>props:{props.name}</h1>
//       </div>
//     )
// }


// //类组件
// class App extends React.Component{
//   constructor(props){
//     //推荐将props传递给父类构造函数
//     super(props)
//   }
//   render(){
//     return (
//       <div>
//         <h1>props:{this.props.name}</h1>
//       </div>
//     )
//   }
// }

// //1 传递数据
// ReactDOM.render(<App name='mark' />,document.getElementById('root'))




/*
* 父组件传递数据给子组件
*/

//父组件
// class Parent extends React.Component{
//   state = {
//     lastName:'mark'
//   }
//   render(){
//     return (
//       <div>
//         parent:
//         <Child name = {this.state.lastName}/>
//         <Child2 name = {this.state.lastName} />
//       </div>
//     )
//   }
// }

// //子组件
// class Child extends React.Component{
//   render(){
//     return (
//       <div>
//         child:
//         {this.props.name}
//       </div>
//     )
//   }
// }

// //子组件2
// const Child2 = props => {
//   return(
//     <div>
//       child:
//       {props.name}
//     </div>
//   )
// }





// /*
// * 子组件传递参数给父组件
// */
 
// //父组件
// class Parent extends React.Component{
//   state = {
//     data:''
//   }
//   //父组件接收数据
//   getMsg = data => {
//     this.setState({
//       data:data
//     })
//   }
//   render(){
//     return(
//       <div>
//         父组件：{this.state.data}
//         <Child getMSG = {this.getMsg}/>
//       </div>
//     )
//   }
// }

// //子组件
// class Child extends React.Component{
//   state = {
//     data:'1111'
//   }
//   handle = () => {
//     this.props.getMSG(this.state.data)
//   }
//   render(){
//     return (
//       <div>
//         子组件 <button onClick={this.handle}>点我，给父组件传递数据</button>
//       </div>
//     )
//   }
// }





// //兄弟组件之间传值
// //公共父组件
// class Parent extends React.Component{
//   state = {
//     pdata:''
//   }
//   getmsg = data => {
//     this.setState({
//       pdata:data
//     })
//   }
//   render(){
//     return(
//       <div>
//         <Child2 getMsg = {this.getmsg}/>
//         <Child1 name = {this.state.pdata}/>
//       </div>
//     )
//   }
// }

// //子组件1
// class Child1 extends React.Component{
//   render(){
//     return(
//       <div>
//         {this.props.name}
//       </div>
//     )
//   }
// }


// //子组件2
// class Child2 extends React.Component{
//   state = {
//     child2data:'2'
//   }
//   handle = () => {
//     this.props.getMsg(this.state.child2data)
//   }
//   render(){
//     return(
//       <div>
//         <button onClick={this.handle}>将数据传递到父组件</button>
//       </div>
//     )
//   }
// }




/*
* context的基本使用
*/

//创建context得到两个组件
// const {Provider,Consumer} = React.createContext()

// class App extends React.Component{
//   render(){
//     return(
//       <Provider value="pink">
//         <div>
//           <Node />
//         </div>
//       </Provider>
//     )
//   }
// }

// const Node = props => {
//   return (
//     <div>
//       <SubNode />
//     </div>
//   )
// }

// const SubNode = props => {
//   return (
//     <div>
//       <Child />
//     </div>
//   )
// }

// const Child = props => {
//   return <div>
//     <Consumer>
//       {
//         data => <span>我是子节点 -- {data}</span>
//       }
//     </Consumer>
//   </div>
// }




/*
* children属性
*/


// const App = props =>{
//   console.log(props)
//   props.children()
//   return(
//     <div>
//       <h1>组件标签的子节点</h1>
//       {/* {props.children} */}
//     </div>
//   )
// }

// ReactDOM.render(
//   <App>
//     {() => console.log('这是一个函数子节点')}
//   </App>,
//   document.getElementById('root')
// )

//children为jsx或组件
//const Test = () => <button>我是button组件</button>
// const App = props =>{
//   console.log(props)
//   return(
//     <div>
//       <h1>组件标签的子节点</h1>
//       {props.children}
//     </div>
//   )
// }

// ReactDOM.render(
//   <App>
//     <p>我是子节点，是一个p标签</p>
//     <Test/>
//   </App>,
//   document.getElementById('root')
// )



//children为文本节点
// const App = props =>{
//   console.log(props)
//   return(
//     <div>
//       <h1>组件标签的子节点</h1>
//       {props.children}
//     </div>
//   )
// }

// ReactDOM.render(<App>我是子节点</App>,document.getElementById('root'))


/*
* props校验
*/


// import PropTypes from 'prop-types'

// const App = props =>{
//   const arr = props.colors
//   const lis = arr.map((item,index) => <li key={index}>{item.index}</li>)
//   return <ul>{lis}</ul>
// }

// //添加props校验
// App.propTypes = {
//   colors:PropTypes.array
// }

// ReactDOM.render(<App colors={19}></App>,document.getElementById('root'))



// /*
// * props常用规则校验
// */

// import PropTypes from 'prop-types'

// const App = props => {
//   return(
//     <div>
//       <h1>props校验：</h1>
//     </div>
//   )
// }

// //添加props校验
// //属性a的类型：                       数值(number)
// //属性fn的类型：                      函数(func)并且为必填项
// //属性tag的类型：                     React元素(element)
// //属性filter的类型：                  对象({area:'上海'，price：1999})
// App.PropTypes = {
//   a:PropTypes.number,
//   fn:PropTypes.func.isRequired,
//   tag:PropTypes.element,
//   filter:PropTypes.shape({
//     area:PropTypes.string,
//     price:PropTypes.number
//   })
// }


// ReactDOM.render(<App/>,document.getElementById('root'))




/*
* props默认值
*/

const App = props =>{
  console.log(props)
  return(
    <div>
      <h1>此处展示props的默认值:{props.pageSize}</h1>
    </div>
  )
}

//添加props默认值
App.defaultProps = {
  pageSize:10
}

ReactDOM.render(<App/>,document.getElementById('root'))