import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function TodoItem(props){
    return (
        <TouchableOpacity onPress= {() => props.pressHandler(props.item.name)}>
            <View style = {styles.item}>            
                <MaterialIcons name='delete' size={18} color={'#333'} />
                <Text style={styles.itemText}> My name is {props.item.name}</Text>
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item :{
        padding:16,
        marginTop:10,
        borderColor:'#bbb',
        flexDirection:'row',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    },
    itemText:{
        marginLeft:10,
    }
})