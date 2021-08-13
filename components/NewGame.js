import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const NewGame = ({startNewGame, won, turns}) => {

  const handleButtonClick = () => {
    startNewGame();
  }

  if (won === true || (turns === 9)) {
    return(
      <View style={styles.newGame}>
        <Button style={styles.newGameButton} onPress={handleButtonClick} title={"New Game"}/>
      </View>
    )
  } else {
    return (<View/>)
  }
}


const styles = StyleSheet.create({
  newGame: {
    padding: 4,
    alignContent: 'center'
  },
  newGameButton: {
    margin: 0,
    color: "white",
  }
});

export default NewGame;
