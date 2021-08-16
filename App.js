import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Game from './containers/Game';
import { View, StyleSheet, ImageBackground } from 'react-native';
import * as Font from "expo-font";
import { useFonts } from "@use-expo/font";

const customFonts = {
  Eraser: require("./assets/fonts/Eraser.ttf"),
};

export default function App() {

    const [isLoaded] = useFonts(customFonts);
    
    return (
        <View style={styles.container}>
            <ImageBackground source={require("./assets/images/chalkboard.jpg")} style={styles.image}>
                <Game />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        fontFamily: 'Eraser',
        color: 'white'
    },
    image: {
        flex: 1,
        resizeMode: 'stretch',
    },
});