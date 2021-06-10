import React, { useRef, useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Animated } from 'react-native';

function Bullet({ item, locY, key }) {

    const screenHeight = Dimensions.get('window').height;
    // const toTop = useRef(new Animated.Value(locY)).current


    // React.useEffect(() => {
    //     Animated.timing(
    //         toTop,
    //         {
    //             toValue: -screenHeight,
    //             duration: 10000,
    //             useNativeDriver: true
    //         },
    //     ).start();
    // }, [locY])


    const [toTop, setToTop] = useState(locY)

    let interval;
    useEffect(() => {
        if (toTop > 0) {
            interval = setInterval(() => {
                const newToTop = parseInt(toTop) - 10;
                setToTop(newToTop)
            }, 100)
        }
        return () => { clearInterval(interval) }
    }, [toTop])


    // if (toTop === 0) {
    //     return null
    // }

    return (
        toTop > 0 ?
            <Animated.View
                style={[styles.bullet, {
                    backgroundColor: parseInt(key) % 2 == 0 ? 'red' : 'black',
                    transform: [
                        { translateX: item.current },
                        { translateY: toTop }//item.yPoint
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
        // backgroundColor: 'red',
        position: 'absolute',
    },
});
