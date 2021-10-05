# react基础

### 1 React简介

#### 1.1 什么是react

​		React是一个用于构建用户界面的JavaScript库

#### 1.2 React的特点

​		· 声明式

​				和写html一样就可以使用

​				React负责渲染UI，并在数据变化时更新UI

​		· 基于组件

​				组件时React最重要的内容

​				组件表示页面中的部分内容

​				组合、复用多个组件，可以实现完整的页面功能

​		· 学习一次随处使用

​				可以开发web、vr、android或者iosapp等

****备注：npm init 可以创建默认的package.json文件**

### 2 react的基本使用

#### 2.1 安装react

​		`npm i react react-dom`

#### 2.2 React的使用

##### 1 引入react和react-dom两个js文件

<script src="./node_modules/react/umd/react.development.js"></script>
<script src="./node_modules/react-dom/umd/react-dom.development.js"></script>

##### 2 创建React元素

##### 3 渲染React元素到页面中

代码

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>01-react的基本使用</title>
</head>
<body>
    <div id="root"></div>
    <!-- 引入js文件 -->
    <script src="./node_modules/react/umd/react.development.js"></script>
    <script src="./node_modules/react-dom/umd/react-dom.development.js"></script>
    <script>
        //2 创建react元素
        //参数一：元素名称
        //参数二：元素属性
        //参数三及其以后的参数：元素的子节点
        const title = React.createElement('h1',null,'hello react');
        // const title = React.createElement(
        //     'div',
        //     null,
        //     'hello react',
        //     React.createElement('span',null,'我是span节点')
        // );


        //3 渲染react元素
        //参数一：要渲染的react元素
        //参数二：挂载点
        //注意 ReactDOM 中 DOM为大写
        ReactDOM.render(title,document.getElementById('root'))
    </script>
</body>
</html>
```

`

### 3 React脚手架的使用

#### 3.1 React脚手架的意义

​	·  脚手架是开发现代web应用的必备

​    ·  充分利用Webpack、Babel、ESLint等工具辅助项目开发

​	·  零配置，无需手动配置繁琐的工具即可使用

​	·  专注于业务而不是工具配置

#### 3.2 使用React脚手架初始化项目

​	1 初始化项目，命令

​			`npx create-react-app myapp`

​	2 启动项目，在项目根目录执行命令：

​			`npm start`

​	npx命令介绍

​		npm v5.2.0 引入的一条命令

​		目的：提升包内提供的命令行工具的使用体验

​		原来：先安装脚手架包，再使用这个包中提供的命令

​		现在：无需安装脚手架包，就可以直接使用这个包提供的命令

#### 	3.3 在脚手架中使用React

​		1 导入react和react-dom两个包

​		2 调用**React.documentElement()**方法创建react元素

​		3 调用**ReactDOM.render()**方法渲染react元素到页面中

​	代码

​		在src/index.js中

```react
//1 导入react
import React from "react";
import ReactDOM  from "react-dom";

//2 创建react元素
const title = React.createElement('h1',null,'hello')

//3 渲染react元素
ReactDOM.render(title,document.getElementById('root'))
```





# JSX		

### 1  JSX的基本使用

#### 1.1 creatElement()的问题

​		繁琐，不直观

#### 1.2 JSX简介

​		JSX是JavaScript XML的简写，表示在JavaScript代码中写XML(HTML)格式的代码

​		优势：声明式语法更加直观、和HTML结构相同，降低了学习成本、提升开发效率

#### 1.3 使用步骤

```javascript
/**
 * JSX创建
 */
import React from 'react';
import ReactDOM  from 'react-dom';

//使用JSX创建render需要渲染的东西
const title = <h1>hello world!</h1>

//渲染react元素
ReactDOM.render(title,document.getElementById('root'));
```

#### 1.4 为什么脚手架中可以使用JSX语法

​		1 JSX不是标准的ECMAScript语法，它是ECMAScript的语法扩展。

​		2 需要使用babel编译处理后，才能在浏览器环境中使用。

​		3 create-react-app 脚手架中已经默认有该配置，无需手动配置

​		4 编译JSX语法的包为：@babel/preser-react

#### 1.5 注意点

​		1 React元素的属性名使用驼峰命名法

​		2 特殊属性名: class->className	for->htmlFor	tabindex->tabIndex

​		3 没有子节点的React元素可以用/>结束

​		4 推荐：使用小括号包裹JSX，从而避免js中的自动插入分号陷阱

```react
        const title = (
          <h1>hello world!</h1>
        )
```



### 2 JSX中使用JavaScript表达式

#### 2.1 嵌入JS 表达式

​	1 数据存储在JS中

​	2 语法：{JavaScript表达式}

​	3 注意：语法中是单大括号，不是双大括号

```react
        const name = "张三"

        const title = (
          <h1>{name}</h1>
        )
```



### 3 JSX的条件渲染

​	·  场景：loading效果

​	·  条件渲染：根据条件渲染特定的JSX结构

​	·  可以使用if/else或三元运算符或逻辑运算符来实现

```react
/*
*基础使用
*/
const isLoading = false;
const show = () => {
    // if(isLoading){
    //   return <div>加载中请稍后</div>
    // }
    // return <div>加载完成，显示数据</div>

    //三元运算符
    //return isLoading?<div>加载中请稍后</div>:<div>加载完成，显示数据</div>

    //逻辑运算符
    return isLoading&&(<div>Loading...</div>)
  }

const title = (
  <h1>{show()}</h1>
)
```



### 4 JSX的列表渲染

​	·  如果要渲染一组数据，应该使用数组的map()方法

​	·  注意：渲染列表时应该添加key属性，key属性的值要保证唯一

​	·  原则：map()遍历谁，就给谁添加key属性

​	·  注意：尽量避免使用索引号作为key

```react
/*
* 列表渲染 
*/

const data = [
  {id:1,name:'像我这样优秀的人'},
  {id:2,name:'认真的雪'}
]

const title = (
  <ul>
    {data.map(item => <li key={item.id}>{item.name}</li>)}
  </ul>
)

```



### 5 JSX的样式处理

​		1 行内样式——style

```react
/*
* JSX样式处理 
*/
const title = (
  <h1 style={{color:'red'}}>
    JSX的样式处理
  </h1>
)
```

​		2 类名——className

```react
import React from 'react';
import ReactDOM  from 'react-dom';
import './css/index.css';//引入css样式

const title = (
  <div className="title">你好</div>
)
```

```css
.title{
    background-color: red;
    color: white;
}
```



### 6 总结

​	1 JSX是React的核心内容

​	2 JSX表示在JS代码中写HTML结构，是React声明式的体现

​	3 使用JSX配合嵌入的JS表达式、条件渲染、列表渲染，可以描述任意UI结构

​	4 推荐使用className的方法给JSX添加样式

​	5 React完全利用JS语言自身的能力来编写UI，而不是如同vue一样通过v-for等指令来增强HTML的功能



# React组件

### 1 React组件介绍

​		·  使用React就是在使用组件

​		·  组件表示页面中的部分功能

​		·  组合多个组件能实现完整的页面功能

​		·  特点：可复用、独立、可组合 

### 2 React组件的两种创建方式

#### 2.1  使用函数创建组件

​			·  函数组件：使用JS的函数(或箭头函数)创建的组件

​			·  约定一：函数名称必须以大写字母开头

​			·  约定二：函数组件必须有返回值，表示该组件的结构

​			·  如果返回值为null，表示不渲染任何内容

​			·  渲染函数组件：**用函数名作为组件标签名**

​			·  组件标签可以是单标签也可以是双标签

```react
//普通方法
function Hello(){
  return (
    <div>函数组件</div>
  )
}

// 箭头函数
const Hello = () => <div>函数组件</div>

ReactDOM.render(<Hello/>,document.getElementById('root'))
```

#### 2.2 使用类创建组件

​			·  类组件：使用ES6的class创建的组件

​			·  约定一：类名称必须以大写字母开头

​			·  约定二：类组件应该继承React.Component父类，从而可以使用父类中提供的方法和属性

​			·  约定三：类组件必须提供render()方法

​			·  约定四：render()方法必须有返回值，表示该组件的结构

```react
/*
类组件
*/

class Hello extends React.Component{
  render(){
    return (
      <div>类标签创建组件</div>
    )
  }
}

ReactDOM.render(<Hello/>,document.getElementById('root'))
```

#### 2.3 抽离为独立JS文件

​			1  创建Hello.js

​			2  在Hello.js中导入React

​			3  创建组件(函数或类)

​			4  在Hello.js中导出该组件

​			5  在index.js中导入Hello组件

​			6  渲染该组件

```react
//Hello.js
import React from "react";
//class创建
// class Hello extends React.Component{
//     render(){
//         return (
//              <div>抽离组件</div>
//         )
//     }
// }

//函数创建
function Hello(){
    return (
        <div>抽离函数创建的组件</div>
    )
}

export default Hello
```

```react
//index.js
/*
抽离组件
*/
//引入组件
import Hello from './js/Hello';
//渲染组件
ReactDOM.render(<Hello />,document.getElementById("root"))
```

### 3 React事件处理

#### 3.1 React事件绑定

​	  · React事件绑定语法与DOM事件语法相似

​	  · 语法：on+事件名称={事件处理程序}，比如：onClick={() => {}}

​	  · 注意：React事件采用驼峰命名法，比如：onMouseEnter、onFocus

在类组件中绑定

```react
/*
* React事件处理
*/
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  //事件处理程序
  handleClick(){
    console.log('执行单机处理事件')
  }
  render(){
    return (
      <button onClick={this.handleClick}>点我</button>
    )
  }
}
ReactDOM.render(<App/>,document.getElementById('root'))
```

==注意：写handleClick的地方是在render的上面而不是内部==

在函数组件中绑定

```react
// 函数组件中绑定
function App(){
  //事件处理程序
  function handleClick(){
    console.log('函数组件中的事件绑定')
  }
  return(
    <button onClick={handleClick}>点我</button>
  )
}
```

==注意：函数组件中没有this==

#### 3.2 事件对象

​		· 可以通过==事件处理程序的参数==获取到事件对象

​		· React中的事件对象叫做：合成事件(对象)

​		· 合成事件：兼容所有浏览器，无需担心跨浏览器兼容性问题

```react
//阻止浏览器发生跳转
class App extends React.Component{
  handleClick(e){
    e.preventDefault()
    console.log('阻止了默认跳转的行为')
  }
  render(){
    return (
      <a href="http://baidu.com" onClick={this.handleClick} >百度</a>
    )
  }
}
```

### 4 有状态组件和无状态组件

​	· 函数组件叫做无状态组件，类组件叫做有状态组件

​	· 状态(state)即数据

​	· 函数组件没有自己的状态，只负责数据展示(静态)

​	· 类组件有自己的状态，负责更新UI，让页面“动”起来

### 5 组件中的state和setState()

#### 5.1 state的基本使用

​	· 状态(state)即数据，是组件内部的私有数据，只能在组件内部使用

​	· state的值是对象，表示一个组件中可以有多个数据

​	· 获取状态：this.state

```react
/*
   state的基本使用 
*/
class App extends React.Component{
  // 复杂语法
  //----------------------------------------
  // //constructor 初始化
  // constructor(){
  //   //必须添加super，es6中class的要求
  //   super()

  //   //初始化state
  //   this.state = {
  //     count:0
  //   }
  // }
  //-----------------------------------------
  //简化语法
  state = {
    count:0
  }

  render(){
    return(
      <div>
        <h1>计数器：{this.state.count}</h1>
      </div>
    )
  }
}
```

#### 5.2 setState()修改状态

​		· 状态是可变的

​		· 语法: this.setState({要修改的数据})

​		· 注意：==不要直接修改state中的值，这是错误的==

​		· setState()作用：1 修改state      2 更新UI

​		· 思想：数据驱动视图

```react
/*
* 修改state中的值 
*/
class App extends React.Component{
  state = {
    count:0
  }

  render(){
    return(
      <div>
        <h1>计数器：{this.state.count}</h1>
        <button onClick={() => {
          this.setState({
            count:this.state.count +1
          })
        }}>+1</button>
      </div>
    )
  }
}
```

#### 5.3 组件中的state和setState

##### 从jsx中抽离事件处理程序

· jsx中掺杂过多js逻辑代码，会显得非常混乱

· 推荐：将逻辑抽离到单独的方法中，保证jsx结构清晰

当运行以下程序时直接报错

```react
class App extends React.Component{
  state = {
    count:0
  }
  add(){
    this.setState({
      count:this.state.count +1
    })
  }
  render(){
    return(
      <div>
        <h1>计数器：{this.state.count}</h1>
        <button onClick={this.add}>+1</button>
        {/* <button onClick={() => {
          this.setState({
            count:this.state.count +1
          })
        }}>+1</button> */}
      </div>
    )
  }
}
```

![image-20211005095443067](/Users/mark/Library/Application Support/typora-user-images/image-20211005095443067.png)

 · 原因：事件处理程序中的this值为undefined

 · 希望：this指向组件实例(render方法中的this即为组件实例)

### 6 事件绑定this指向

#### 6.1 箭头函数

· 利用箭头函数自身不绑定this的特点

· render()方法中的this为组件实例，可以获取到setState()

```react
class App extends React.Component{
  state = {
    count:0
  }
  add(){
    this.setState({
      count:this.state.count +1
    })
  }
  render(){
    //箭头函数中的this指向外部环境，此处为：render()方法
    return(
      <div>
        <h1>计数器：{this.state.count}</h1>
        <button onClick={()=>this.add()}>+1</button>
      </div>
    )
  }
}
```

#### 6.2 Function.prototype.bind()

​	· 利用es5中的bind方法，将事件处理程序中的this与组件实例绑定在一起

```react
//function.prototype.bind解决
class App extends React.Component{
  state = {
    count:0
  }
  constructor(){
    super()
    this.add = this.add.bind(this)
  }
  add(){
    this.setState({
      count:this.state.count +1
    })
  }
  render(){
    return(
      <div>
        <h1>计数器：{this.state.count}</h1>
        <button onClick={this.add}>+1</button>
      </div>
    )
  }
}
```

#### 6.3 class实例的方法

​	· 利用箭头函数形式的class实例方法

​	· 注意：该语法是实验性语法，但是，由于babel的存在可以直接使用

```react
//class的实例方法解决
class App extends React.Component{
  state = {
    count:0
  }

  add = () => {
    this.setState({
      count:this.state.count +1
    })
  }
  render(){
    return(
      <div>
        <h1>计数器：{this.state.count}</h1>
        <button onClick={this.add}>+1</button>
      </div>
    )
  }
}
```

### 7 表单处理

#### 7.1 受控组件

​	· HTML中的表单元素是可输入的，也就是有自己的可变状态

​	· 而在React中可变状态通常保存在state中，并只能通过setState()方法来修改

​	· React将state与表单元素值value绑定到一起，由state的值来控制表达元素的值

​	· 受控组件：其值受到React控制的表单元素

**步骤**

​	1 在state中添加一个状态，作为表单元素的value值(控制表单元素值的来源)

​	2 给表单元素绑定change事件，将表单元素的值设置为state的值(控制表单元素值的变化)

```react
/*
* 受控组件 
*/
//class的实例方法解决
class App extends React.Component{
  state = {
    txt:''
  }
  handleChange = e => {
    this.setState({
      txt:e.target.value
    })
  }
  render(){
    return(
      <div>
        <h1>内容：{this.state.txt}</h1>
        <input 
          value={this.state.txt}
          onChange={this.handleChange}
        ></input>
      </div>
    )
  }
}
```

**受控组件示例**

1 文本框、富文本框、下拉框

2 复选框

```react
class App extends React.Component{
  state = {
    txt:'',
    content:'',
    food:'kj',
    isCheck:false
  }
  //文本框
  handleChange = e => {
    this.setState({
      txt:e.target.value
    })
  }
  //富文本框
  handleChange2 = e => {
    this.setState({
      content:e.target.value
    })
  }
  //下拉框
  changeFood = e =>{
    this.setState({
      food:e.target.value
    })
  }
  //单选框
  changeCheck = e =>{
    this.setState({
      isCheck:e.target.checked
    })
  }
  render(){
    return(
      <div>
        {/* 文本框 */}
        <h1>内容：{this.state.txt}</h1>
        <input 
          value={this.state.txt}
          onChange={this.handleChange}
        ></input>
        <br />
        {/* 富文本框 */}
        <h1>富文本框: {this.state.content}</h1>
        <textarea
          value = {this.state.content}
          onChange = {this.handleChange2}
        ></textarea>
        <br/>
        {/* 下拉框 */}
        <select 
          value={this.food}
          onChange = {this.changeFood} 
        >
          <option value="kj">烤鸡</option>
          <option value="ky">烤鸭</option>
          <option value="zc">炸串</option>
        </select>
        <br />
        {/* 单选框 */}
        <h3>{this.state.isCheck?'是':'否'}</h3>
        <input 
          type="checkbox" 
          checked={this.state.isCheck}
          onChange={this.changeCheck}
        ></input>
      </div>
    )
  }
}
```

**多表单元素优化**

​	· 问题：每个表单元素都有一个单独的事件处理程序处理太复杂

​	· 优化：使用一个事件处理程序同时处理多个表单元素

**多表单元素优化步骤**

​	1 给表单元素添加name属性，名称与state相同

​	2 根据表单元素类型获取对应值

​	3 在change事件处理程序中通过[name]来修改对应的state

​	==注意:[name]为ES6中的属性名表达式==

```react
/*
*  受控组件示例优化
*/
class App extends React.Component{
  state = {
    txt:'',
    content:'',
    food:'kj',
    isCheck:false
  }
  // 处理函数
  handlechange = e => {
    //获取当前DOM对象
    const target = e.target

    //根据表单元素类型获取值
    const value = target.type === 'checkbox'
        ? target.checked
        : target.value
    
    //获取name
    const name = target.name
    
    //根据name设置对应state
    this.setState({
      [name]:value
    })
  }
  render(){
    return(
      <div>
        {/* 文本框 */}
        <h1>内容：{this.state.txt}</h1>
        <input 
          value={this.state.txt}
          name='txt'
          onChange={this.handlechange}
        ></input>
        <br />
        {/* 富文本框 */}
        <h1>富文本框: {this.state.content}</h1>
        <textarea
          value = {this.state.content}
          name='content'
          onChange = {this.handlechange}
        ></textarea>
        <br/>
        {/* 下拉框 */}
        <select 
          value={this.state.food}
          name='food'
          onChange = {this.handlechange} 
        >
          <option value="kj">烤鸡</option>
          <option value="ky">烤鸭</option>
          <option value="zc">炸串</option>
        </select>
        <br />
        {/* 单选框 */}
        <h3>{this.state.isCheck?'是':'否'}</h3>
        <input 
          type="checkbox" 
          checked={this.state.isCheck}
          name = 'isCheck'
          onChange={this.handlechange}
        ></input>
      </div>
    )
  }
}
```

#### 7.2 非受控组件

​	· 说明：借助于ref，使用原生DOM方式来获取表单元素值

​	**使用步骤**

​	1 调用React.createRef()方法创建一个ref对象

```react
constructor(){
	super()
	this.txtRef = React.creatRef()
}
```

​	2 将创建好的ref对象添加到文本框中

```html
<input type='text' ref={this.txtRef} />
```

​	3 通过ref对象获取到文本框的值

```js
console.log(this.txtRef.current.value)
```

```react
/*
* 非受控组件：
*/
class App extends React.Component{
  constructor(){
    super()
    this.txtRef = React.createRef()
  }
  change = () => {
    console.log(this.txtRef.current.value)
  }
  render(){
    return(
      <div>
        <input type='text' ref={this.txtRef} onChange={this.change} ></input>
      </div>
    )
  }
}
```

### 8 综合示例

```react
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
```

