import React, { useState, useEffect } from 'react';
import UseDebounce from '../utils/UseDebounce';
import { Dimensions, } from 'react-native';
import Bullet from './Bullet';

function BulletList({ locX, locY }) {

    // const screenWidth = parseInt(Dimensions.get('window').width);
    // const screenHeight = parseInt(Dimensions.get('window').height);

    // useEffect(() => {
    //     console.log('screenWidth:', screenWidth, 'screenHeight', screenHeight)
    // }, [])



    const [counter, setCounter] = useState(0);

    const [bullet, setBulet] = useState({
        initialX: parseInt(locX),
        id: counter,
        position: parseInt(locY)
    })

    const [bulletList, setBulletList] = useState([])

    const debounceBullet = UseDebounce(() => {
        setBulet(
            {
                initialX: parseInt(locX),
                id: counter,
                position: parseInt(locY)
            })


        setBulletList([...bulletList, bullet])


    }, 50)

    let interval;
    useEffect(() => {
        if (counter < 1) {
            interval = setInterval(() => {
                const newCounter = parseInt(counter) + 1;
                setCounter(newCounter)
                debounceBullet()
            }, 100)
        }
        return () => { clearInterval(interval) }
    }, [counter])


    function updateBullet(item, newPositionY) {
        item.position = newPositionY
        const newBulletList = bulletList;
        newBulletList[item.id] = item;
        setBulletList(newBulletList);
    }

    return (
        bulletList.map((item, index) => {
            return (
                <Bullet
                    key={index}
                    item={item}
                    locX={locX}
                    locY={locY}
                    updateBullet={updateBullet}
                >
                </Bullet>
            )
        }
        )
    )
}

export default BulletList
