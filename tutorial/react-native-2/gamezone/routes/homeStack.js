import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Home:{
        screen:Home,
        navigationOptions : ({navigation}) => {
            return {
                headerTitle:() => <Header navigation={navigation} title="GameZone" />,
                // flex: 1,
                // width:'100%',
                headerStyle:{
                    backgroundColor:'skyblue',
                    
                },
            }
        }
    },
    ReviewDetails: {    //navigate('ReviewDetails')
        screen : ReviewDetails,
        navigationOptions :{
            title:'Details',
            headerStyle:{
                backgroundColor:'purple'
            }
        }
    },
    // About: {
    //     screen : About
    // }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#446',
            // headerTintColor:'#11',
            // height:60 // if headerStyle not found in screens
        }
    }
});

export default HomeStack;