import { useState } from 'react';

export default function Timer() {
    const [time, setTime] = useState({hours:0, minutes:0, seconds:0, milliseconds:0});
    const [isRunning, setIsRunning] = useState(0);
    const [intervalId, setIntervalId] = useState();

    var updatedHours = time.hours,
        updatedMinutes = time.minutes,
        updatedSeconds = time.seconds,
        updatedMilliseconds = time.milliseconds;

    const handleTimer = (event) => {
        if (isRunning === 0) {
            startTimer();
            event.target.textContent = "Click to Pause";
            setIsRunning(1);
        } else if (isRunning === 1) {
            stopTimer();
            event.target.textContent = "Click to Resume";
            setIsRunning(0);
        }
    };

    const startTimer = () => {
        countTime();
        setIntervalId(setInterval(countTime, 10));
    };

    const stopTimer = () => {
        clearInterval(intervalId);
    }

    const resetTimer = () => {
        clearInterval(intervalId);
        setIsRunning(0);
        setTime({
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
        });
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
            Click to Start
            </button>
        </>
    );
}

