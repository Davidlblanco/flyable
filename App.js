import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import BulletList from './components/BulletList';
import AsteroidList from './components/AsteroidList';
import Ship from './components/Ship';

export default function App() {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [locX, setLocX] = useState(0);
  const [locY, setLocY] = useState(0);
  const [asteroidLoc,setAsteroidLoc]=useState({});
  //Game Over
  useEffect(()=>{
    let shipPositionY = locY+screenHeight/2;
    let shipPositionX = locX+screenWidth/2;
    // console.log(asteroidLoc.left<(shipPositionX+60),asteroidLoc.left>(shipPositionX-60))
    if(
      asteroidLoc.top<(shipPositionY+60)&&asteroidLoc.top>(shipPositionY-60)
      &&
      asteroidLoc.left<(shipPositionX+60)&&asteroidLoc.left>(shipPositionX-60)
      ){
      console.log('gameover')
    }else{
      console.log('running')
    }
  },[locY,locX,asteroidLoc])
  

  return (
    <View style={styles.container} onResponderMove={(evt) => { setLocX(evt.locationX) }}>
      <AsteroidList locX={locX + (screenWidth / 2 - 5)} locY={locY + (screenHeight / 2 - 5)} asteroidLoc={setAsteroidLoc}></AsteroidList>
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