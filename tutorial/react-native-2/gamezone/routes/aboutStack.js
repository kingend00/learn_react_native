import {createStackNavigator} from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';

const screens = {
    About:{
        screen:About,
        navigationOptions : ({navigation}) => {
            return {
                headerTitle:() => <Header navigation={navigation} title="About GameZone" />,
            }
        }
    },

}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'red',
            // headerTintColor:'#11',
            height:60 // if headerStyle not found in screens
        }
    }
});

export default AboutStack;