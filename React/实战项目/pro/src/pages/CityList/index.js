import React from "react";
import { NavBar } from 'antd-mobile';
import '../../assets/fonts/iconfont.css'
import './index.scss'
import axios from "axios";

import { getCurrentCity } from "../../utils";

//导入list组件
import { List,AutoSizer } from "react-virtualized";

// //列表数据大的数据源
// const list = Array(100).fill('react')



//索引的高度
const TITLE_HEIGHT = 36
//每个城市名称的高度
const NAME_HRIGHT = 50


//格式化数据的方法
const formatCityData = (list) => {
    var cityList = {}
    var cityIndex = []
    list.forEach(item => {
        var name = item.short.substr(0,1)
        if(cityList[name]){
            cityList[name].push(item)
        }else{
            cityList[name] = [item]
        }
    });

    cityIndex = Object.keys(cityList).sort()
    return {
        cityList,
        cityIndex
    }
}

//封装处理字母索引的方法
const formatCityIndex = (letter) => {
    switch (letter){
        case '#':
            return '当前定位'
        case 'hot':
            return '热门城市'
        default:
            return letter.toUpperCase()
    }
}
export default class CityList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cityIndex:[],//城市索引
            cityList:{},//城市列表
            activeIndex:0,//选中的索引
        }
        this.cityListComponent = React.createRef()
    }
    

    async componentDidMount(){
        await this.getCityList()

        //调用measureAllRows，提前计算List中每一行的高度，实现精确跳转
        this.cityListComponent.current.measureAllRows()
    }

    //获取城市列表
    async getCityList(){
        const res = await axios.get('http://192.168.31.217:8080/area/city?level=1')
        const {cityList,cityIndex} = formatCityData(res.data.body)
        
        //获取热门城市并添加
        const hotRes = await axios.get('http://192.168.31.217:8080/area/hot')
        cityList['hot'] = hotRes.data.body
        //添加索引
        cityIndex.unshift('hot')

        //获取当前定位城市
        const curCity = await getCurrentCity()
        cityList['#'] = [curCity]
        cityIndex.unshift('#')

        this.setState({
            cityIndex:cityIndex,
            cityList:cityList
        })
    }

    //渲染每一行函数的渲染函数
    //函数的返回值就表示最终渲染在页面中的内容
    rowRenderer = ({
        key,
        index,//索引号
        isScrolling,//当前项是否是在滚动中
        isVisible,//当前项在list中是可见的
        style,//注意：重点属性，一定要给每一行数据添加该样式！作用：指定每一行的位置
    }) => {
        //获取每一行的索引
        const {cityIndex} = this.state
        const letter = cityIndex[index]
        const cityletter = this.state.cityList[letter]
        return (
            <div 
                key={key}
                style={style}
                className='city'
            >
                <div className='title'>{formatCityIndex(letter)}</div>
                    {
                        cityletter.map(item => (
                            <div className='name' key={item.value}>
                                {item.label}
                            </div>
                        ))
                    }
            </div>
        )
    }

    //获取高度的算法
    getHeight = ({ index }) => {
        var cityIndex = this.state.cityIndex;
        var cityList = this.state.cityList;
        var number = cityList[cityIndex[index]].length;
        return TITLE_HEIGHT + NAME_HRIGHT*number
    }

    //渲染右侧索引列表
    renderList(){
        const {cityIndex,activeIndex} = this.state;
        return (
            cityIndex.map((item,index) => (
                <li 
                    className='city-index-item' 
                    key = {item}
                    onClick = {() => {
                        this.cityListComponent.current.scrollToRow(index)
                    }} 
                >
                    <span className={activeIndex==index ? 'index-active':''} >{item==='hot' ? '热':item.toUpperCase()}</span>
                </li>
            ))
        )
    }

    //右侧索引高亮
    onRowsRendered = ({startIndex}) => {
        if(this.state.activeIndex !== startIndex){
            this.setState({
                activeIndex:startIndex
            })
        }
    }

    render(){
        return (
            <div className='citylist'>
                {/* 顶部导航栏 */}
                <NavBar
                    className='navbar'
                    mode="light"
                    icon={<i className='iconfont icon-back' />}
                    onLeftClick={() => this.props.history.go(-1)}
                >城市选择</NavBar>

                {/* 城市列表 */}
                <AutoSizer>
                    {({width,height}) => 
                        <List
                        width={width}
                        height={height}
                        rowCount={this.state.cityIndex.length}
                        rowHeight={this.getHeight}
                        rowRenderer={this.rowRenderer}
                        onRowsRendered={this.onRowsRendered}
                        ref={this.cityListComponent}
                        scrollToAlignment='start'
                        />
                    }
                </AutoSizer>

                {/* 右侧索引列表 */}
                <ul className='city-index'>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}