import React , {useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback,Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import {MaterialIcons} from '@expo/vector-icons';
import ReviewForm from '../screens/reviewForm';


export default function Home(props){
    const [modalOpen,setModalOpen] = useState(false);
    const [reviews, setReviews] = useState(
        [
            {title:'Zelda,Breath of Fresh Air', rating:5, body:'lorem imsum', key:'1'},
            {title:'Goote,Breath of Fresh Air', rating:3, body:'Still imsum', key:'2'},
            {title:'No shore,Breath of Fresh Air', rating:4, body:'Because imsum', key:'3'},
            {title:'whafood,Breath of Fresh Air', rating:3, body:'Demo flash imsum', key:'4'},
        ]
    )
    const addReview = (review) => {
        review.key=Math.random().toString();
        setReviews((pre) => {
            return [
                review,
                ...pre
            ]

        })
        setModalOpen(false);
    }
    const pressHandler = () => {
        props.navigation.navigate('ReviewDetails')
        // props.navigation.push('ReviewDetails')
    }
    return (
        <View style={globalStyles.container}>                        
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                    <MaterialIcons 
                        name="close"
                        size={24}
                        style={{...styles.modalToggle,...styles.modalClose}}
                        onPress={() => setModalOpen(false)}
                    // style={{}}
                    /> 
                    <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons 
                name="add"
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
                // style={{}}
            />            
            <FlatList
            data={reviews}
            renderItem= {({item}) => (
                <TouchableOpacity onPress={() => props.navigation.navigate('ReviewDetails',item)}>
                    <Card>
                        <Text style = {globalStyles.titleText}> {item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    modalToggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor:'#f2f2f2',
        padding:10,
        borderRadius:10,
        alignSelf:'center'
    },
    modalClose:{
        marginTop:20,
        marginBottom:0
    },
    modalContent:{
        flex:1
    }

})