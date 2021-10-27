import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {inject,observer } from 'mobx-react';
//inject是注入的意思
@inject("RootStore") 
@observer//观察数值是否发生改变
class Index extends Component{
    handleClick = () => {
        if(this.props.RootStore.name == "悟空"){
            this.props.RootStore.changeName("八戒")
        }else{
            this.props.RootStore.changeName("悟空")
        }
    }
    render(){
        console.log(this)
        return (
            <View>
                <Text onPress={this.handleClick}>
                    Btn:{this.props.RootStore.name}
                </Text>
            </View>
        )
    }
}

export default Index