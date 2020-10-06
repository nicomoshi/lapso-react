import React from 'react';
import { Dimensions, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import TimerScreen from '../screens/TimerScreen';

const { width } = Dimensions.get('window')
const buttonSize = width / 4;

import * as firebase from 'firebase'
import 'firebase/firestore';



const SaveButton = (navigation: any) => {
    var exercise = navigation.exercise;
    console.log(navigation.exercise)
    async function addExercise(exercise: Exercise) {

        const db = firebase.firestore();
        let userUID = firebase.auth().currentUser?.uid
        let doc = db.collection('users').doc(userUID).collection('exercises').doc()
        doc.set({
            uid: doc.id,
            name: exercise.name,
            highIntensityMinutes: exercise.highIntensityMinutes,
            highIntensitySeconds: exercise.highIntensitySeconds,
            lowIntensityMinutes: exercise.lowIntensityMinutes,
            lowIntensitySeconds: exercise.lowIntensitySeconds,
            reps: exercise.lowIntensitySeconds
        })

    }

    return (<View style={styles.playView}>
        <TouchableOpacity onPress={() => {
            addExercise(exercise)
            navigation.navigation.navigate('HomeStack', { exercise })
        }} >
            <Image source={require('../assets/save.png')} style={styles.playImage} />
        </TouchableOpacity>
    </View>);
}


const styles = StyleSheet.create({
    playView: {
        position: 'absolute',
    },
    playImage: {
        width: buttonSize,
        height: buttonSize
    }
});

export default SaveButton;