import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Asteroid from './Asteroid';

function AsteroidList({ locX, locY }) {

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const [counter, setCounter] = useState(1);
    const [bullet, setBulet] = useState({})
    const [asteroidList, setAsteroidList] = useState([])

    useEffect(() => {
        if (counter <= 5) {
            const newCounter = parseInt(counter) + 1;
            setCounter(newCounter)
            setBulet(
                {
                    initialX: parseInt(locX),
                    id: counter,
                    position: 100 - (counter * 20)
                })
            setAsteroidList([...asteroidList, bullet])
        }

    }, [counter])
    return (
        <View style={[styles.bulletList, { width: screenWidth, height: screenHeight + 50, top: 0 }]}>
            {
                asteroidList.map((item, index) => {
                    return (
                        <Asteroid
                            key={index}
                            item={item}
                            locX={locX}
                            locY={locY}
                        >
                        </Asteroid>
                    )
                })
            }
        </View >
    )
}

export default AsteroidList

const styles = StyleSheet.create({
    bulletList: {
        backgroundColor: 'yellow',
        left: 0,
        position: 'absolute',
        opacity: .3,
        overflow: 'hidden'
    },
    bulletListRelative: {
        position: 'relative',
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000'
    },
});
