import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MyExercises from './screens/MyExercises';
import { StyleSheet, View } from 'react-native';
import Sidebar from './screens/Sidebar';
import { useFonts, Nunito_600SemiBold } from '@expo-google-fonts/dev';
import { AppLoading } from 'expo';
import HomeStack from './routes/HomeStack';
import * as firebase from 'firebase'
import 'firebase/firestore';


import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync().catch(console.warn);



const Drawer = createDrawerNavigator();


const App = () => {



  const firebaseConfig = {
    apiKey: "AIzaSyC4vLI8hGUVnAj8g75daDgtiX63KjowObY",
    authDomain: "lapso-9e72e.firebaseapp.com",
    databaseURL: "https://lapso-9e72e.firebaseio.com",
    projectId: "lapso-9e72e",
  };


  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }



  // Listen for authentication state to change.
  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      console.log("We are authenticated now!");
    }

    // Do other things
  });

  async function loginAnon() {

    const db = firebase.firestore();
    firebase.auth().signInAnonymously();
    let userUID = firebase.auth().currentUser?.uid
    db.collection('users').doc(userUID).set({
      uid: userUID
    })

  }

  if (firebase.auth().currentUser == null) {
    loginAnon()
  }


  let [fontLoaded] = useFonts({ Nunito_600SemiBold });
  if (!fontLoaded) {
    return <AppLoading />
  }
  else {
    return (
      <View style={styles.body}>
        <NavigationContainer>
          <Drawer.Navigator drawerContentOptions={{
            activeTintColor: '#FFF',
            inactiveTintColor: '#D1D1D1',
            labelStyle: { fontFamily: 'Nunito_600SemiBold', fontSize: 18.0 },

          }} drawerContent={props => <Sidebar {...props} />} overlayColor="transparent" drawerType={('back')} drawerStyle={styles.drawer} drawerPosition="right" initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="My Exercises" component={MyExercises} />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>

    );
  }

}


const styles = StyleSheet.create({
  drawer: {
    backgroundColor: "#09636C",
    opacity: 1,
  },
  body: {
    flex: 1,

  }
});



export default App;