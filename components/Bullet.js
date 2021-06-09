import React, { useRef } from 'react';
import { Dimensions, StyleSheet, Animated } from 'react-native';

function Bullet({ item, locX, locY }) {

    const screenHeight = Dimensions.get('window').height;
    const toTop = useRef(new Animated.Value(locY)).current


    React.useEffect(() => {
        Animated.timing(
            toTop,
            {
                toValue: -screenHeight,
                duration: 10000,
                useNativeDriver: true
            },
        ).start();
    }, [locY])


    return (
        <Animated.View
            style={[styles.bullet, {
                transform: [
                    { translateX: item.current },
                    { translateY: toTop }//item.yPoint
                ]
            }]}
        >
        </Animated.View >
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
        backgroundColor: 'red',
        position: 'absolute'
    },
});
