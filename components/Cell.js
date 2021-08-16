import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';

const DeviceWidth = Dimensions.get('window').width;

const Cell = ({playSquare, contents, id, gameWon, player }) => {
  
  const selectSquare = () => {
    playSquare(id);
  }
  
  if (contents === "" && gameWon === false) {
     return(
       <View style={styles.cell}>
         <Button onPress={selectSquare} title={contents}/>
       </View>
    )
  }
  
  return (
    <View style={styles.cell}>
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
        borderWidth: 3,
        borderColor: 'white'
    },
    cellText: {
      fontSize: 100,
      color:'white',
      fontFamily: 'Eraser'
    }
});

export default Cell;
