# React-Native

## 常见的标签

### 1 Dimensions 获取屏幕的宽高像素

```react
import { View,Text,Dimensions }  from "react-native";
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get("window").height);
```

### 2 变换

```react
<Text style={{transform:[{translateY:200},{scale:1}],backgroundColor:"red"}}>
          JSX1111
</Text>
```

==注意：变换需要用以下形式包裹==

```react
[
	{
		translateY:200
	},
	{
		scale:1
	}
]
```

### 3 TouchableOpacity

可以绑定点击事件的块级标签

​	· 相当于块级的容器

​	· 支持点击事件 `onpress`

​	· 可以设置点击时的透明度

```
<TouchableOpacity activeOpacity={0.5} onPress={this.hanleclick}></TouchableOpacity>
```

| 参数          | 作用             |
| ------------- | ---------------- |
| activeOpacity | 点击时设置透明度 |
| onPress       | 点击事件         |

==注意：View标签不支持点击事件==

### 4 Image

​	· 渲染本地图片时

```react
<Image source={require("../girl.png")} />
```

​	· 渲染网络图片时，必须加入宽度和高度

```react
<Image source={{uri:'图片的地址'}} style={{width:200,height:300}} />
```

==注意：加载网络图片的时候的uri并且必须添加宽度和高度==

​	· 在Android上支持Gif和WebP格式图片

默认情况下Android是不支持Gif和WebP格式的。你需要在android/app/build.gradle文件中根据手动添加以下模块

```
dependencies{
		//如果你需要支持Android 4.0(API level 14)之前的版本
    implementation 'com.facebook.fresco:animated-base-support'

    //如果你需要支持Gif动图
    implementation 'com.facebook.fresco:animated-gif:2.0.0'

    //如果你需要支持WebP格式，包括动图
    implementation 'com.facebook.fresco:animated-webp:2.1.0'
    implementation 'com.facebook.fresco:webpsupport:2.0.0'
}
```

==注意：ios原来就支持，并且在更改完配置后需要重启项目==

### 5 ImageBackground

相当于div+背景图片

### 6 TextInput

可以通过onChangeText事件来获取输入框的值



## 语法

### 1 插值表达式

```react
import React from "react";
import {View,Text} from "react-native";

const Index = () => (
  <View>
    <Text>{"开心"}</Text>
    <Text>{123}</Text>
  </View>
)

export default Index;
```

### 2 组件

#### 	· 函数组件

​		没有state(通过hook可以有)

​		没有生命周期(通过hooks可以有)

​		适用于简单场景

#### 	· 类组件

​		适合复杂的场景

​		有state 

​		有生命周期

### 3 调试

​	分为两种方式

​	1 使用谷歌浏览器来调试

​		使用谷歌浏览器即可

​		不能查看标签结构

​		不能查看网络请求

​	2 使用rn推荐的工具react-native-debugger

​		可以查看标签结构

​		不能查看网络请求

​	3 想要查看网络请求

​		找到index.js加入以下代码

```
//可以捕获到网络请求
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest
```

### 4 mobx

react中的全局数据管理库，可以简单的实现数据的跨组件共享，类似vue中的vuex

**使用步骤**

1 安装依赖

​	· mobx核心库

​	· mobx-react方便在react中使用mobx技术的库

​	· @babel/plugin-proposal-decorators让rn项目支持es7的装起时语法的库

```react
yarn add mobx mobx-react @babel/plugin-proposal-decorators
```

2 在babel.config.js中配置

```react
plugins:[
	['@babel/plugin-proposal-decorators',{'legacy':true}]
]
```

3 新建文件mobx\index.js用来存放全局数据

```react
import {observable} from "mobx";

class RootStore{
    //es7的装饰器语法 Object.defineProperty
    @observable
    name = "悟空";
}
export default new RootStore()
```

4 在根组件中挂载

```react
import React from "react";
import {View,Text} from "react-native"
import axios from "axios";
import RootStore from "./mobx";
import {Provider} from "mobx-react";

class App extends React.Component{
  redner(){
    return (
      <View>
        <Provider RootStore={RootStore}>

        </Provider>
      </View>
    )
  }
}

export default App
```

5 其他组件中使用

```react
import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {inject } from 'mobx-react';
//inject是注入的意思
@inject("RootStore") 
class Index extends Component{
    
    render(){
        console.log(this)
        return (
            <View>
                <Text>
                    Btn:{this.props.RootStore.name}
                </Text>
            </View>
        )
    }
}

export default Index
```

==备注：运行项目报错时可以执行==

```
rm -rf node_modules && yarn cache clean && yarn install && yarn ios
```

| 名称        | 作用           |
| ----------- | -------------- |
| @observable | 数据共享       |
| @action     | 行为，修改数据 |

**修改数据**

在mobx/index.js中

```react
import { observable,action} from "mobx"

class RootStore{
    @observable
    name="悟空"

    @action // 行为，修改名称
    changeName(name){
        this.name = name
    }
}

export default new RootStore()
```

