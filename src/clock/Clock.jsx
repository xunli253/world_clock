import styled from 'styled-components';
import ClockBackground from './ClockBackground';
import ClockPointer from '../pointer/clockPointer';
import Title from './Title';
import Time from './Time';
import { useEffect, useState } from 'react';

const Clock = (props) => {

    const [light, setLight] = useState(true)
    const [hourDeg, setHourDeg] = useState(0)
    const [minuteDeg, setMinuteDeg] = useState(0)
    const [secondDeg, setSecondDeg] = useState(0)
    const [Hour, setHour] = useState()
    const [timeValue, setTimeValue] = useState()
    const deg = 6

    const setTime = () => {
        let nowTime = new Date()
        let day = new Date(nowTime.getTime() + props.timezone * 3600000)
        let hour = day.getUTCHours() * deg * 5
        let minute = day.getUTCMinutes() * deg
        let second = day.getUTCSeconds() * deg
        let timeValue = day.getUTCHours().toString().padStart(2, '0') + ":" + day.getUTCMinutes().toString().padStart(2, '0') + ":" + day.getUTCSeconds().toString().padStart(2, '0')
        setHourDeg(hour + minute / 12)
        setMinuteDeg(minute + second / 12)
        setSecondDeg(second)
        setHour(day.getUTCHours())
        setTimeValue(timeValue)

    }

    useEffect(() => {
        setTime()
        const interval = setInterval(() => {
            setTime()
        }, 100)
    }, [])

    useEffect(() => {

        if (+Hour >= 19 || +Hour < 6) {
            setLight(false)
        }
    }, [Hour])

    return <ClockBackground>
        <Title city={props.city} />
        <ClockPointer is_white={light} hourDeg={hourDeg} minuteDeg={minuteDeg} secondDeg={secondDeg} />
        <Time time={timeValue} />
    </ClockBackground>;
}




export default Clock;