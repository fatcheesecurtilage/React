import React from "react";
import { Route } from "react-router-dom";
import New from '../New'
import Main from '../index'
import HouseList  from "../HouseList";
import Profile from "../Profile";
// 导入tabbar组件
import { TabBar } from 'antd-mobile';

//导入css样式
import './index.css'

//Tabbar 数据
const tabItems = [
    {
        title:'首页',
        icon:'icon-ind',
        path:'/home/index'
    },
    {
        title:'找房',
        icon:'icon-findHouse',
        path:'/home/list'
    },
    {
        title:'资讯',
        icon:'icon-infom',
        path:'/home/news'
    },
    {
        title:'我的',
        icon:'icon-my',
        path:'/home/profile'
    }
]

export default class Home extends React.Component{
    
    state = {
      //默认选中的Tabbar菜单栏
      selectedTab: this.props.location.pathname,
    }

    //渲染Tabbar.item
    renderTabBarItem(){
        return tabItems.map(item => 
        <TabBar.Item
            title={item.title}
            key={item.path}
            icon={
                <i className={`iconfont ${item.icon}`}></i>
            }
            selectedIcon={
                <i className={`iconfont ${item.icon}`}></i>
            }
            selected={this.state.selectedTab === item.path}
            
            onPress={() => {
                this.setState({
                    selectedTab: item.path,
                });
                //路由切换
                this.props.history.push(item.path)
            }}
        >
        </TabBar.Item>)
    }

    render(){
        return (
            <div className='home'>
                {/* 渲染子路由 */}
                <Route path='/home/news' component={New}></Route>
                <Route path='/home/index' component={Main} ></Route>
                <Route path='/home/list' component={HouseList}></Route>
                <Route path='/home/profile' component={Profile}></Route>
                {/* tabbar组件 */}
                <div >
                    <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#06AE68"
                    barTintColor="white"
                    noRenderContent={true}
                    >

                    {this.renderTabBarItem()}

                    {/* <TabBar.Item
                        title="首页"
                        key="Home"
                        icon={
                            <i className='iconfont icon-ind'></i>
                        }
                        selectedIcon={
                            <i className='iconfont icon-ind'></i>
                        }
                        selected={this.state.selectedTab === '/home/index'}
                        
                        onPress={() => {
                            this.setState({
                                selectedTab: '/home/index',
                            });
                            //路由切换
                            this.props.history.push('/home/index')
                        }}
                        data-seed="logId"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <i className='iconfont icon-findHouse'></i>
                        }
                        selectedIcon={
                            <i className='iconfont icon-findHouse'></i>
                        }
                        title="找房"
                        key="House"
                        
                        selected={this.state.selectedTab === '/home/list'}
                        onPress={() => {
                            this.setState({
                                selectedTab: '/home/list',
                            });
                            //路由切换
                            this.props.history.push('/home/list')
                        }}
                        data-seed="logId1"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <i className='iconfont icon-infom'></i>
                        }
                        selectedIcon={
                            <i className='iconfont icon-infom'></i>
                        }
                        title="资讯"
                        key="News"
                        
                        selected={this.state.selectedTab === '/home/news'}
                        onPress={() => {
                            this.setState({
                                selectedTab: '/home/news',
                            });
                            //路由切换
                            this.props.history.push('/home/news')
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <i className='iconfont icon-my'></i>
                        }
                        selectedIcon={
                            <i className='iconfont icon-my'></i>
                        }
                        title="我的"
                        key="my"
                        selected={this.state.selectedTab === '/home/profile'}
                        onPress={() => {
                            this.setState({
                                selectedTab: '/home/profile',
                            });
                            //路由切换
                            this.props.history.push('/home/profile')
                        }}
                    >
                    </TabBar.Item> */}
                    </TabBar>
                </div>
            </div> 
        )
    }
            
}



        