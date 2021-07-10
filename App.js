import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import BulletList from './components/BulletList';
import AsteroidList from './components/AsteroidList';
import Ship from './components/Ship';

export default function App() {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [locX, setLocX] = useState(0);
  const [locY, setLocY] = useState(0);

  return (
    <View style={styles.container} onResponderMove={(evt) => { setLocX(evt.locationX) }}>
      <AsteroidList locX={locX + (screenWidth / 2 - 5)} locY={locY + (screenHeight / 2 - 5)}></AsteroidList>

      <BulletList locX={locX + (screenWidth / 2 - 5)} locY={locY + (screenHeight / 2 - 5)} />
      <Ship setLocX={setLocX} setLocY={setLocY} />

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});