import React from 'react'
import { View, StyleSheet } from 'react-native'
import Cell from './Cell'

const GridRow = ({player, gameWon, firstCell, board, playSquare}) => {

  const selectSquare = (cell) => {
    playSquare(cell)
  }

  const cell = (index) => (
    <Cell
      id={index}
      player={player}
      playSquare={selectSquare}
      gameWon={gameWon}
      contents={board[index]}/>
  )

  return(
    <View style={styles.row}>
      {cell(firstCell)}
      {cell(firstCell + 1)}
      {cell(firstCell + 2)}
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
      flexDirection: 'row',
      //backgroundColor: "grey"
    }
});

export default GridRow;
