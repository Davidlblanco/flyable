import React, { useState, useEffect } from 'react';
import UseDebounce from '../utils/UseDebounce';
import Bullet from './Bullet';

function GoodBullet({ locX, locY }) {

    const [bullet, setBulet] = useState({
        start: locX,
        yPoint: locY,
        current: locX,
        end: 0,
    })

    const [bulletList, setBulletList] = useState([])

    const debounceBullet = UseDebounce(() => {
        setBulet(
            {
                start: locX,
                yPoint: locY,
                current: locX,
                end: 0,
            })

        if (bulletList.length === 20) {
            const newList = bulletList.filter((item, index) => index !== 19)
            setBulletList(newList)
        } else {
            setBulletList([...bulletList, bullet])
        }

    }, 50)

    useEffect(() => {
        debounceBullet()
    }, [locX])

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
