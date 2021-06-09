import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, center, Animated, PanResponder } from 'react-native';


function Ship({ setLocX, setLocY }) {
    const [pan, setPan] = useState(new Animated.ValueXY());

    const panResponder = useState(
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
                ],
                { useNativeDriver: false }
            ),
            onPanResponderRelease: () => {
                pan.flattenOffset();
            }
        })
    )[0];


    const [positionX, setPositionX] = useState(pan.x)
    const [positionY, setPositionY] = useState(pan.y)

    useEffect(() => {
        setPositionX(pan.x)
        setPositionY(pan.y)
    }, [pan])


    // X -
    // y |

    const handleTouchEnd = (e) => {

    }

    const handleTouchMove = () => {
        let pX = JSON.stringify(pan.x);
        let pY = JSON.stringify(pan.y);
        pX = parseInt(pX)
        pY = parseInt(pY)
        setLocX(pX)
        setLocY(pY)
    }

    const handleTouchStart = () => {
        // console.log('touchStart')
    }

    return (
        <View style={styles.container}

            onTouchStart={(e) => handleTouchStart(e)}
            onTouchMove={() => handleTouchMove()}
            onTouchEnd={(e) => handleTouchEnd(e)}

        >
            <Animated.View
                style={{
                    transform: [{ translateX: pan.x }, { translateY: pan.y }]
                }}
                {...panResponder.panHandlers}
            >
                <View style={styles.shipHolder} >
                    <View style={styles.ship} />
                </View>
            </Animated.View>
        </View >


    );
}


const styles = StyleSheet.create({
    titleText: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: "bold"
    },
    shipHolder: {
        width: 200,
        height: 200,
        borderColor: "red",
        borderWidth: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    ship: {
        width: 50,
        height: 20,
        backgroundColor: "blue",
        borderRadius: 5,
    }
});

export default Ship


