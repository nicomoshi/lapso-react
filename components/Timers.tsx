import React from 'react';
import { Dimensions, View, StyleSheet, TextInput, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../colours';
import { AppLoading } from 'expo';
import { useFonts, Nunito_400Regular } from '@expo-google-fonts/dev';
import Exercise from '../model/Exercise';

const { width } = Dimensions.get('window')
const timeTextSize = width / 4;
const descTextSize = timeTextSize / 4;



const Timers = (navigation: any) => {

    var exercise: Exercise = navigation.exercise;

    const colon = ":"
    const highIntensityText = "High Intensity"
    const lowIntensityText = "Low Intensity"
    const [highMinutes, onChangeHighMinutes] = React.useState(exercise.highIntensityMinutes > 10 ? exercise.highIntensityMinutes.toString() : '0' + exercise.highIntensityMinutes.toString())
    const [highSeconds, onChangeHighSeconds] = React.useState(exercise.highIntensitySeconds > 10 ? exercise.highIntensitySeconds.toString() : '0' + exercise.highIntensitySeconds.toString())
    const [lowMinutes, onChangeLowMinutes] = React.useState(exercise.lowIntensityMinutes > 10 ? exercise.lowIntensityMinutes.toString() : '0' + exercise.lowIntensityMinutes.toString())
    const [lowSeconds, onChangeLowSeconds] = React.useState(exercise.lowIntensitySeconds > 10 ? exercise.lowIntensitySeconds.toString() : '0' + exercise.lowIntensitySeconds.toString())


    let [fontLoaded] = useFonts({ Nunito_400Regular });
    if (!fontLoaded) {
        return <AppLoading />
    }
    else {
        return (<View style={styles.timers}>
            <LinearGradient colors={[COLORS.highTop, COLORS.highBottom]} style={styles.highIntensityContainer}>
                <View style={styles.timeView}>
                    <TextInput
                        style={styles.timeInput}
                        onChangeText={text => {
                            onChangeHighMinutes(text)
                            exercise.highIntensityMinutes = parseInt(text)
                        }}
                        value={highMinutes}
                    />
                    <Text style={styles.timeInput}>{colon}</Text>
                    <TextInput
                        style={styles.timeInput}
                        onChangeText={text => {
                            onChangeHighSeconds(text)
                            exercise.highIntensitySeconds = parseInt(text)
                        }}
                        value={highSeconds}
                    />
                </View>
                <View>
                    <Text style={styles.timeDesc}>{highIntensityText}</Text>
                </View>

            </LinearGradient>
            <LinearGradient colors={[COLORS.lowTop, COLORS.lowBottom]} style={styles.lowIntensityContainer}>
                <View style={styles.timeView}>
                    <TextInput
                        style={styles.timeInput}
                        onChangeText={text => {
                            onChangeLowMinutes(text)
                            exercise.lowIntensityMinutes = parseInt(text)
                        }}
                        value={lowMinutes}
                    />
                    <Text style={[styles.timeInput]}>{colon}</Text>
                    <TextInput
                        style={styles.timeInput}
                        onChangeText={text => {
                            onChangeLowSeconds(text)
                            exercise.lowIntensitySeconds = parseInt(text)
                        }}
                        value={lowSeconds}
                    />
                </View>
                <View>
                    <Text style={styles.timeDesc}>{lowIntensityText}</Text>
                </View>

            </LinearGradient>
        </View>);
    }
}

const styles = StyleSheet.create({
    timers: {
        flex: 1,
        width: width,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    highIntensityContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 10,
        borderColor: 'black',
        flexDirection: 'column'
    },
    lowIntensityContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    timeInput: {
        textAlign: 'center',
        fontSize: timeTextSize,
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        fontFamily: "Nunito_400Regular"
    },
    timeView: {

        flexDirection: 'row',
    },
    timeDesc: {
        fontSize: descTextSize,
        fontFamily: "Nunito_400Regular"
    }
});


export default Timers;