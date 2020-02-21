import React from 'react';
import {StyleSheet, Text, View, Image , ImageBackground} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Header(props){
 
    const openMenu = () => {
        props.navigation.openDrawer() 
    }
    return (
        <ImageBackground style={styles.header}>
            <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/img/heart_logo.png')} style = {styles.logoImage} />
                <Text style={styles.headerText}>
                    {props.title}
                </Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header:{
        // flex:1,
        width:'100%',
        height:'100%',
        // backgroundColor:'red',        
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center' 
    },
    headerText:{
        fontWeight:'bold',
        paddingLeft:20,
        fontSize:20,
        color:'#333',
        letterSpacing:3,
    },
    logoImage:{
        width:26,
        height:26,
        marginLeft:30,
        marginRight:-10
    },
    headerTitle:{
        flexDirection:'row'
    }
})