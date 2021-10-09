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

// const App = props =>{
//   console.log(props)
//   return(
//     <div>
//       <h1>此处展示props的默认值:{props.pageSize}</h1>
//     </div>
//   )
// }

// //添加props默认值
// App.defaultProps = {
//   pageSize:10
// }




/*
* 组件生命周期
*/

// class App extends React.Component{
//   constructor(props){
//     super(props)

//     //初始化state
//     this.state = {
//       count:0
//     }


//     console.log('生命周期钩子函数：constructor')
//   }

//   componentDidMount(){
//     const title = document.getElementById('title');
//     console.log(title);
//     console.log('生命周期钩子函数：componentDidMount')
//   }

//   render(){
//     //错误
//     //this.setState({
//     //  count:1
//     //})

//     console.log('生命周期钩子函数：render')
//     return(
//       <div>
//         <h1 id="title">统计豆豆被打的次数</h1>
//         <button id="btn">打豆豆</button>
//       </div>
//     )
//   }
// }

/*
* 组件生命周期--更新时
*/
// class App extends React.Component{
//   constructor(props){
//     super(props)

//     //初始化state
//     this.state = {
//       count:1
//     }
//   }

//   //打豆豆
//   handleClick = () => {
//     this.setState({
//       count:this.state.count+1
//     })


//     //强制更新
//     this.forceUpdate()
//   }

//   render(){
//     console.log('生命周期钩子函数：render')
//     return(
//       <div>
//         <Counter count = {this.state.count} />
//         <button onClick={this.handleClick} >打豆豆</button>
//       </div>
//     )
//   }
// }

// class Counter extends React.Component{
//   render(){
//     console.log('--子组件--生命周期钩子函数：render')
//     return <h1>统计豆豆被打的次数:{this.props.count}</h1>
//   }

//   //注意：如果要调用setState()更新状态，必须放在一个if条件中
//   //因为：如果直接调用setState()更新状态，也会导致递归更新！！！

//   componentDidUpdate(preProps){
//     //正确做法：
//     //做法：比较更新前后的props是否相同，来决定是否重新渲染组件
//     console.log('上一次的props：',preProps,'当前的props',this.props)
//     if(preProps.count !== this.props.count){
//       this.setState({})
//     }

//     //错误演示！！！
//     //this.setState({})

//     //获取Dom
//     const title = document.getElementById('title')
//     console.log(title.innerHTML)
//   }
// }

/*
* 组件卸载时
*/
class App extends React.Component{
  constructor(props){
    super(props)

    //初始化state
    this.state = {
      count:1
    }
  }

  //打豆豆
  handleClick = () => {
    this.setState({
      count:this.state.count+1
    })
  }

  render(){
    console.log('生命周期钩子函数：render')
    return(
      <div>
        {
          this.state.count>3
            ? <p>豆豆被打死了</p>
            : <Counter count = {this.state.count} />
        }
        
        <button onClick={this.handleClick} >打豆豆</button>
      </div>
    )
  }
}

class Counter extends React.Component{
  componentDidMount(){
    //开启定时器
    this.timer = setInterval(() => {
      console.log('定时器执行')
    }, 500);
  }
  render(){
    return(
      <p>豆豆被打的次数：{this.props.count}</p>
    )
  }
  componentWillUnmount(){
    console.log('生命周期执行函数 componentWillUnmount')
    //清理定时器
    clearInterval(this.timer)
  }
}
ReactDOM.render(<App/>,document.getElementById('root'))