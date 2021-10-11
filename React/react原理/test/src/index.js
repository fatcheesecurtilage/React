import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  state = {
    count:1
  }


  // handleClick = () => {
  //   // this.setState({
  //   //   count:this.state.count +1
  //   // })

  //   //推荐语法
  //   //注意：这种语法也是异步更新state的！
  //   this.setState((state,props) => {
  //     return {
  //       count:state.count + 1
  //     }
  //   })
  // }

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
  
  render(){
    return (
      <div>
        <h1>计数器：{this.state.count}</h1>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'))
