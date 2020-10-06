import React from 'react';
import { Dimensions, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import TimerScreen from '../screens/TimerScreen';

const { width } = Dimensions.get('window')
const buttonSize = width / 4;

const SaveButton = (navigation:any) =>
    <View style={styles.playView}>
        <TouchableOpacity onPress={() => navigation.navigation.navigate('', {})} >
            <Image source={require('../assets/save.png')} style={styles.playImage} />
        </TouchableOpacity>
    </View>;

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