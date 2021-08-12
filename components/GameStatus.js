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
    <View>
      <Text>{currentState}</Text>
    </View>
  )
}

export default GameStatus;
