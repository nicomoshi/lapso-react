import { useFonts, Nunito_600SemiBold } from '@expo-google-fonts/dev';
import { AppLoading } from 'expo';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Animated,
    TouchableOpacity,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const SCREEN_WIDTH = Dimensions.get('window').width;

const ExerciseBox = (props: any) => {
    const leftSwipe = (progress: any, dragX: any) => {
        const scale = dragX.interpolate({
            inputRange: [1, 400],
            outputRange: [0.2, 6],
            extrapolate: 'clamp',
        });
        return (
            <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.6}>
                <View style={styles.deleteBox}>
                    <Animated.Text style={{ transform: [{ scale: scale }], color: 'red', fontSize: 20, fontFamily: 'Nunito_600SemiBold' }}>
                        x
          </Animated.Text>
                </View>
            </TouchableOpacity>
        );
    };

    let [fontLoaded] = useFonts({ Nunito_600SemiBold });
    if (!fontLoaded) {
        return <AppLoading />
    }
    else {
        return (

            <Swipeable renderLeftActions={leftSwipe}>
                <View style={styles.container}>
                    <Text style={styles.exerciseText}>{props.data.name}</Text>
                </View>
            </Swipeable>
        );
    }
};

export default ExerciseBox;

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        padding: 16,
        color: 'white',
    },
    exerciseText: {
        color: 'white',
        fontFamily: 'Nunito_600SemiBold'
    },
    deleteBox: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 4,
        marginLeft: 45,
        opacity: 1,
        width: 40,
        height: 40,

    },
});