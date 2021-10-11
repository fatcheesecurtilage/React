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



# React组件进阶

### 1 组件通讯介绍

​	· 组件是独立且封闭的单元，默认情况下，只能使用组件自己的数据。在组件化过程中，我们将一个完整的功能拆分成多个组件，以更好的完成整个应用的功能。而在这个过程中，多个组件之间不可避免的要共享某些数据。

​	· 为了实现这些功能，就需要打破组件的独立封闭性，让其与外界沟通。这个过程就是**组件通讯**

### 2 组件的props

#### 2.1 基本使用

​	· 组件是封闭的，要接收外部数据应该通过props来实现

​	· props的作用：接收传递给组件的数据

​	· 传递数据：给组件标签添加属性

​	· 接收数据：函数组件通过参数props接收数据，类组件通过this.props接收数据

```react
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


//类组件
class App extends React.Component{
  render(){
    return (
      <div>
        <h1>props:{this.props.name}</h1>
      </div>
    )
  }
}

//1 传递数据
ReactDOM.render(<App name='mark' />,document.getElementById('root'))
```

#### 2.2 props特点

​	·  可以给组件传递任何类型的数据

​	·  props是只读的对象，只能读取属性的值，无法修改对象

​	·  ==注意：使用类组件时，如果写了构造函数，应该将props传递给super()，否则，无法在构造函数中获取到props==

```react
class App extends React.Component{
  constructor(props){
    //推荐将props传递给父类构造函数
    super(props)
  }
  render(){
    return (
      <div>
        <h1>props:{this.props.name}</h1>
      </div>
    )
  }
}

```

### 3 组件通讯的三种方式

#### 3.1 父组件传递数据给子组件

​	1 父组件提供要传递的state数据

​	2 给子组件标签添加属性，值为state中的数据

​	3 子组件中通过props接收父组件中传递的数据

```react
/*
* 父组件传递数据给子组件
*/

//父组件
class Parent extends React.Component{
  state = {
    lastName:'mark'
  }
  render(){
    return (
      <div>
        parent:
        <Child name = {this.state.lastName}/>
        <Child2 name = {this.state.lastName} />
      </div>
    )
  }
}

//子组件
class Child extends React.Component{
  render(){
    return (
      <div>
        child:
        {this.props.name}
      </div>
    )
  }
}

//子组件2
const Child2 = props => {
  return(
    <div>
      child:
      {props.name}
    </div>
  )
}
```

#### 3.2 子组件传递数据给父组件

​	· 思路：利用回调函数，父组件提供回调，子组件调用，将要传递的数据作为回调函数的参数

​	1 父组件提供一个回调函数(用于接收数据)

​	2 将该函数作为属性的值，传递给子组件

​	3 子组件通过props调用回调函数

​	4 将子组件的数据作为参数传递给回调函数

​	==注意：回调函数中this指向问题==

```react
/*
* 子组件传递参数给父组件
*/
 
//父组件
class Parent extends React.Component{
  state = {
    data:''
  }
  //父组件接收数据
  getMsg = data => {
    this.setState({
      data:data
    })
  }
  render(){
    return(
      <div>
        父组件：{this.state.data}
        <Child getMSG = {this.getMsg}/>
      </div>
    )
  }
}

//子组件
class Child extends React.Component{
  state = {
    data:'1111'
  }
  handle = () => {
    this.props.getMSG(this.state.data)
  }
  render(){
    return (
      <div>
        子组件 <button onClick={this.handle}>点我，给父组件传递数据</button>
      </div>
    )
  }
}
```

#### 3.3 兄弟组件之间传值

​	· 将共享状态提升到最近的公共父组件中，由公共父组件管理这个状态

​	· 思想：状态提升

​	· 公共父组件职责：1 提供共享状态  2 提供操作共享状态的方法

​	· 要通讯的子组件只需通过props接收状态或操作状态的方法即可

```react
//兄弟组件之间传值
//公共父组件
class Parent extends React.Component{
  state = {
    pdata:''
  }
  getmsg = data => {
    this.setState({
      pdata:data
    })
  }
  render(){
    return(
      <div>
        <Child2 getMsg = {this.getmsg}/>
        <Child1 name = {this.state.pdata}/>
      </div>
    )
  }
}

//子组件1
class Child1 extends React.Component{
  render(){
    return(
      <div>
        {this.props.name}
      </div>
    )
  }
}


//子组件2
class Child2 extends React.Component{
  state = {
    child2data:'2'
  }
  handle = () => {
    this.props.getMsg(this.state.child2data)
  }
  render(){
    return(
      <div>
        <button onClick={this.handle}>将数据传递到父组件</button>
      </div>
    )
  }
}
```

###  4 Context

​	作用：跨组件传递数据(比如：主题、语言等)

​	**使用步骤：**

​	1 调用React.createContext()创建Provider(提供数据)和Consumer(消费数据)两个组件。

```react
const {Provider,Consumer} = React.createContext()
```

​	2 使用Provider组件作为父节点

```html
 <Provider>
   <div>
   	<Node />
   </div>
 </Provider>
```

​	3 设置value属性，表示要传递的数据

```react
<Provider value="pink">
```

​	4 调用Consumer组件接收数据

```react
<Consumer>
  {
  	data => <span>我是子节点 -- {data}</span>
  }
</Consumer>
```

==全部程序==

```react
/*
* context的基本使用
*/

//创建context得到两个组件
const {Provider,Consumer} = React.createContext()

class App extends React.Component{
  render(){
    return(
      <Provider value="pink">
        <div>
          <Node />
        </div>
      </Provider>
    )
  }
}

const Node = props => {
  return (
    <div>
      <SubNode />
    </div>
  )
}

const SubNode = props => {
  return (
    <div>
      <Child />
    </div>
  )
}

const Child = props => {
  return <div>
    <Consumer>
      {
        data => <span>我是子节点 -- {data}</span>
      }
    </Consumer>
  </div>
}
```

### 5 props深入

#### 5.1 children属性

​	· children属性:表示组件标签的子节点。当组件标签有子节点时，props就会有该属性

```react
const App = props =>{
  console.log(props)
  return(
    <div>
      <h1>组件标签的子节点</h1>
      {props.children}
    </div>
  )
}

ReactDOM.render(<App>我是子节点</App>,document.getElementById('root'))
```

​	· children属性与普通的props一样，值可以是任意值(文本、React元素、组件，甚至是函数)

```react
/*
* children属性
*/


const App = props =>{
  console.log(props)
  props.children()
  return(
    <div>
      <h1>组件标签的子节点</h1>
      {/* {props.children} */}
    </div>
  )
}

ReactDOM.render(
  <App>
    {() => console.log('这是一个函数子节点')}
  </App>,
  document.getElementById('root')
)

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
```

#### 5.2 props校验

​	· 对于组件来说，props是外来的，无法保证组件使用者传入什么格式的数据

​	· 如果传入的数据格式不对，可能会导致组件内部报错

​	==· 关键问题：组件使用这不知道明确的错误原因==

​	· props校验：允许在创建组件的时候，就指定props的类型、格式等

​	· 作用：捕获使用组件时因props导致的错误，给出明确的错误提示，增加组件的健壮性

​	**使用步骤**

​	1 安装包`prop-types(yarn add prop-types/npm i prop-types)`

​	2 导入prop-types包

​	3 使用组件名.propTypes = {}来给组件的props添加校验规则

​	4 校验规则通过PropTypes对象来指定

```react
/*
* props校验
*/


import PropTypes from 'prop-types'

const App = props =>{
  const arr = props.colors
  const lis = arr.map((item,index) => <li key={index}>{item.index}</li>)
  return <ul>{lis}</ul>
}

//添加props校验
App.propTypes = {
  //约定colors属性为array
  //如果类型不对，则报出明确错误，便于分析错误原因
  colors:PropTypes.array
}

ReactDOM.render(<App colors={19}></App>,document.getElementById('root'))
```

**约束规则**

​	1 常见类型：array、bool、func、number、object、string

​	2 React元素类型:element

​	3 必填项:isRequired

​	4 特定结构的对象:shape({})

```react
//常见类型
optionalFunc:PropTypes.func
//必选
requiredFunc:PropTypes.func.isRequired
//特定结构的对象
optionalObjectWithShape:PropTypes.shape({
	color:PropTypes.string,
	fontSize:PropTypes.number
})
```

**示例**

```react
/*
* props常用规则校验
*/

import PropTypes from 'prop-types'

const App = props => {
  return(
    <div>
      <h1>props校验：</h1>
    </div>
  )
}

//添加props校验
//属性a的类型：                       数值(number)
//属性fn的类型：                      函数(func)并且为必填项
//属性tag的类型：                     React元素(element)
//属性filter的类型：                  对象({area:'上海'，price：1999})
App.PropTypes = {
  a:PropTypes.number,
  fn:PropTypes.func.isRequired,
  tag:PropTypes.element,
  filter:PropTypes.shape({
    area:PropTypes.string,
    price:PropTypes.number
  })
}


ReactDOM.render(<App/>,document.getElementById('root'))
```

#### 5.3 props的默认值

​	· 场景：分页组件 ➡️ 每页显示条数

​	· 作用：给props设置默认值，在未传入props时生效

```react
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
```

### 6 组件的生命周期

#### 6.1 组件的生命周期概述

​	· 意义：组件的生命周期有助于理解组件的运行方式、完成更复杂的组件功能、分析组件错误原因等

​	· 组件的生命周期：组件从被创建到挂载到页面中运行，再到组件不用时卸载的过程

​	· 生命周期的每个阶段总是伴随着一些方法调用，这些方法就是生命周期的钩子函数

​	· 钩子函数的作用：为开发人员在不同阶段操作组件提供了时机

​	==· 只有类组件才有生命周期==

#### 6.2 生命周期的三个阶段

![image-20211009223129897](/Users/mark/Library/Application Support/typora-user-images/image-20211009223129897.png)

​	**1 创建时(挂载阶段)**

​	· 执行时机：组件创建时(页面加载时)

​	· 执行顺序

​		constructor()  --->   render()   ------->    componentDidMount

​	

| 钩子函数          | 触发时机                | 作用                                        |
| ----------------- | ----------------------- | ------------------------------------------- |
| constructor       | 创建组件时，最先执行    | 1 初始化state<br />2 为事件处理程序绑定this |
| render            | 每次组件渲染都会触发    | 渲染UI(注意：==不能调用setState==)          |
| componentDidMount | 组件挂载(完成Dom渲染)后 | 1 发送网络请求<br/>2 DOM操作                |

​	**2 更新时(更新阶段)**

​	· 执行时机：1 setState()    2 forceUpdate()  3 组件接收到新的props

​	· 说明：以上三者任意一种变化，组件就会重新渲染

```react
/*
* 组件生命周期--更新时
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


    //强制更新
    this.forceUpdate()
  }

  render(){
    console.log('生命周期钩子函数：render')
    return(
      <div>
        <Counter count = {this.state.count} />
        <button onClick={this.handleClick} >打豆豆</button>
      </div>
    )
  }
}

class Counter extends React.Component{
  render(){
    console.log('--子组件--生命周期钩子函数：render')
    return <h1>统计豆豆被打的次数:{this.props.count}</h1>
  }
}
```

​	· 执行顺序

​		render()  ---->  componentDidUpdate()

| 钩子函数           | 触发时机                | 作用                                                         |
| ------------------ | ----------------------- | ------------------------------------------------------------ |
| render             | 每次组件渲染都会触发    | 渲染UI(与挂载阶段是同一个render)                             |
| componentDidUpdate | 组件更新(完成DOM渲染)后 | 1 发送网络请求<br/>2 DOM操作<br/>注意：如果要setState()必须放在一个if条件中 |

```react
class Counter extends React.Component{
  render(){
    console.log('--子组件--生命周期钩子函数：render')
    return <h1>统计豆豆被打的次数:{this.props.count}</h1>
  }

  //注意：如果要调用setState()更新状态，必须放在一个if条件中
  //因为：如果直接调用setState()更新状态，也会导致递归更新！！！

  componentDidUpdate(preProps){
    //正确做法：
    //做法：比较更新前后的props是否相同，来决定是否重新渲染组件
    console.log('上一次的props：',preProps,'当前的props',this.props)
    if(preProps.count !== this.props.count){
      this.setState({})
    }

    //错误演示！！！
    //this.setState({})

    //获取Dom
    const title = document.getElementById('title')
    console.log(title.innerHTML)
  }
}
```

​	**3 卸载时(卸载阶段)**

​	· 执行时机：组件从页面中消失

| 钩子函数             | 触发时机               | 作用                             |
| -------------------- | ---------------------- | -------------------------------- |
| componentWillUnmount | 组件卸载(从页面中消失) | 执行清理工作(比如：清理定时器等) |

```react
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
```

#### 6.3 不常用的生命周期

![截屏2021-10-09 下午11.17.54](/Users/mark/Desktop/截屏2021-10-09 下午11.17.54.png)

![image-20211009232137302](/Users/mark/Library/Application Support/typora-user-images/image-20211009232137302.png)

### 7 render-props和高阶组件

#### 7.1 React组件复用概述

​	· 思考：如果两个组件中的部分功能相似或相同，该如何处理？

​	· 处理方式：复用相似的功能(联想函数封装)

​	· 复用什么？1 state    2 操作state的方法(组件状态逻辑)

​	· 两种方式复用：1 render props模式         2 高阶组件(HOC)

​	· 注意：这两种方法不是新的API，而是利用React自身特点的编码技巧，演化而成的固定模式(写法)

#### 7.2 render props模式

**思路分析**

· 思路：将要复用的state和操作state的方法封装到一个组件中

· 问题1:如何拿到该组件中复用的state？

· 在使用组件时，添加一个值为==函数的prop==，通过函数参数来获取(需要组件内部实现)

· 问题2:如何渲染任意UI

· 使用该==函数的返回值==作为要渲染的UI内容(需要组件内部实现)

**使用步骤**

1 创建Mouse组件，在组件中提供复用的状态逻辑代码(1 状态    2 操作状态的方法)

2 将要复用的状态作为props.render(state)方法的参数，暴露到组件外部

3 使用props.render()返回值作为要渲染的内容

```react
/*
* render props模式
*/

//创建Mouse组件
class Mouse extends React.Component{
  //鼠标位置state
  state = {
    x:0,
    y:0
  }
  //鼠标移动事件的事件处理程序
  handleMouseMove = e => {
    this.setState({
      x:e.clientX,
      y:e.clientY
    })
  }

  //监听鼠标移动事件
  componentDidMount(){
    window.addEventListener('mousemove',this.handleMouseMove)
  }

  render(){
    // return (
    //   <div>
    //     {this.state.x},{this.state.y}
    //   </div>
    // )

    return this.props.render(this.state)
  }
}

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>render props模式</h1>
        <Mouse render = {mouse =>{
          return(
            <p>
              鼠标位置：{mouse.x} {mouse.y}
            </p>
          )
        }} />
      </div>
    )
  }
}
```

**演示Mouse组件的复用**

· Mouse组件负责：==封装复用的状态逻辑代码==(1 状态   2 操作状态的方法)

· 状态：鼠标坐标(x，y)

· 操作状态的方法：鼠标移动事件

· 传入的render prop负责:使用复用的状态来渲染UI结构

```react
class App extends React.Component{
  render(){
    return(
      <div>
        <h1>render props模式</h1>
        <Mouse render = {mouse =>{
          // return(
          //   <p>
          //     鼠标位置：{mouse.x} {mouse.y}
          //   </p>
          // )
          {/* 猫捉老鼠 */}
          return(
            <img src={img} alt='cat'  style={{
              position:'absolute',
              top:mouse.y,
              left:mouse.x,
              width:'20px'
            }}/>
          )
        }} />
      </div>
      
    )
  }
}
```

**children代替render属性**

· 注意：并不是该模式叫render props就必须使用名为render的prop，实际上可以使用任意名称的props

· 把prop是一个函数并且告诉组件要渲染什么内容的技术叫做：render props模式

· 推荐：使用children代替render属性

```react
/*
* 用children代替render
*/
class App extends React.Component{
  render(){
    return(
      <div>
        <Mouse>
          {
            mouse => {
              return(
                <p>
                  鼠标位置：{mouse.x} {mouse.y}
                </p>
              )  
            }
          }
        </Mouse>
        <Mouse>
          {
            mouse =>{
              return(
                <img src={img} alt='cat'  style={{
                  position:'absolute',
                  top:mouse.y,
                  left:mouse.x,
                  width:'20px'
                }}/>
              )
            }
          }
        </Mouse>
      </div>
    )
  }
}
```

**代码优化**

1 推荐：给render props模式添加props校验

```react
//添加props校验
Mouse.propTypes = {
  children:PropTypes.func.isRequired
}
```

==注意：Mouse.propTypes中的p是小写，而下面的是大写==

2 应该在组件卸载时解除mousemove事件绑定

```react
//页面卸载时解除mousemove绑定
componentWillUnmount(){
	window.removeEventListener('mousemove',this.handleMouseMove)
}
```

### 7.3 高阶组件

**概述**

· 目的：实现状态逻辑复用

· 采用包装(装饰)模式，比如手机壳

· 手机：获取保护功能

· 手机壳：提供保护功能

· 高阶组件就相当于手机壳，通过包装组件，增强组件功能

**思路分析**

· 高阶组件(HOC,Higher-Order Component)是一个函数，接收要包装的组件，返回增强后的组件

· 高阶组件内部创建一个类组件，在这个类组件中提供复用的状态逻辑代码，通过prop将复用的状态传递给被包装组件WrappedComponent

**使用步骤**

1 创建一个函数，名称约定以==with==开头

2 指定函数参数，参数应该以大写字母开头(作为要渲染的组件)

3 在函数内部创建一个类组件，==提供复用的状态逻辑代码==，并返回

4 在该组件中，渲染参数组件，同时将状态通过prop传递给参数组件

5 调用该高阶组件，传入要增强的组件，通过返回值拿到增强后的组件，并将其渲染到页面中

```react
/*
* 高阶组件
*/
//创建高阶组件
function withMouse(WrappedComponent){
  //该组件提供复用的状态逻辑
  class Mouse extends React.Component{
    //鼠标状态
    state = {
      x:0,
      y:0
    }

    //控制鼠标状态的逻辑
    componentDidMount(){
      window.addEventListener('mousemove',this.mousemove)
    }

    componentWillUnmount(){
      window.removeEventListener('mousemove',this.mousemove)
    }

    //获取鼠标状态，并赋值给state
    mousemove = e => {
      this.setState({
        x:e.clientX,
        y:e.clientY
      })
    }

    //渲染组件
    render(){
      return(
        <WrappedComponent {...this.state}></WrappedComponent>
      )
    }
  }
  return Mouse
}



//用来测试高阶组件
const Position = props => (
  <p>
    鼠标当前位置：(x:{props.x},y:{props.y})
  </p>
)

//获取增强后的组件
const MousePosition =  withMouse(Position)

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>高阶组件</h1>
        {/* 渲染增强后的组件 */}
        <MousePosition/>
      </div>
    )
  }
}
```

**设置displayName**

· 使用高阶组件存在的问题：得到的两个组件名称相同

· 原因：默认情况下，React使用组件名称作为displayName

· 解决方式：为高阶组件设置displayName便于调试时区分不同的组件

· displayName的作用：用于设置调试信息(React Developer Tools信息)

· 设置方式

```react
  Mouse.displayName = `WithMouse${getDisplayName(WrappedComponent)}`

//获取dispalyname
function getDisplayName(WrappedComponent){
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}
```

**传递props**

· 问题：props丢失

· 原因：高阶组件没有往下传递props

· 解决方法：渲染WrappedComponent时，将state和this.props一起传递给组件

· 传递方式：

```react
<WrappedComponent {...this.state} {...this.props}></WrappedComponent>
```



# React 原理揭秘

### 1 setState()的说明

#### 1.1 更新数据

​	==· setState()是异步更新数据的==

​	· 注意：使用该语法时，后面的setState()不要依赖于前面的setState()

​	· 可以多次调用setState()，但只会触发一次重新渲染

#### 1.2 推荐语法

​	· 推荐：使用setState(((state,props) => {}))语法

​	· 参数state：表示最新的state

​	· 参数props：表示最新的props

```react
class App extends React.Component{
  state = {
    count:1
  }


  handleClick = () => {
    // this.setState({
    //   count:this.state.count +1
    // })

    //推荐语法
    //注意：这种语法也是异步更新state的！
    this.setState((state,props) => {
      return {
        count:state.count + 1
      }
    })
  }
  
  render(){
    return (
      <div>
        <h1>计数器：{this.state.count}</h1>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}
```

#### 1.3 第二个参数

​	· 场景：在状态更新(页面完成重新渲染)后立即执行某个操作

​	· 语法：setState(updater[,callback])

```react
handleClick = () => {
    this.setState((state,props) => {
      return {
        count:state.count + 1
      }
    },
    //状态更新后并且重新渲染后，立即执行
    () => {
      console.log('状态更新完成：',this.state.count)
    }
    )
  }
```

### 2  JSX语法的转化过程

​	· JSX仅仅是createElement()方法的语法糖(简化语法)

​	· JSX语法被@babel/preset-react插件编译为createElement()方法

​	· React元素：是一个对象，用来描述你希望在屏幕上看到的内容

![image-20211011211352632](/Users/mark/Library/Application Support/typora-user-images/image-20211011211352632.png)

### 3 组件更新机制

​	· setState()的两个作用：1 修改state     2 更新组件(UI)

​	· 过程：父组件重新渲染时，也会重新渲染子组件。但只会渲染当前组件子树(当前组件及其所有子组件)

![image-20211011213136440](/Users/mark/Library/Application Support/typora-user-images/image-20211011213136440.png)
