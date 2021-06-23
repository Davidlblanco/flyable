import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Bullet from './Bullet';

function BulletList({ locX, locY }) {

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    const [counter, setCounter] = useState(0);
    const [bullet, setBulet] = useState({
        initialX: parseInt(locX),
        id: counter,
        position: 100
    })

    const [bulletList, setBulletList] = useState([])

    let interval;
    useEffect(() => {
        if (counter < 10) {

            interval = setInterval(() => {
                const newCounter = parseInt(counter) + 1;
                setCounter(newCounter)
                setBulet(
                    {
                        initialX: parseInt(locX),
                        id: counter,
                        position: 100
                    })
                setBulletList([...bulletList, bullet])
            }, 100)
        }
        return () => { clearInterval(interval) }
    }, [counter])

    return (
        <View style={[styles.bulletList, { width: screenWidth, height: screenHeight, top: locY - screenHeight }]}>
            {
                bulletList.map((item, index) => {
                    return (
                        <Bullet
                            key={index}
                            item={item}
                            locX={locX}
                            locY={locY}
                        >
                        </Bullet>
                    )
                })
            }
        </View >
    )
}

export default BulletList

const styles = StyleSheet.create({
    bulletList: {
        left: 0,
        backgroundColor: 'green',
        position: 'absolute',
        opacity: .3,
        // transform: [
        //     { translateX: -60 }
        // ]
    }, bulletListRelative: {
        position: 'relative',
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000'
    },
});
