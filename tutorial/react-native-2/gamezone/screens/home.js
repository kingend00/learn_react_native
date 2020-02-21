import React , {useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card'


export default function Home(props){
    const [reviews, setReviews] = useState(
        [
            {title:'Zelda,Breath of Fresh Air', rating:5, body:'lorem imsum', key:'1'},
            {title:'Goote,Breath of Fresh Air', rating:3, body:'Still imsum', key:'2'},
            {title:'No shore,Breath of Fresh Air', rating:4, body:'Because imsum', key:'3'},
            {title:'whafood,Breath of Fresh Air', rating:3, body:'Demo flash imsum', key:'4'},
        ]
    )
    const pressHandler = () => {
        props.navigation.navigate('ReviewDetails')
        // props.navigation.push('ReviewDetails')
    }
    return (
        <View style={globalStyles.container}>            
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
