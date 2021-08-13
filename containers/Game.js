import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Board from '../components/Board'
import GameStatus from '../components/GameStatus'
import NewGame from '../components/NewGame'

const Game = () =>  {

  const grid = ["","","","","","","","",""];

  const player1 = "X";
  const player2 = "O";

  const [winner, setWinner] = useState("");
  const [player, setPlayer] = useState(player1);
  const [turns, setTurns] = useState(0);
  const [won, setWon] = useState(false);
  const [board, setBoard] = useState(grid);
  
  const reset = () => {
    setBoard(grid);
    setWinner("");
    setPlayer(player1);
    setTurns(0);
    setWon(false);
  }

  const setGameWinner = () => {
    setWinner(player);
    setWon(true);
  }

  const updateBoard = (square) => {
    let updatedGrid = board;
    updatedGrid[square] = player;
    setBoard(updatedGrid);
  }

  const switchPlayer = () =>  {
    if (player === player1) {
      setPlayer(player2);
    } else {
      setPlayer(player1)
    }
    setTurns(turns + 1);
  }

  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text styles={styles.headerText}>Tic Tac Toe</Text>
        </View>
                   
        <Board
          player={player}
          changePlayer={switchPlayer}
          endGame={setGameWinner}
          won={won}
          turns={turns}
          update={updateBoard}
          board={board}
        />
        <GameStatus
          winner={winner}
          currentPlayer={player}
          won={won}
          turns={turns}/>
        <NewGame
          won={won}
          turns={turns}
          startNewGame={reset}/>
      </View>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue"
  },
  header: {
    //minHeight: 50
    alignItems: 'center',
    padding: 3
  },
  headerText: {
    fontSize: 50,
    color: 'white'
  }
});

export default Game;
