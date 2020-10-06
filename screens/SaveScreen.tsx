
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../colours';
import BurguerMenu from '../components/BurguerMenu';
import PlayButton from '../components/PlayButton';
import Reps from '../components/Reps';
import SaveButton from '../components/SaveButton';
import Timers from '../components/Timers';

const SaveScreen = (navigation: any) => {
    return (
        <LinearGradient
            colors={[COLORS.mainTop, COLORS.mainBottom]} style={styles.background}>
            <Timers />
            <SaveButton />
            <Reps />
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

export default SaveScreen;