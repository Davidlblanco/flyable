import React, { useState, useRef, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, center, Animated, PanResponder } from 'react-native';
import UseDebounce from '../utils/UseDebounce';

function GoodBullet({ locX, locY }) {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const [top, setTop] = useState(10)
    // console.log(typeof screenHeight, top)
    const [bullet, setBulet] = useState({
        start: locX,
        current: locX,
        end: 0,
    })
    const [bulletList, setBulletList] = useState([])

    const debounceBullet = UseDebounce(() => {
        setBulet(
            {
                start: locX,
                current: locX,
                end: 0,
            })

        if (bulletList.length === 20) {
            const newList = bulletList.filter((item, index) => index !== 19)
            setBulletList(newList)
        } else {
            setBulletList([...bulletList, bullet])
        }
        // console.log(bulletList)

        // clearInterval(interval)

        // interval = setInterval(() => {
        //     bulletList.forEach(item => {
        //         item.current = item.current - 1;
        //         console.log(item)
        //     })
        // }, 3000)
    }
        , 500)

    useEffect(() => {
        debounceBullet()
    }, [locX])

    let newBL = [];

    let interval;

    useEffect(() => {

        // let interval;
        // console.log(typeof top)
        // if (top > -800) {
        // interval = setInterval(() => {
        // bullet.start = locX;
        // console.log(bullet, locX, locY)
        // setTop(() => { top - 1 })
        // }, 3000)
        // }
        // else {
        // return () => { clearInterval(interval) }
        // }
    }, [])


    return (
        bulletList.map((item, index) => {
            return (

                <View key={index} style={{ ...styles.bullet, top: item.current, left: locX }}>

                    {/* <View style={{ ...styles.bullet, top: top }}></View > */}
                </View >
            )
        }
        )
    )
}

export default GoodBullet

const styles = StyleSheet.create({
    holder: {
        borderColor: 'green',
        borderWidth: 1,
        position: 'absolute'

    },
    bullet: {
        width: 10,
        height: 10,
        backgroundColor: 'red',
        position: 'absolute'
    },
});
