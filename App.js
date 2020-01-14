import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './Components/Header';
import StartScreen from './Screens/StartScreen';
import GameScreen from './Screens/GameScreen';
import OverScreen from './Screens/OverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartScreen onStartGame={startGameHandler}/>;
  if(userNumber){
    content = <GameScreen userChoice={userNumber}/>;
  }

  return (
    <View style={styles.screen}>
      <Header title="Adivinhe o Número" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
