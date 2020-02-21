import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function tul_4() {
  const [name, setName] = useState('shaun');
  const [person, setPerson] = useState({
    name:'mario',age : 40
  });
  const clickHandler = () => {
    setName('chun-li')
    setPerson({
      name:'luigi',
      age:303
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.red} >
        <Text>My name is : {name}</Text>
        <Text>His name is {person.name} and his age is {person.age }</Text>
        <Text></Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{

  }
  // red: {
  //   color:'red'
  // },
  // colorBlue: {
  //   color:'blue'
  // }
});
