import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TimerScreen from '../screens/TimerScreen';

const { Navigator, Screen } = createStackNavigator();




const HomeStack = () => {

    let exercise: Exercise = {
        name: 'hi',
        highIntensityMinutes: 2,
        highIntensitySeconds: 0,
        lowIntensityMinutes: 2,
        lowIntensitySeconds: 0,
        reps: 5
    }


    return (
        <Navigator headerMode="none" >
            <Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Home' }}
                initialParams={{ exercise }}
            />
            <Screen
                name="TimerScreen"
                component={TimerScreen}
                options={{ title: 'TimerScreen' }}


            />
        </Navigator>
    );
};


export default HomeStack;