import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container :{
        flex:1,
        padding:20
    },
    titleText:{
        fontFamily:'nunito-bold',
        fontSize:18,
        color:'#333'
    },
    paragraph :{
        marginVertical:8,
        lineHeight:20,
    },
    input:{
        borderWidth:1,
        borderColor:'#ddd',
        padding:10,
        marginBottom:10,
        fontSize:18,
        borderRadius:6
    },
    errorText:{
        color:'crimson',
        fontWeight:'bold',
        // marginTop:6,
        marginBottom:10,
        textAlign:'center'
    }
});
export const images = {
    ratings:{
        '1':require('../assets/img/rating-1.png'),
        '2':require('../assets/img/rating-2.png'),
        '3':require('../assets/img/rating-3.png'),
        '4':require('../assets/img/rating-4.png'),
        '5':require('../assets/img/rating-5.png'),
    }
}