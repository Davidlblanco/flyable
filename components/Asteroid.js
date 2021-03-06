import React, { useState, useEffect } from 'react';
import { StyleSheet, Animated, Text } from 'react-native';

import { Dimensions } from 'react-native';
function Asteroid({ item, locX,asteroidLoc }) {

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const [newInitial, setNewInitial] = useState(Math.random() * (screenWidth - 30))
    const [toTop, setToTop] = useState((screenHeight / 100) * item.position)

    let interval;
    useEffect(() => {
        interval = setInterval(() => {
            if (toTop < screenHeight) {
                const newToTop = toTop + 40;
                setToTop(newToTop)
            }
            else {
                setToTop(0)
                setNewInitial(Math.random() * (screenWidth - 30))
            }
        }, 500)
        asteroidLoc({top:toTop ,left:newInitial})
        return () => { clearInterval(interval) }
    }, [toTop])

    return (
        toTop > 0 ?
            <Animated.View
                style={[styles.bullet, {
                    top: toTop,
                    left: newInitial,
                }]}
            >
                {/* <Text>{toTop+' '+newInitial}</Text> */}
            </Animated.View >
            : null
    )
}
export default Asteroid

const styles = StyleSheet.create({

    bullet: {
        width: 30,
        height: 30,
        backgroundColor: 'black',
        position: 'absolute'

    },
});
