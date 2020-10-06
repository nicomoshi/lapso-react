import { useFonts, Nunito_600SemiBold } from '@expo-google-fonts/dev';
import { AppLoading } from 'expo';
import React, { useState } from 'react';
import { Dimensions, View, StyleSheet, Text, Button } from 'react-native';
import BurguerMenu from '../components/BurguerMenu';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ExerciseBox from '../components/ExerciseBox';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { Exercises } from '../functions/Exercises';



const { width, height } = Dimensions.get('window')
const titleSize = width / 13



const MyExercises = (navigation: any) => {

    const db = firebase.firestore();

    let userUID = firebase.auth().currentUser?.uid

    const data: Exercise[] = Exercises()

    const deleteItem = (index: number) => {
        db
            .collection('users')
            .doc(userUID)
            .collection('exercises')
            .doc(data[index].id)
            .delete()
            .then(() => {
                console.log('File Deleted');
            });

    };

    const title = "My Exercises"

    let [fontLoaded] = useFonts({ Nunito_600SemiBold });
    if (!fontLoaded) {
        return <AppLoading />
    }
    else {
        return (
            <View style={styles.background}>
                <View style={styles.dim}>
                    <View style={styles.navigationView}>
                        <View
                            style={styles.addView}>
                            <TouchableOpacity onPress={() => navigation.navigation.navigate('New')}>
                                <Text style={styles.addText}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.titleView}>
                            <Text style={styles.titleText}>{title}</Text>
                        </View>

                    </View>
                    <SafeAreaView style={styles.container}>
                        <FlatList
                            data={data}
                            renderItem={({ item, index }) => {
                                console.log(item)
                                return <ExerciseBox data={item} handleDelete={() => deleteItem(index)} />;
                            }}
                            ItemSeparatorComponent={() => {
                                return <View style={styles.seperatorLine}></View>;
                            }}
                        />
                    </SafeAreaView>

                </View>
                <BurguerMenu {...navigation} home={false} />
            </View>
        );
    }
}



const styles = StyleSheet.create({
    dim: {
        flex: 1,
        backgroundColor: "#09636C",
        position: 'relative',
        opacity: 0.9,
    },
    background: {
        flex: 1,
        position: 'relative',
    },
    navigationView: {
        height: '18%',
        flexDirection: 'column'
    },
    titleView: {
        flex: 1,

    },
    titleText: {
        bottom: 1.0,
        fontSize: titleSize,
        alignSelf: 'center',
        color: 'white',
        fontFamily: 'Nunito_600SemiBold'
    },
    container: {
        flex: 1,
    },
    seperatorLine: {
        height: 1,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: 'white',
    },
    addView: {
        flex: 2,
        alignContent: 'center',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25
    },
    addText: {
        fontSize: titleSize + 20,
        color: 'white',
        fontFamily: 'Nunito_600SemiBold'
    },

});

export default MyExercises;