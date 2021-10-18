import React from 'react'

//导入要使用的组件
//此项目为ant-design
// import { Button } from 'antd-mobile'

/*
  1 安装：npm add react-router-dom
  2 导入路由组件：Router/Route/Link
  3 在pages文件夹中创建 Home/index.js 和 CityList/index.js 两个组件
  4 使用Route组件配置首页和城市选择页面
*/

import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'

//导入路由组件
import Home from './pages/Home';
import CityList from './pages/CityList';
import Map from './pages/Map';

function App() {
  return (
    <Router>
      <div className="App">
        {/* 导航菜单 */}
        {/* <Link to='/home' >首页</Link>
        <Link to='/citylist' >城市选择</Link> */}
        {/* 配置路由 */}
        <Route exact path='/' render={() => <Redirect to='/home' />}></Route>
        <Route path='/home' component={Home}></Route>
        <Route path='/citylist' component={CityList}></Route>
        <Route path='/map' component={Map}></Route>
      </div>
    </Router>
  );
}

export default App;
