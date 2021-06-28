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
        if (counter <= 5) {
            const newCounter = parseInt(counter) + 1;
            setCounter(newCounter)
            setBulet(
                {
                    initialX: parseInt(locX),
                    id: counter,
                    position: 100 - (counter * 20)
                })
            setBulletList([...bulletList, bullet])
        }
    }, [counter])
    return (
        <View style={[styles.bulletList, { width: screenWidth, height: locY, top: 0 }]}>
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
        backgroundColor: 'green',
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
