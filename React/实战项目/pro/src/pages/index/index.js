import React from "react";
import { 
    Carousel,
    Flex,
    Grid,
    List
} from 'antd-mobile';
import './index.scss'
import axios from 'axios';

//导入图片
import nav1 from '../../assets/Home/nav-1.png';
import nav2 from '../../assets/Home/nav-2.png';
import nav3 from '../../assets/Home/nav-3.png';
import nav4 from '../../assets/Home/nav-4.png';

const Item = List.Item;
export default class Main extends React.Component{
    state = {
        Swiper:[],
        showSwiper:false,
        ImgHeight:212,
        menus:[
            {
                id:'1',
                icon:nav1,
                title:'整租',
                path:'/home/list'
            },
            {
                id:'2',
                icon:nav2,
                title:'合租',
                path:'/home/list'
            },
            {
                id:'3',
                icon:nav3,
                title:'地图找房',
                path:''
            },
            {
                id:'4',
                icon:nav4,
                title:'去出租',
                path:''
            }
        ],
        data1:[],
        newsmsg:[]
    }

    //获取轮播图的方法
    async getSwipers(){
        const res = await axios.get('http://192.168.31.217:8080/home/swiper')
        this.setState({
            Swiper:res.data.body,
            showSwiper:true
        })
    }

    componentDidMount() {
        this.getSwipers();
        this.getGroupMsg();
        this.getNews();
    }

    //渲染轮播图
    renderSwiper (){
        return this.state.Swiper.map(item => (
            <a
            key={item.id}
            style={{ display: 'inline-block', width: '100%', height:this.state.ImgHeight }}
            >
            <img
                src={`http://192.168.31.217:8080${item.imgSrc}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
            />
            </a>
        ))
    }

    //渲染菜单栏
    renderMenus(){
        return this.state.menus.map(item => (
            <Flex.Item 
                key={item.id}
                id='menuslist' 
                onClick={() => this.props.history.push(item.path)
            }>
                <img src={item.icon} width="60px"></img>
                <div >{item.title}</div>
            </Flex.Item>
        ))
    }
    
    //获取租房小组信息
    getGroupMsg(){
        var that = this;
        axios.get('http://192.168.31.217:8080/home/groups',{
            params:{
                area:'AREA%7C88cff55c-aaa4-e2e0'
            }
        })
        .then(res => {
            that.setState({
                data1:res.data.body
            })
        })
    }

    //获取资讯信息
    getNews(){
        axios.get('http://192.168.31.217:8080/home/news',{
            params:{
                area:'AREA%7C88cff55c-aaa4-e2e0'
            }
        })
        .then(res => {
            this.setState({
                newsmsg:res.data.body
            })
        })
    }

    //渲染最新资讯
    renderNews(){
        return (
            this.state.newsmsg.map(item => (
                <div className='newsitem'>
                    <div className='newsleft'>
                        <img src={`http://192.168.31.217:8080${item.imgSrc}`} width="130"></img>
                    </div>
                    <div className='newsright'>
                        <div >
                            {item.title}
                        </div>
                        <div >
                            <span>{item.from}</span>
                            <span>{item.date}</span>
                        </div>
                    </div>
                </div>
            ))
        )
    }

    render(){
        return(
            <div >
                {/* 轮播图 */}
                <div className='swiperBox'>
                    {this.state.showSwiper?
                        <Carousel
                        autoplay
                        infinite
                        autoplayInterval={5000}
                        >
                        {this.renderSwiper()}
                        </Carousel>
                        :' '
                    }
                </div>

                {/* 菜单栏 */}
                <div className='menus'>
                    <Flex align='center' className='menusBox'>
                        {this.renderMenus()}
                    </Flex>
                </div>
                
                {/* 租房小组 */}
                <div className='group'>
                    <div className='grouptitle'>
                        租房小组<span>更多</span>
                    </div>
                    <Grid
                        className='groupBox' 
                        data={this.state.data1}
                        square={false}
                        hasLine={false}
                        columnNum={2}
                        renderItem={item => (
                            <div className='groupitem'>
                                <div className='groupleft'>
                                    <div>
                                        {item.title}
                                    </div>
                                    <div className='groupleftmsg'>
                                        {item.desc}
                                    </div>
                                </div>
                                <div className='groupright'>
                                    <img src={`http://192.168.31.217:8080${item.imgSrc}`}></img>
                                </div>
                            </div>
                        )}
                    />
                </div>

                {/* 最新资讯 */}
                <div className='new'>
                    <div className='newtitle'>
                        最新资讯
                    </div>
                    <div className='newmsg'>
                        {this.renderNews()}
                    </div>
                    <div className='bottom'>
                        ~到底了~
                    </div>
                </div>
            </div>
        )
    }
}