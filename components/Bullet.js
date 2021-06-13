import React, { useRef, useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Animated } from 'react-native';

function Bullet({ item, locY, locX, updateBullet }) {



    const [newInitial, setNewInitial] = useState(item.initialX)
    const [toTop, setToTop] = useState(parseInt(locY))

    let interval;
    useEffect(() => {
        interval = setInterval(() => {
            updateBullet(item, toTop)
            if (toTop > 0) {
                const newToTop = parseInt(toTop) - 10;
                setToTop(newToTop)
            }
            else {
                setToTop(locY)
                setNewInitial(locX)
            }

        }, 100)
        return () => { clearInterval(interval) }
    }, [toTop])



    return (
        toTop > 0 ?
            <Animated.View
                style={[styles.bullet, {
                    transform: [
                        { translateX: newInitial },
                        { translateY: toTop }
                    ]
                }]}
            >
            </Animated.View >
            : null
    )
}

export default Bullet

const styles = StyleSheet.create({
    holder: {
        borderColor: 'green',
        borderWidth: 1,
        position: 'absolute'

    },
    bullet: {
        width: 10,
        height: 10,
        top: 0,
        left: 0,
        backgroundColor: 'black',
        position: 'absolute',
    },
});
