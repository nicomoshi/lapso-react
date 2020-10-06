import React from 'react';
import { Dimensions, View, StyleSheet, TextInput, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../colours';
import { AppLoading } from 'expo';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/dev';
import SaveButton from '../components/SaveButton';
import { TouchableOpacity } from 'react-native-gesture-handler';


const { width } = Dimensions.get('window')
const timeTextSize = width / 4;
const descTextSize = timeTextSize / 4;

const repsViewSize = width / 15

const NewExercise = (navigation: any) => {



    console.log(navigation)
    let exercise: Exercise = {
        id: '',
        name: '',
        highIntensityMinutes: 0,
        highIntensitySeconds: 0,
        lowIntensityMinutes: 0,
        lowIntensitySeconds: 0,
        reps: 0
    }

    


    const colon = ":"
    const highIntensityText = "High Intensity"
    const lowIntensityText = "Low Intensity"
    const [highMinutes, onChangeHighMinutes] = React.useState(exercise.highIntensityMinutes > 10 ? exercise.highIntensityMinutes.toString() : '0' + exercise.highIntensityMinutes.toString())
    const [highSeconds, onChangeHighSeconds] = React.useState(exercise.highIntensitySeconds > 10 ? exercise.highIntensitySeconds.toString() : '0' + exercise.highIntensitySeconds.toString())
    const [lowMinutes, onChangeLowMinutes] = React.useState(exercise.lowIntensityMinutes > 10 ? exercise.lowIntensityMinutes.toString() : '0' + exercise.lowIntensityMinutes.toString())
    const [lowSeconds, onChangeLowSeconds] = React.useState(exercise.lowIntensitySeconds > 10 ? exercise.lowIntensitySeconds.toString() : '0' + exercise.lowIntensitySeconds.toString())
    const [reps, onChangeReps] = React.useState(exercise.reps.toString())
    const [name, onChangeName] = React.useState(exercise.name)

    const back = '<'

    let [fontLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });
    if (!fontLoaded) {
        return <AppLoading />
    }
    else {
        return (<View style={styles.background}>

            <View style={styles.timers}>
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
                                console.log(exercise)
                            }}
                            value={lowSeconds}
                        />
                    </View>
                    <View>
                        <Text style={styles.timeDesc}>{lowIntensityText}</Text>
                    </View>

                </LinearGradient>
            </View>
            <SaveButton exercise={exercise}/>
            <View style={styles.backButton}>
                <TouchableOpacity onPress={() => navigation.navigation.pop()}>
                    <Text style={styles.backButtonText}>{back}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.reps}>
                <View style={styles.repsView}>
                    <TextInput
                        style={styles.repsInput}
                        onChangeText={text => {
                            onChangeReps(text)
                            exercise.reps = parseInt(text)
                            
                        }}
                        value={reps}
                    />
                </View>
                <View style={styles.repsImageView}>
                    <Image source={require('../assets/repeat.png')} style={styles.repsImage} />
                </View>
            </View>
            <View style={styles.name}>
                <View style={styles.nameView}>
                    <TextInput
                        style={styles.nameInput}
                        onChangeText={text => {
                            onChangeName(text)
                            exercise.name = text
                        }}
                        value={name}
                        placeholder='name'
                        placeholderTextColor='black'
                    />
                </View>
            </View>
        </View>
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
    },
    backButton: {
        position: 'absolute',
        left: '6%',
        top: '4%'
    },
    backButtonText: {
        fontFamily: "Nunito_700Bold",
        fontSize: timeTextSize / 2,
        color: 'black'
    },
    reps: {
        position: 'absolute',
        paddingTop: repsViewSize / 2,
        right: width / 4 - repsViewSize,
        flexDirection: 'column',
    },
    repsImage: {
        height: repsViewSize / 1.7,
        width: repsViewSize / 1.5,
    },
    repsImageView: {
        top: repsViewSize / 4,
        alignItems: 'center',
    },
    repsView: {
        height: repsViewSize,
        width: repsViewSize,
        backgroundColor: 'black',
        borderRadius: repsViewSize,

    },
    repsInput: {
        fontSize: repsViewSize / 2,
        color: 'white',
        textAlign: 'center',
        paddingTop: repsViewSize / 5,
    },
    name: {
        position: 'absolute',
        left: 20,
        flexDirection: 'column',
    },
    nameView: {
        height: repsViewSize,
        width: repsViewSize * 4,
        borderWidth: 2,
        backgroundColor: 'white',
        opacity: 0.3,
        borderColor: 'black',
        borderRadius: repsViewSize,
    },
    nameInput: {
        fontSize: repsViewSize / 2,
        color: 'black',
        textAlign: 'center',
        paddingTop: 2,
    }
});


export default NewExercise;