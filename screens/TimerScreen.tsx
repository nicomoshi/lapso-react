
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../colours';
import HighIntensity from '../components/HighIntensity';
import LowIntensity from '../components/LowIntensity';
import Reps from '../components/Reps';
import StopButton from '../components/StopButton';
import Exercise from '../model/Exercise';


const TimerScreen = (navigation: any) => {

    var [reps, setReps] = useState(navigation.route.params.exercise.reps)


    const reduceReps = (oneLess: number) => {
        setReps(oneLess)
        console.log(reps)
    }


    return (
        <LinearGradient
            colors={[COLORS.mainTop, COLORS.mainBottom]} style={styles.background}>
            <CurrentTimer {...navigation} reduceReps={reduceReps} reps={reps} />
            <StopButton {...navigation} />
            <Reps {...navigation} reps={reps} />
        </LinearGradient>
    );
}

const CurrentTimer = (navigation: any) => {

    var exercise: Exercise = navigation.route.params



    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)

    const reduceReps = navigation.reduceReps
    const reps = navigation.reps


    if (isEnabled) {
        return (
            <HighIntensity  {...navigation} toggle={toggleSwitch} reduceReps={reduceReps} reps={reps} />
        );
    }
    else {
        return (
            <LowIntensity {...navigation} toggle={toggleSwitch} reduceReps={reduceReps} reps={reps} />
        );
    }

}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',

    },

});

export default TimerScreen;