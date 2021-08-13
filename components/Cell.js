import React, { useState }from 'react';
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
      <Text>{ contents }</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  // cell: {
  //   height: 80,
  //   width: 80,
  //   //background: "transparent",
  //   //border: "none"
  // }

  cell: {
        width: DeviceWidth * 0.1,
        height: DeviceWidth * 0.1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        //padding: 3
    }

});

export default Cell;
