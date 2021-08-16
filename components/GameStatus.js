import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const GameStatus = ({winner, turns, won, currentPlayer }) => {
  let currentState;

  if (winner !== "") {
    currentState = winner + " wins!";
  } else if (!won && turns === 9) {
    currentState = "It's a tie";
  } else {
    currentState = currentPlayer + " to go.";
  }
  return(
    <View style = {styles.gameStatus}>
      <Text style={styles.statusText}>{currentState}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  gameStatus: {
    justifyContent: 'center',
    alignContent: 'center'
  },
  statusText: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'Eraser'
  }
});


export default GameStatus;
