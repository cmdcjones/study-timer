import { useState } from 'react';

export default function Timer() {
    const [time, setTime] = useState({hours:0, minutes:0, seconds:0});
    const [isRunning, setIsRunning] = useState(false);

    var updatedHours = time.hours,
        updatedMinutes = time.minutes,
        updatedSeconds = time.seconds;

    const handleTimer = (event) => {
        setIsRunning(!isRunning);
        const updatedIsRunning = !isRunning;
        console.log(updatedIsRunning);
        if (updatedIsRunning) {
            event.target.textContent = "Click to Stop";
            startTimer();
        } else {
            event.target.textContent = "Click to Start";
            setIsRunning(!isRunning);
        }
    };

    const startTimer = () => {
        countTime();
        setInterval(countTime, 1000);
    };

    const countTime = () => {
        updatedSeconds++;
        if (updatedMinutes > 59) {
            updatedHours++;
            updatedMinutes = 0;
        }

        if (updatedSeconds > 59) {
            updatedMinutes++;
            updatedSeconds = 0;
        }

        return setTime({
            hours: updatedHours,
            minutes: updatedMinutes,
            seconds: updatedSeconds,
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

