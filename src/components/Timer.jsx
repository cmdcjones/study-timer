import { useState } from 'react';
import ResetButton from './ResetButton';

export default function Timer() {
    const [time, setTime] = useState({hours:0, minutes:0, seconds:0, milliseconds:0});
    const [isRunning, setIsRunning] = useState(0);
    const [intervalId, setIntervalId] = useState();
    const [buttonStatus, setButtonStatus] = useState('Start');

    var updatedHours = time.hours,
        updatedMinutes = time.minutes,
        updatedSeconds = time.seconds,
        updatedMilliseconds = time.milliseconds;

    const handleTimer = (event) => {
        if (isRunning === 0 || isRunning === 2) {
            startTimer();
            setButtonStatus('Pause');
            setIsRunning(1);
        } else if (isRunning === 1) {
            pauseTimer();
            setButtonStatus('Resume');
            setIsRunning(2);
        }
    };

    const startTimer = () => {
        countTime();
        setIntervalId(setInterval(countTime, 10));
    };

    const pauseTimer = () => {
        clearInterval(intervalId);
    };

    const countTime = () => {
        if (updatedMinutes > 59) {
            updatedHours++;
            updatedMinutes = 0;
        }

        if (updatedSeconds > 59) {
            updatedMinutes++;
            updatedSeconds = 0;
        }
        if (updatedMilliseconds > 99) {
            updatedSeconds++;
            updatedMilliseconds = 0;
        }
        updatedMilliseconds++;

        return setTime({
            hours: updatedHours,
            minutes: updatedMinutes,
            seconds: updatedSeconds,
            milliseconds: updatedMilliseconds,
        });
    };

    return (
        <>
            <p>
                {time.hours < 10 ? `0${time.hours}` : time.hours}:
                {time.minutes < 10 ? `0${time.minutes}` : time.minutes}:
                {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
            </p>
            <button
                onClick={handleTimer}
            >
        {buttonStatus}
            </button>
            { isRunning ?
            <ResetButton
                time={time}
                setTime={setTime}
                isRunning={isRunning}
                setIsRunning={setIsRunning}
                intervalId={intervalId}
                buttonStatus={buttonStatus}
                setButtonStatus={setButtonStatus}
            />
            : ""
            }
        </>
    );
}

