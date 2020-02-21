import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';


export default function Footer() {
    return (
        <View style = {styles.header}>
            <Text style = {styles.title}>
                My Footer
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:80,
        lineHeight:80,
        backgroundColor:'coral'
    },
    title: {
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    }
})