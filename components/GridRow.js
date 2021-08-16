import React from 'react'
import { View, StyleSheet } from 'react-native'
import Cell from './Cell'

const GridRow = ({player, gameWon, firstCell, board, playSquare}) => {

  const selectSquare = (cell) => {
    playSquare(cell)
  }

  const getRowStyle = () => {
    if (firstCell === 3) {
      return styles.centerRow;
    } else {
      return styles.row;
    }
  }

  const cell = (index) => (
    <Cell
      style={styles.centreColumn}
      id={index}
      player={player}
      playSquare={selectSquare}
      gameWon={gameWon}
      contents={board[index]}/>
  )

  return(
    <View style={getRowStyle()}>
      {cell(firstCell)}
      {cell(firstCell + 1)}
      {cell(firstCell + 2)}
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  centerRow: {
    flexDirection: 'row',
    borderTopWidth: 6,
    borderTopColor: 'white',
    borderBottomWidth: 6,
    borderBottomColor: 'white'
  }
  
});

export default GridRow;
