import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Game from './containers/Game';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font";
import { useFonts } from "@use-expo/font";

const customFonts = {
  Eraser: require("./assets/fonts/Eraser.ttf"),
};

export default function App() {

  const [isLoaded] = useFonts(customFonts);
  return (
    <Game />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Eraser'
    },
});