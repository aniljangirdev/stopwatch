import { useEffect, useState } from "react";

import './timer.css'

const Timer = () => {

    const [second, setSecound] = useState(10)
    const [isActive, setIsActive] = useState(false)

    const toggle = () => {
        setIsActive(flag => !flag)
    }

    const onResetTimer = () => {
        setSecound(0)
        setIsActive(false)
    }

    useEffect(() => {
        // we make dependency array empty for call only once 
        let interval = null
        if (isActive)
            interval = setInterval(() => {
                setSecound(second => second + 1)
            }, 1000)
        else if (!isActive && second !== 0)
            clearInterval(interval)
        return () => clearInterval(interval)
    }, [isActive, second])




    return (
        <div className="app">
            <div className="time">
                {second}s
            </div>
            <div className="row">
                <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button className="button button-secondary" onClick={onResetTimer}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Timer;