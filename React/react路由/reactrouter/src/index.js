import React from 'react'
import ReactDOM, { render } from 'react-dom'

/*
* react-router-dom的基本使用
*/

//导入组件
// import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

//哈希router
// import {HashRouter as Router,Route,Link} from 'react-router-dom'

// const First = () => {
//   return (
//     <div>
//       First
//     </div>
//   )
// }

// //使用Router组件包裹整个应用
// const App = () => {
//   return(
//     <Router>
//       <div>
//         <h1>React路由基础</h1>
//         {/* 指定路由入口 */}
//         <Link to='/first'>页面一</Link>

//         {/* 指定路由出口 */}
//         <Route path="/first" component={First}></Route>
//       </div>
//     </Router>
//   )
// }





/*
* 编程式导航
*/

import { BrowserRouter as Router,Route,Link} from 'react-router-dom'

// class Login extends React.Component{
//   handlelogin = () => {
//     //使用编程式导航实现路由跳转
//     this.props.history.push('/home')
//   }

//   render(){
//     return (
//       <div>
//         <p>登录界面</p>
//         <button onClick={this.handlelogin}>登录</button>
//       </div>
//     )
//   }
// }

// const Home = (props) => {
//   const handleback = () => {
//     props.history.go(-1)
//   }
//   return (
//     <div>
//       <h2>我是后台首页</h2>
//       <button onClick={handleback}>返回登录界面</button>
//     </div>
//   )
// }

// const App = () => (
//   <Router>
//     <div>
//       <h1>编程式导航：</h1>
//       <Link to="/login">去登录页面</Link>

//       <Route path="/login" component={Login}></Route>
//       <Route path="/home" component={Home}></Route>
//     </div>
//   </Router>
// )



/*
* 默认路由
*/

const Home = () => <p>进入页面的时候，你能看见我吗</p>

const App = () => (
  <Router>
    <div>
      <h1>默认路由</h1>
      <Route path="/" component={Home}></Route>
    </div>
  </Router>
)

ReactDOM.render(<App/>,document.getElementById('root'))