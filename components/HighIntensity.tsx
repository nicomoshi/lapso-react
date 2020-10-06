import React, { useState } from 'react';
import { Dimensions, View, StyleSheet, TextInput, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../colours';
import { AppLoading } from 'expo';
import { useFonts, Nunito_400Regular } from '@expo-google-fonts/dev';

import { useRef, useEffect } from 'react';

const { width } = Dimensions.get('window')
const timeTextSize = width / 4;
const descTextSize = timeTextSize / 4;

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync().catch(console.warn);






const HighIntensity = (navigation: any) => {


    function useInterval(callback: any, delay: number | null) {
        const savedCallback = useRef();

        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            function tick() {
                // @ts-ignore
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }


    var shouldTimerStart = true;
    var exercise: Exercise = navigation.route.params.exercise;;

    var durationInSecs = exercise.highIntensitySeconds
    var initializationTime = 100

    var [highIntensityMinutes, setHighIntenistyMinutes] = useState<number>(exercise.highIntensityMinutes)
    var [highIntensitySeconds, setHighIntenistySeconds] = useState<number>(exercise.highIntensitySeconds)


    const [secsLeft, setSecsLeft] = useState<number>(durationInSecs);
    const [delay, setDelay] = useState<number>(1000);
    const [pause, setPause] = useState<boolean>(true);


    // To Restart Timer If User Clicks Play Again
    useEffect(() => {
        if (shouldTimerStart) {
            setSecsLeft(durationInSecs);
            if (pause) {
                setPause(false);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [durationInSecs, initializationTime]);

    // An Intelligent Wrapper for UseEffect and SetInterval, controls the timer ticks
    // and watches for operations tide to the Timer ticks
    useInterval(
        () => {
            if (shouldTimerStart) {
                if (secsLeft <= 0) {
                    if (highIntensityMinutes > 0) {
                        highIntensityMinutes--
                        setHighIntenistyMinutes(highIntensityMinutes)
                        durationInSecs = 59;
                        setSecsLeft(durationInSecs);
                        setHighIntenistySeconds(durationInSecs)
                    }
                    else {
                        setPause(false)
                        if (navigation.reps < 1) {
                            navigation.navigation.pop()
                        }
                        else {
                            navigation.reduceReps(navigation.reps - 1)
                            navigation.toggle()
                        }
                    }
                }
                else {
                    setSecsLeft(secsLeft - 1);
                    setHighIntenistySeconds(secsLeft - 1)

                }

            }
        },
        pause ? null : delay,
    );



    const colon = ":"
    const highIntensityText = "High Intensity"
    let highIntensityMinutesText = highIntensityMinutes.toString()
    let highIntensitySecondsText = highIntensitySeconds.toString()

    if (highIntensityMinutes < 10) {
        highIntensityMinutesText = '0' + highIntensityMinutes.toString()
    }
    if (highIntensitySeconds < 10) {
        highIntensitySecondsText = '0' + highIntensitySeconds.toString()
    }





    let [fontLoaded] = useFonts({ Nunito_400Regular });
    if (!fontLoaded) {
        return <AppLoading />
    }
    else {
        return (<View style={styles.timers}>
            <LinearGradient colors={[COLORS.highTop, COLORS.highBottom]} style={styles.highIntensityContainer}>
                <View style={styles.timeView}>
                    <Text style={styles.timeInput}>
                        {highIntensityMinutesText}
                    </Text>
                    <Text style={styles.timeInput}>{colon}</Text>
                    <Text style={styles.timeInput}>
                        {highIntensitySecondsText}
                    </Text>
                </View>
                <View>
                    <Text style={styles.timeDesc}>{highIntensityText}</Text>
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


export default HighIntensity;