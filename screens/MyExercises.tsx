import { useFonts, Nunito_600SemiBold } from '@expo-google-fonts/dev';
import { AppLoading } from 'expo';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, View, StyleSheet, Text } from 'react-native';
import { COLORS } from '../colours';
import BurguerMenu from '../components/BurguerMenu';


const { width, height } = Dimensions.get('window')
const titleSize = width / 13

const MyExercises = (navigation: any) => {


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
                        <View style={styles.titleView}>
                            <Text style={styles.titleText}>{title}</Text>
                        </View>
                    </View>

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
    },
    titleView: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'flex-end'
    },
    titleText: {
        left: titleSize,
        textAlign: 'left',
        bottom: 1.0,
        fontSize: titleSize,
        color: 'white',
        fontFamily: 'Nunito_600SemiBold'
    }
});

export default MyExercises;