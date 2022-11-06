import { useState } from 'react';
import ResetButton from './ResetButton';
import SPRButton from './SPRButton';

export default function Timer() {
    const [time, setTime] = useState({hours:0, minutes:0, seconds:0, milliseconds:0});
    const [isRunning, setIsRunning] = useState(0);
    const [intervalId, setIntervalId] = useState();
    const [buttonStatus, setButtonStatus] = useState('Start');

    const handleTimer = () => {
        if (isRunning === 0 || isRunning === 2) {
            setButtonStatus('Pause');
            setIsRunning(1);
        } else if (isRunning === 1) {
            pauseTimer();
            setButtonStatus('Resume');
            setIsRunning(2);
        }
    };

    const pauseTimer = () => {
        clearInterval(intervalId);
    };

    return (
        <>
            <p>
                {time.hours < 10 ? `0${time.hours}` : time.hours}:
                {time.minutes < 10 ? `0${time.minutes}` : time.minutes}:
                {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
            </p>
            { isRunning === 0 ?
            <SPRButton
                time={time}
                setTime={setTime}
                intervalId={intervalId}
                setIntervalId={setIntervalId}
                buttonStatus={buttonStatus}
                setButtonStatus={setButtonStatus}
                isRunning={isRunning}
                setIsRunning={setIsRunning}
            />
            : ""
            }
            { isRunning === 1 ?
            <ResetButton
                setTime={setTime}
                setIsRunning={setIsRunning}
                intervalId={intervalId}
                setButtonStatus={setButtonStatus}
            />
            : ""
            }
        </>
    );
}

