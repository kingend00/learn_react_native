import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import {globalStyles, images} from '../styles/global';
import Card from '../shared/card'

export default function ReviewDetails(props){

    const rating = props.navigation.getParam('rating');
    const pressHandler = () => {
        props.navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{props.navigation.getParam('title')}</Text>
                {/* <Text style={globalStyles.titleText}>{props.navigation.getParam('rating')}</Text>
                 */}

                <View style={styles.rating}>
                    <Text>GameZone rating: </Text>
                    <Image source = {images.ratings[rating]} />
                </View>
                <Text style={globalStyles.titleText}>{props.navigation.getParam('body')}</Text>                
            </Card>
            <Button title='Back' onPress={pressHandler} />
        </View>
    )
}
const styles = StyleSheet.create({
    container :{
        padding:24
    }
})