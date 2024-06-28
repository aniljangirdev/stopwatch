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

        console.log(process.env.REACT_APP_NOT_SECRET_CODE)


        return (
            <div className="main">
                <div className='app'>
                    <StopIcon onClick={reset} className="icon" />
                    {isRunning ? <PauseIcon onClick={pause} className="icon" /> : <PlayArrowIcon onClick={start} className="icon" />}
                    <span className="projectTitle">Reporting Hours for Netsmart - Anil</span>
                    <div>
                        <span>{getNumberFormatter(hours)}</span>:<span>{getNumberFormatter(minutes)}</span>:<span>{getNumberFormatter(seconds)}</span>
                    </div>
                </div>
            </div>
        )
    }

    const getNumberFormatter = (val) => {
        return val.toLocaleString('en-US', {
            minimumIntegerDigits: 2
        })
    }

    return (
        <Fragment>
            <>
                <button style={{ padding: '10px', margin: '20px' }} onClick={handleClick}>Track</button>
            </>
            {
                stopwatch ? showStopWatchTimer() : ''
            }
        </Fragment>
    )
}
export default MyStopwatch;