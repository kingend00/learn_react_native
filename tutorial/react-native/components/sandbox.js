import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function SanBox(){
    return (
        <View style = {styles.container}>
            <Text style={styles.OneBox}>One</Text>
            <Text style={styles.TwoBox}>Two</Text>
            <Text style={styles.ThreeBox}>Three</Text>
            <Text style={styles.FourBox}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        // flex:1,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'flex-start',
        paddingTop:40,
        backgroundColor:'#ddd'
    },
    OneBox:{
        flex:1,
        backgroundColor:'violet',
        padding:10,
    },
    TwoBox:{
        flex:1  ,
        backgroundColor:'gold',
        padding:20,
    },
    ThreeBox:{
        flex:1,
        backgroundColor:'green',
        padding:30,
    },
    FourBox:{
        flex:1,
        backgroundColor:'skyblue',
        padding:40,
    }
})