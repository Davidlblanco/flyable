import React, { useState, useEffect } from 'react';
import UseDebounce from '../utils/UseDebounce';
import Bullet from './Bullet';

function GoodBullet({ locX, locY }) {

    const [bullet, setBulet] = useState({
        current: parseInt(locX),
    })

    const [bulletList, setBulletList] = useState([])

    const debounceBullet = UseDebounce(() => {
        setBulet(
            {
                current: parseInt(locX)
            })

        // if (bulletList.length === 20) {
        // const newList = bulletList.filter((item, index) => index !== 19)

        // const newList = bulletList.splice(1, 19)
        // setBulletList(newList)
        // } else {
        setBulletList([...bulletList, bullet])
        // }

    }, 50)

    // useEffect(() => {
    //     debounceBullet()
    // }, [locX])

    let interval;
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        interval = setInterval(() => {
            const newCounter = parseInt(counter) + 1;
            setCounter(newCounter)
            debounceBullet()
        }, 100)
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
        }
        )
    )
}

export default GoodBullet
