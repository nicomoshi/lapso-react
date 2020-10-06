
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../colours';
import BurguerMenu from '../components/BurguerMenu';
import PlayButton from '../components/PlayButton';
import Reps from '../components/Reps';
import Timers from '../components/Timers';


import * as SplashScreen from "expo-splash-screen";


SplashScreen.preventAutoHideAsync().catch(console.warn);



const HomeScreen = (navigation: any) => {


    var exercise: Exercise = navigation.route.params.exercise;
    console.log(navigation.route.params)


    return (
        <LinearGradient
            colors={[COLORS.mainTop, COLORS.mainBottom]} style={styles.background}>
            <Timers {...navigation} exercise={exercise} />
            <PlayButton {...navigation} exercise={exercise} />
            <Reps {...navigation} />
            <BurguerMenu {...navigation} home={true} />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',

    },

});

export default HomeScreen;