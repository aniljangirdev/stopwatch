import { useStopwatch } from "react-timer-hook";
import './mystopwatch.css'

const MyStopwatch = () => {

    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: true });

    return (
        <div className="main">
            <div className='app'>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={reset}>Reset</button>
                <div style={{ fontSize: '100px' }}>
                    <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                </div>
                <p>{isRunning ? 'Running' : 'Not running'}</p>
            </div>
        </div>

    )
}

export default MyStopwatch;