import { useFonts, Nunito_600SemiBold, Nunito_400Regular } from '@expo-google-fonts/dev';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { AppLoading } from 'expo';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';






const Sidebar = (props: any) => {

    let [fontLoaded] = useFonts({ Nunito_600SemiBold, Nunito_400Regular });

    if (!fontLoaded) {
        return <AppLoading />
    }
    else {
        return (
            <View style={styles.rootView}>
                <View style={styles.logoView}>
                    <Text style={styles.logoText}>lapso</Text>
                </View>
                <DrawerContentScrollView {...props} >
                    <DrawerItemList {...props} />
                </DrawerContentScrollView>
            </View>

        );
    }
}





const styles = StyleSheet.create({

    rootView: {
        flex: 1,
    },
    logoView: {
        paddingTop: 60,
        alignItems: 'center',
    },
    logoText: {
        color: 'white',
        fontSize: 50,
        fontFamily: "Nunito_600SemiBold",
        fontWeight: '900'
    }
});

export default Sidebar;