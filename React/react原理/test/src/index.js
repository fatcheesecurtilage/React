import React from 'react';
import ReactDOM from 'react-dom';

// class App extends React.Component{
//   state = {
//     count:1
//   }


//   // handleClick = () => {
//   //   // this.setState({
//   //   //   count:this.state.count +1
//   //   // })

//   //   //推荐语法
//   //   //注意：这种语法也是异步更新state的！
//   //   this.setState((state,props) => {
//   //     return {
//   //       count:state.count + 1
//   //     }
//   //   })
//   // }

//   handleClick = () => {
//     this.setState((state,props) => {
//       return {
//         count:state.count + 1
//       }
//     },
//     //状态更新后并且重新渲染后，立即执行
//     () => {
//       console.log('状态更新完成：',this.state.count)
//     }
//     )
//   }
  
//   render(){
//     return (
//       <div>
//         <h1>计数器：{this.state.count}</h1>
//         <button onClick={this.handleClick}>+1</button>
//       </div>
//     )
//   }
// }




// /*
// * 避免不必要的更新
// */
// //根组件
// class App extends React.Component{
//   state = {
//     count:0
//   }

//   //钩子函数
//   shouldComponentUpdate(nextProps,nextState){
//     // //返回false，阻止组件重新渲染
//     // return false
    
//     //最新的状态
//     console.log('最新的state：',nextState)
//     //更新前的状态
//     console.log('this.state:',this.state)

//     return true
//   }

//   handleClick = () => {
//     this.setState(state => {
//       return {
//         count:state.count +1
//       }
//     })
//   }

//   render(){
//     console.log('组件更新了')
//     return (
//       <div>
//         <h1>计数器：{this.state.count}</h1>
//         <button onClick={this.handleClick}>+1</button>
//       </div>
//     )
//   }
// }

//生成随机数
//nextstate
// class App extends React.Component{
//   state = {
//     number:10
//   }

//   //重新生成函数
//   handleClick = () => {
//     this.setState({
//       number:Math.ceil(Math.random()*2)
//     })
//   }

//   //是否重新渲染
//   shouldComponentUpdate(nextProps,nextState){
//     if(this.state === nextState){
//       return false
//     }else{
//       return true
//     }
//   }

//   render(){
//     return(
//       <div>
//         <h1>生成的随机数是:{this.state.number}</h1>
//         <button onClick={this.handleClick}>重新生成</button>
//       </div>
//     )
//   }
// }


//nextprops
// class App extends React.Component{
//   state = {
//     number:10
//   }

//   //重新生成函数
//   handleClick = () => {
//     this.setState({
//       number:Math.ceil(Math.random()*2)
//     })
//   }

//   render(){
//     return(
//       <div>
//         <NumberBox number={this.state.number}></NumberBox>
//         <button onClick={this.handleClick}>重新生成</button>
//       </div>
//     )
//   }
// }

// class NumberBox extends React.Component{
//     //是否重新渲染
//     shouldComponentUpdate(nextProps,nextState){
//       console.log('props',this.props,'nextprops',nextProps)
//       if(this.props.number === nextProps.number){
//         return false
//       }
//       return true
//     }

//   render(){
//     console.log('render')
//     return (
//       <h1>随机数：{this.props.number}</h1>
//     )
//   }
// }

/*
* 虚拟DOM和Diff算法
*/

//生成随机数
class App extends React.Component{
  state = {
    number:0
  }

  handleClick = () => {
    this.setState(() => {
      return {
        number:Math.floor(Math.random()*2)
      }
    })
  }

  //render方法调用并不意味着浏览器中的重新渲染！！！
  //render方法调用仅仅说明要进行diff
  render(){
    const el = (
      <div>
        <h1>随机数</h1>
        <p>{this.state.number}</p>
        <button onClick={this.handleClick}>重新生成</button>
      </div>
    )

    console.log('虚拟DOM对象',el)

    return el
  }
}

ReactDOM.render(<App/>,document.getElementById('root'))
