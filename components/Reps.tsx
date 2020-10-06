import React, { useState } from 'react';
import { Image, Dimensions, View, TextInput, StyleSheet, Text } from 'react-native';

const { width } = Dimensions.get("window")

const repsViewSize = width / 15



const Reps = (navigation: any) => {

    var exercise: Exercise = navigation.route.params.exercise;


    let reps: number


    if (navigation.reps == null) {
        reps = exercise.reps

    } else {
        reps = navigation.reps

    }



    const [highMinutes, onChangeHighMinutes] = React.useState(reps.toString())



    if (navigation.route.name == 'Home') {

        return (
            <View style={styles.reps}>
                <View style={styles.repsView}>
                    <TextInput
                        style={styles.repsInput}
                        onChangeText={text => {
                            onChangeHighMinutes(text)
                            reps = parseInt(text)
                        }}
                        value={highMinutes}
                    />

                </View>
                <View style={styles.repsImageView}>
                    <Image source={require('../assets/repeat.png')} style={styles.repsImage} />
                </View>
            </View>
        );
    }
    else {
        return (
            <View style={topStyle.reps}>
                <View style={topStyle.repsView}>
                    <Text style={topStyle.repsInput}>
                        {reps}
                    </Text>
                </View>
                <View style={topStyle.repsImageView}>
                    <Image source={require('../assets/repeat.png')} style={topStyle.repsImage} />
                </View>
            </View>
        );
    }

}

const topStyle = StyleSheet.create({
    reps: {
        position: 'absolute',
        top: width / 4 - repsViewSize,
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
    }
});

const styles = StyleSheet.create({
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
    }
});

export default Reps;