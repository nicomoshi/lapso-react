import React from 'react';
import { Dimensions, View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window')
const buttonSize = width / 14;

const BurguerMenu = (navigation: any) => {

    if (navigation.home) {
        return (
            <View style={styles.menuView}>
                <TouchableOpacity onPress={() => navigation.navigation.toggleDrawer()} >
                    <Image source={require('../assets/blackMenu.png')} style={styles.menuImage} />
                </TouchableOpacity>
            </View>
        );
    }
    else {
        return (
            <View style={styles.menuView}>
                <TouchableOpacity onPress={() => navigation.navigation.toggleDrawer()} >
                    <Image source={require('../assets/whiteMenu.png')} style={styles.menuImage} />
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    menuView: {
        position: 'absolute',
        right: buttonSize,
        top: buttonSize * 2,
    },
    menuImage: {
        width: buttonSize,
        height: buttonSize
    }
});

export default BurguerMenu;