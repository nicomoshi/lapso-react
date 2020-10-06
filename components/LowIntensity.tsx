import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, View, StyleSheet, TextInput, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../colours';
import { AppLoading } from 'expo';
import { useFonts, Nunito_400Regular } from '@expo-google-fonts/dev';

const { width } = Dimensions.get('window')
const timeTextSize = width / 4;
const descTextSize = timeTextSize / 4;

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync().catch(console.warn);



const LowIntensity = (navigation: any) => {



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
    var exercise: Exercise = navigation.route.params.exercise;

    var durationInSecs = exercise.highIntensitySeconds
    var initializationTime = 100
    var [lowIntensityMinutes, setHighIntenistyMinutes] = useState<number>(exercise.lowIntensityMinutes)
    var [lowIntensitySeconds, setHighIntenistySeconds] = useState<number>(exercise.lowIntensitySeconds)


    const [secsLeft, setSecsLeft] = useState<number>(durationInSecs);
    const [delay, setDelay] = useState<number>(1000);
    const [pause, setPause] = useState<boolean>(true);
    const [showTimer, setShowTimer] = useState<boolean>(false);
    const [tagText, setTagText] = useState<string>('');


    // To Restart Timer If User Clicks Play Again
    useEffect(() => {
        if (shouldTimerStart) {
            setSecsLeft(durationInSecs);
            setTagText('');
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
                    if (lowIntensityMinutes > 0) {
                        lowIntensityMinutes--
                        setHighIntenistyMinutes(lowIntensityMinutes)
                        durationInSecs = 59;
                        setSecsLeft(durationInSecs);
                        setHighIntenistySeconds(durationInSecs)
                    }
                    else {
                        setPause(true)
                        navigation.toggle()
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
    const lowIntensityText = "Low Intensity"
    let lowIntensityMinutesText = lowIntensityMinutes.toString()
    let lowIntensitySecondsText = lowIntensitySeconds.toString()

    if (lowIntensityMinutes < 10) {
        lowIntensityMinutesText = '0' + lowIntensityMinutes.toString()
    }
    if (lowIntensitySeconds < 10) {
        lowIntensitySecondsText = '0' + lowIntensitySeconds.toString()
    }

    let [fontLoaded] = useFonts({ Nunito_400Regular });
    if (!fontLoaded) {
        return <AppLoading />
    }
    else {
        return (<View style={styles.timers}>

            <LinearGradient colors={[COLORS.lowTop, COLORS.lowBottom]} style={styles.lowIntensityContainer}>
                <View style={styles.timeView}>
                    <Text style={styles.timeInput}>
                        {lowIntensityMinutesText}
                    </Text>
                    <Text style={styles.timeInput}>{colon}</Text>
                    <Text style={styles.timeInput}>
                        {lowIntensitySecondsText}
                    </Text>
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


export default LowIntensity;