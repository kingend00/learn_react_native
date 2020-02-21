import React , {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import Home from './screens/home';
import Navigator from './routes/drawer';
import { AppLoading } from 'expo';
import About from './screens/about';
import ReviewDetails from './screens/reviewDetails';

const getFonts =  async () => {
    await Font.loadAsync({
      'nunito-regular' : require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito-bold' : require('./assets/fonts/Nunito-Bold.ttf')
    });
}
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <Navigator />
    );
  }
  else {
    return (
        <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
  
}

const styles = StyleSheet.create({
  
});


// install react navigation  // go to docs to install
// install expo 
//install react navigation stack