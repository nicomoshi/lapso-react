import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TimerScreen from '../screens/TimerScreen';
import MyExercises from '../screens/MyExercises';
import NewExercise from '../screens/NewExercise';

const { Navigator, Screen } = createStackNavigator();




const ExercisesStack = (navigation: any) => {
    let exercise = navigation.route.params;


    return (
        <Navigator headerMode="none" >
            <Screen
                name="Exercises"
                component={MyExercises}
                options={{ title: 'Home' }}
            />
            <Screen
                name="New"
                component={NewExercise}
                initialParams={{ exercise }}
            />
        </Navigator>
    );
};


export default ExercisesStack;