import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Dimensions, StyleSheet, Text, View, Animated, PanResponder } from 'react-native';
import Ship from './components/Ship';
// import styles from './styles/app'

export default function App() {
  const screenWidth = Dimensions.get('window').width;
  const [shipAxe, setShipAxe] = useState(50);
  const [locX, setLocX] = useState(null);
  const [locY, setLocY] = useState(null);


  // console.log(screenWidth / 2)

  const center = (screenWidth / 2) - 25;

  // console.log(screenWidth, center)


  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ]
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current;



  return (
    <View style={styles.container} onResponderMove={(evt) => { setLocX(evt.locationX) }}>
      {/* <Text>App {locX != null ? locX : ''}</Text> */}


      {/* <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
      </Animated.View> */}



      <Ship center={center} />

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