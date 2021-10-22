import React from "react";
import { NavBar } from "antd-mobile";
import { withRouter } from "react-router";

//导入props
import PropTypes from "prop-types"

// import { render } from "react-dom";
function NavHeader({children,history,onLeftClick}){
    const defaultLeft = () => history.go(-1)
    return (
        <NavBar
            className='navbar'
            mode="light"
            icon={<i className='iconfont icon-back' />}
            onLeftClick={onLeftClick||defaultLeft}
        >
            {children}
        </NavBar>
    )
}

NavHeader.propTypes = {
    children:PropTypes.string.isRequired,
    onLeftClick:PropTypes.func
}

export default withRouter(NavHeader)

// export default class NavHeader extends React.Component{
//     componentDidMount(e){
//         console.log(e)
//     }
//     render(){
//         return(
//             <NavBar
//                 className='navbar'
//                 mode="light"
//                 icon={<i className='iconfont icon-back' />}
//                 onLeftClick={() => this.props.history.go(-1)}
//             >
                
//             </NavBar>
//         )
//     }
// }