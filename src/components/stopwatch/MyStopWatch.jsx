import { useStopwatch } from "react-timer-hook";
import './mystopwatch.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import { Fragment, useState } from "react";

const MyStopwatch = () => {

    const [stopwatch, setStopWatch] = useState(false)

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: true });
    function handleClick() {
        setStopWatch(flag => !flag);
    }
    const showStopWatchTimer = () => {
        return (
            <div className="main">
                <div className='app'>
                    <StopIcon onClick={reset} className="icon" />
                    {isRunning ? <PauseIcon onClick={pause} className="icon" /> : <PlayArrowIcon onClick={start} className="icon" />}
                    <span className="projectTitle">Reporting Hours for Netsmart - Anil</span>
                    <div>
                        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <Fragment>
            <button style={{ backgroundColor: 'red' }} onClick={handleClick}>Track</button>
            {
                stopwatch ? showStopWatchTimer() : ''
            }
        </Fragment>
    )
}
export default MyStopwatch;