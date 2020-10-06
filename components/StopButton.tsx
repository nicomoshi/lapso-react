import React from 'react';
import { Dimensions, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import TimerScreen from '../screens/TimerScreen';

const { width } = Dimensions.get('window')
const buttonSize = width / 4;

const StopButton = (navigation:any) =>
    <View style={styles.playView}>
        <TouchableOpacity onPress={() => navigation.navigation.pop()} >
            <Image source={require('../assets/pause.png')} style={styles.playImage} />
        </TouchableOpacity>
    </View>;

const styles = StyleSheet.create({
    playView: {
        position: 'absolute',
        bottom: buttonSize,
    },
    playImage: {
        width: buttonSize,
        height: buttonSize
    }
});

export default StopButton;