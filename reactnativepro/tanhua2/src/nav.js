
import React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../src/pages/account/login';//引入登录界面

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen(){
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Details Screen</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator  
       
       initialRouteName='Login'>
        <Stack.Screen 
          options={{ 
            // header: 'none' 
            headerShown:false
          }} 
          // navigationOptions={{
          //   // headerStyle: {
          //   //   backgroundColor: '#f4511e',
          //   // },
          //   // headerTintColor: '#fff',
          //   // headerTitleStyle: {
          //   //   fontWeight: 'bold',
          //   // },
          //   header:'null',
          //   headerTitle:'11'
          // }}
          name="Login" 
          component={Login} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;