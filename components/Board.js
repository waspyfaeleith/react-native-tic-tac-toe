import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Cell from './Cell'
import Row from './GridRow'

  
const DeviceWidth = Dimensions.get('window').width;
const Board = ({ board, player, endGame, changePlayer, won, update, switchPlayer }) => {

  const checkRowsForWinner = () => {
    if (((board[0] !== "") && (board[0] === board[1]) &&
         (board[0] === board[2])) ||
        ((board[3] !== "") &&(board[3] === board[4]) &&
         (board[3] === board[5])) ||
        ((board[6] !== "") &&(board[6] === board[7]) &&
         (board[6] === board[8]))
      ) {
      return true
    }
    return false
  }

  const checkColumnsForWinner = () => {
    if (((board[0] !== "") && (board[0] === board[3]) &&
         (board[0] === board[6])) ||
        ((board[1] !== "") &&(board[1] === board[4]) &&
         (board[1] === board[7])) ||
        ((board[5] !== "") &&(board[2] === board[5]) &&
         (board[2] === board[8]))
      ) {
      return true;
    }
    return false;
  }

  const checkDiagonalsForWinner = () => {
    if ((board[4] !== "") && (((board[0] === board[4]) && (board[0] === board[8])) ||
        ((board[2] === board[4]) && (board[2] === board[6])))) {
        return true;
    }
    return false;
  }

  const checkForWinner = () => {
    if (
      (checkColumnsForWinner() === true) ||
      (checkRowsForWinner() === true) ||
      (checkDiagonalsForWinner() === true)
      ) {
        endGame();
      } else {
        changePlayer();
      }
  }

  const takeTurn = (square) => {
    update(square);
    checkForWinner();
  }

  const row = (firstCell) => (
      <Row
        firstCell={firstCell}
        player={player}
        playSquare={takeTurn}
        gameWon={won}
        board={board}
      />
  )

    return (
        <View style={styles.grid}>
            <Text>Tic Tac Toe</Text>
                {row(0)}
                {row(3)}
                {row(6)}
    

            {/* <View style={styles.grid}>
                 
        <View style={styles.row}>
       
      <View>
        <View style={styles.cell} />
        <View style={styles.cell} />
        <View style={styles.cell} />
     </View>
      <View>
        <View style={styles.cell} />
        <View style={styles.cell} />
        <View style={styles.cell} />
      </View>
      <View>
         <View style={styles.cell} />
        <View style={styles.cell} />
        <View style={styles.cell} />
      </View>    
    </View>
            </View> */}
            </View>
  )
}

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // row: {
    //   flexDirection: 'row',
    //     backgroundColor: "grey"
    // },
    // cell: {
    //     width: DeviceWidth * 0.2,
    //     height: DeviceWidth * 0.2,
    //     backgroundColor: 'blue'
    // } 
});

export default Board;
