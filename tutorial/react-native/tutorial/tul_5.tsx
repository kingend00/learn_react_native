<View style={styles.red} >

{/** Multiline */}
<TextInput multiline style={styles.input} placeholder='enter name' value={name} onChangeText={(val) => setName(val)} />

{/** keyboardType */}
<TextInput keyboardType='numeric' style={styles.input} placeholder='enter number' onChangeText={(val) => setName(val)} />

<Text>My name is : {name}</Text>
<Text>His name is {person.name} and his age is {person.age }</Text>
</View>
<View style={styles.buttonContainer}>
<Button title="update state" onPress={clickHandler} />
</View>