import React, { Component } from 'react'
import { Text, View, Image, StatusBar } from 'react-native'
import { pxToDp } from '../../utils/styleKits'
import Icon from 'react-native-vector-icons';
import { Input } from 'react-native-elements';
import validatePhone  from '../../utils/validator';
import request from '../../utils/request';
import { useToast} from 'native-base';
// import {Toast} from 'teaset';

export class index extends Component {
    state={
        phone:'',
        phoneValid:true,//手机号码是否合法
    }

    constructor(props){
        super(props);
        // this.state.toast = useToast();
        // Toast.message('toast')
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
        request.post("/user/login",{
            phone:this.state.phone
        }).then(res => {
            // toast.show()
        })
       
       
    }
    render() {
        
        return (
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
                        <Input
                        placeholder='请输入手机号码'
                        maxLength={11}
                        keyboardType="phone-pad"
                        value={this.state.phone}
                        errorMessage={this.state.phoneValid?'':'输入号码的格式有误'}
                        onChangeText={this.phoneNumberChangeText}
                        onSubmitEditing={this.phonenumberSubmit}
                        leftIcon={{ type: 'font-awesome', name: 'phone' }}
                        />
                        
                    </View>
                    {/* 2.1登录结束 */}
                    <Text>{this.state.phone}</Text>
                    
                </View>
                {/* 2.0内容结束 */}

            </View>
            
        )
    }
}

export default index
