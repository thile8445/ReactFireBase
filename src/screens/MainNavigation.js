import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import Information from './Information';
import Loading from './Loading';
import Login from './Login';
import Main from './Main';
import Register from './Register';
const Tab = createBottomTabNavigator();
const NavigateIntoMain = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="main"
        component={Main}
        options={{
          tabBarLabel: 'main',
        }}
      />
      <Tab.Screen
        name="Information"
        component={Information}
        options={{
          tabBarLabel: 'Information',
        }}
      />
    </Tab.Navigator>
  );
};
const AuthStack = createStackNavigator();
const LoginNavigation = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        initialRouteName="Login"
        name="Login"
        options={() => ({
          title: 'Login',
          headerLeft: null,
        })}
        component={Login}
      />
      <AuthStack.Screen
        name="Register"
        options={() => ({
          title: 'Register',
        })}
        component={Register}
      />
    </AuthStack.Navigator>
  );
};

const HomeStack = createStackNavigator();
export const MainNavigation = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen
        initialRouteName="Loading"
        name="Loading"
        component={Loading}
      />
      <HomeStack.Screen
        initialRouteName="Login"
        name="Login"
        component={LoginNavigation}
      />
      <HomeStack.Screen
        name="Main"
        options={({route}) => ({
          title: 'Main',
          headerStyle: {
            backgroundColor: '#FEA47F',
          },
        })}
        component={NavigateIntoMain}
      />
    </HomeStack.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 20,
    width: 20,
  },
  iconAdd: {
    height: 40,
    width: 40,
    marginBottom: 20,
  },
});

// export default MainNavigation;
