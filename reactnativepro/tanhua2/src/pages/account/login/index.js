import React, { Component } from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { InputItem,List,Toast,Button,Provider } from '@ant-design/react-native';
import { pxToDp } from '../../utils/styleKits';
import validatePhone  from '../../utils/validator';
import request from '../../utils/request';

export class index extends Component {
    state={
        phone:'',
        phoneValid:true,//手机号码是否合法
    }

    constructor(props){
        super(props);
        // this.state.toast = useToast();
    }

    //手机号码输入值改变
    phoneNumberChangeText = (phonenumber) => {
        // console.log(this.state.toast)
        this.setState({
            phone:phonenumber
        })
    }

    //手机号码点击完成的时候出发
    phonenumberSubmit = () => {
        const  {phone} = this.state;
        const phoneValid = validatePhone.validatePhone(phone);
        this.setState({phoneValid})
        if(!phoneValid){
            return;
        }
        console.log(2)
        request.post("/user/login",{
            phone:this.state.phone
        }).then(res => {
            Toast.info('已发送验证码，注意查收', 0.5);
        })
       
       
    }
    render() {
        
        return (
            <Provider>
                <View >
                    {/* 0.0状态栏开始 */}
                    <StatusBar backgroundColor="transparent"/>
                    {/* 0.0状态栏结束 */}
                    {/* 1.0背景图片开始 */}
                    {/* height单位是dp 并非px */}
                    <Image source={require("../../../../assets/back.png")} style={{height:pxToDp(200)}}/>
                    {/* 1.0背景图片结束 */}
                    
                    {/* 2.0内容开始 */}
                    <View style={{padding:pxToDp(20)}}>
                        {/* 2.1登录开始 */}
                        <View>
                            {/* 标题 */}
                            <View><Text>手机号登录注册</Text></View>
                            {/* 输入框 */}
                            <List>
                                <InputItem
                                placeholder='请输入手机号码'
                                type="number"
                                maxLength={11}
                                value={this.state.phone}
                                onChange={this.phoneNumberChangeText}
                                
                                />
                            </List>
                            <Button 
                                onPress={this.phonenumberSubmit}
                            >发送验证码</Button>
                        </View>
                        {/* 2.1登录结束 */}
                        
                    </View>
                    {/* 2.0内容结束 */}

                </View>
            </Provider>
            
        )
    }
}

export default index
