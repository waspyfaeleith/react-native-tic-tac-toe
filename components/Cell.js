import React, { useState }from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Cell = ({playSquare, contents, id, gameWon, player }) => {
  
  const selectSquare = () => {
    playSquare(id);
  }
  
  if (contents === "" && gameWon === false) {
     return(
       <td>
         <Button style={styles.cell} onPress={selectSquare} title={contents}/>
       </td>
    )
  }
  
  return (
    <td>
      { contents }
    </td>
  )

}

const styles = StyleSheet.create({
  cell: {
    height: 80,
    width: 80,
    //background: "transparent",
    //border: "none"
  }

});

export default Cell;
