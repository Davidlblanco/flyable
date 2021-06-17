import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import Bullet from './Bullet';

function BulletList({ locX, locY }) {

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    const [counter, setCounter] = useState(0);
    const [bullet, setBulet] = useState({
        initialX: parseInt(locX),
        id: counter,
        position: parseInt(locY)
    })

    const [bulletList, setBulletList] = useState([])

    let interval;
    useEffect(() => {
        if (counter < 80) {

            interval = setInterval(() => {
                const newCounter = parseInt(counter) + 1;
                setCounter(newCounter)
                setBulet(
                    {
                        initialX: parseInt(locX),
                        id: counter,
                        position: parseInt(locY)
                    })
                setBulletList([...bulletList, bullet])
            }, 100)
        }
        return () => { clearInterval(interval) }
    }, [counter])


    return (
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

    )
}

export default BulletList
