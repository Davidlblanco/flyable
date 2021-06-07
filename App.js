import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, Animated, PanResponder } from 'react-native';
import GoodBullet from './components/GoodBullet';
import Ship from './components/Ship';
// import styles from './styles/app'

export default function App() {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [shipAxe, setShipAxe] = useState(50);
  const [locX, setLocX] = useState(0);
  const [locY, setLocY] = useState(0);


  const [bulletOn, setBulletOn] = useState(false)


  // useEffect(() => {
  //   console.log(locX, locY)
  // }, [locX, locY])



  return (
    <View style={styles.container} onResponderMove={(evt) => { setLocX(evt.locationX) }}>

      <GoodBullet locX={locX + (screenWidth / 2 - 5)} locY={locY + (screenHeight / 2 - 5)} />
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
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5
  }
});