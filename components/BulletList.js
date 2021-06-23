import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Bullet from './Bullet';

function BulletList({ locX, locY }) {

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const [counter, setCounter] = useState(1);
    const [bullet, setBulet] = useState({})
    const [bulletList, setBulletList] = useState([])

    useEffect(() => {
        if (counter < 11) {
            const newCounter = parseInt(counter) + 1;
            setCounter(newCounter)
            setBulet(
                {
                    initialX: parseInt(locX),
                    id: counter,
                    position: 100 - (counter * 10)
                })
            setBulletList([...bulletList, bullet])
        }
    }, [counter])

    return (
        <View style={[styles.bulletList, { width: screenWidth, height: screenHeight, top: locY - screenHeight }]}>
            {counter === 11 ?
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
                }) : null
            }
        </View >
    )
}

export default BulletList

const styles = StyleSheet.create({
    bulletList: {
        left: 0,
        position: 'absolute',
        opacity: .3,
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
