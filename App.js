import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Game from './containers/Game';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
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
    },
});