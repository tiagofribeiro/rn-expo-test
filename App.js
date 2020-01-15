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
    setGuessRounds(0);
  };

  const gameOverHandler = roundsNumber => {
    setGuessRounds(roundsNumber);
  };

  let content = <StartScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  }
  else if (guessRounds > 0) {
    content = <OverScreen roundsNumber={guessRounds} userNumber={userNumber}/>;
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
