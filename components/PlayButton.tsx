import React from 'react';
import { Dimensions, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Exercise from '../model/Exercise';
import TimerScreen from '../screens/TimerScreen';

const { width } = Dimensions.get('window')
const buttonSize = width / 4;

const PlayButton = (navigation: any) => {
   
    var exercise: Exercise = navigation.exercise;
    return (<View style={styles.playView}>
        <TouchableOpacity onPress={() => {
            navigation.navigation.navigate('TimerScreen', { exercise })
        }
        } >
            <Image source={require('../assets/play.png')} style={styles.playImage} />
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

export default PlayButton;