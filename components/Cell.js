import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';

const DeviceWidth = Dimensions.get('window').width;

const Cell = ({playSquare, contents, id, gameWon, player }) => {
  
  const selectSquare = () => {
    playSquare(id);
  }

  const getCellStyle = () => {
    if (id === 1 || id === 4 || id === 7) {
      return styles.centerCell;
    } else {
      return styles.cell;
    }
  }
  
  if (contents === "" && gameWon === false) {
     return(
       <View style={getCellStyle()}>
         <Button style={styles.button} onPress={selectSquare} title={contents}/>
       </View>
    )
  }
  
  return (
    <View style={getCellStyle()}>
      <Text style={styles.cellText}>{ contents }</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  cell: {
      width: DeviceWidth * 0.3,
      height: DeviceWidth * 0.3,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
    },
    centerCell: {
      width: DeviceWidth * 0.3,
      height: DeviceWidth * 0.3,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      borderLeftWidth: 6,
      borderLeftColor: 'white',
      borderRightWidth: 6,
      borderRightColor: 'white'
    },
    cellText: {
      fontSize: 100,
      color:'white',
      fontFamily: 'Eraser',
    },
    button: {
      flex: 1
    },
    
});

export default Cell;
