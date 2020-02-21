import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput,Alert, ScrollView, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import Footer from './components/footer';
import TodoItem from './components/todoitem';
import AddTodo from './components/addTodo';
import SandBox from './components/sandbox';

export default function App() {
  const [name, setName] = useState('shaun');
  const [person, setPerson] = useState({
    name:'mario',age : 40
  });
  const [people, setPeople] = useState([
    {name:'shaun' , key:'1'},
    {name:'still' , key:'2'},
    {name:'yoshi' , key:'3'},
    {name:'mario' , key:'4'},
    {name:'luigi' , key:'5'},
    {name:'peach' , key:'6'},
    {name:'toad' , key:'7'},
    {name:'bower' , key:'8'},
  ])
  const clickHandler = () => {
    setName('chun-li')
    setPerson({
      name:'luigi',
      age:303
    })
  }
  const pressHandler = (val) => {
    alert(val + ' was deleted');
    console.log(val);
    setPeople((pre) => {
      return pre.filter(person => person.name != val)
    })
  }
  const submitHandler = (text) => {
    if(text.length < 3)
    {
      Alert.alert('OPP!?','Error !!! min length 3',
      [{text:'Understood',onPress:() => console.log('alert closed')}])
    }
    else
      setPeople((preData) => {
        return [
          {name:text,key:Math.random().toString()},
          ...preData,

        ]
      })
  }
  return (    
    // <SandBox />
    <TouchableWithoutFeedback onPress={() => {
      console.log('key press111')
      Keyboard.dismiss();
      }}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
          <AddTodo submitHandler = {submitHandler} />
          <View style = {styles.list}>
            <FlatList
              style = {styles.FlatList}
              data={people}
              renderItem={({item}) => (
                <TodoItem item = {item} pressHandler={pressHandler} />
              )}
            />
          </View>          
      </View>
      {/* <Footer /> */}

       {/* <FlatList 
    //     numColumns={2}
    //     data={people}
    //     keyExtractor={(item) => item.key} // object have key in array / set field to keyExtractor
    //     renderItem={({item}) => (
    //       <TouchableOpacity onPress={() => pressHandler(item.name)}>
    //         <Text style={styles.user}> My name is {item.name}</Text>
    //       </TouchableOpacity>
    //     )}
    //   /> */}


       {/* <ScrollView>
    //     {
    //       people.map((user) => {
    //         return (
    //           <View key= {user.key}>
    //             <Text style={styles.user}> My name is {user.name}</Text>
    //           </View>
    //         )
    //       })
    //     }
    //   </ScrollView> */}

    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  FlatList :{
    height:500
  },  
  content :{
    padding:40,
    flex:1
  },
  list:{
    marginTop:20,
    flex:1
  },
  buttonContainer:{

  },
  input :{
    borderWidth:1,
    color:'black',
    padding:8,
    margin:10,
    width:200
  },
  user1 :{
    marginTop:24,
    width:250,
    padding:20,
    backgroundColor:'pink',
    fontSize:24
  }
  // red: {
  //   color:'red'
  // },
  // colorBlue: {
  //   color:'blue'
  // }
});
