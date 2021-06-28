import React, { useState, useEffect } from 'react';
import { StyleSheet, Animated } from 'react-native';

import { Dimensions } from 'react-native';
function Bullet({ item, locX }) {

    const screenHeight = Dimensions.get('window').height;
    const [newInitial, setNewInitial] = useState(item.initialX)
    const [toTop, setToTop] = useState((screenHeight / 100) * item.position)

    let interval;
    useEffect(() => {
        interval = setInterval(() => {
            if (toTop > 0) {
                const newToTop = parseInt(toTop) - 40;
                setToTop(newToTop)
            }
            else {
                setToTop(screenHeight)
                setNewInitial(locX)
            }
        }, 10)
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
            </Animated.View >
            : null
    )
}

export default Bullet

const styles = StyleSheet.create({

    bullet: {
        width: 10,
        height: 10,
        backgroundColor: 'black',
        position: 'absolute'

    },
});
