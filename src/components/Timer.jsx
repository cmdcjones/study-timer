import { useState } from 'react';
import ResetButton from './ResetButton';
import StartButton from './StartButton';

export default function Timer() {
    const [time, setTime] = useState({hours:0, minutes:0, seconds:0, milliseconds:0});
    const [isRunning, setIsRunning] = useState(0);
    const [intervalId, setIntervalId] = useState();
    const [buttonStatus, setButtonStatus] = useState('Start');

    var updatedHours = time.hours,
        updatedMinutes = time.minutes,
        updatedSeconds = time.seconds,
        updatedMilliseconds = time.milliseconds;

    const handleTimer = () => {
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
            { isRunning === 0 ?
            <StartButton
                time={time}
                setTime={setTime}
                setIntervalId={setIntervalId}
                buttonStatus={buttonStatus}
                setButtonStatus={setButtonStatus}
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

