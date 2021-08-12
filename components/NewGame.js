import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const NewGame = ({startNewGame, won, turns}) => {

  const handleButtonClick = () => {
    startNewGame();
  }

  if (won === true || (turns === 9)) {
    return(
      <View>
        <Button style={styles.newGameButton} onPress={handleButtonClick} title={"New Game"}/>
      </View>
    )
  } else {
    return (<View/>)
  }
}


const styles = StyleSheet.create({
  newGameButton: {
    margin: 0,
    //display: "block",
    //backg "#4CAF50", /* Green */
    //border: "none",
    color: "white",
    //padding: "15px 32px",
    //textAlign: "center",
    //textDecoration: "none",
    //fontSize: "16px"
  }
});

export default NewGame;
