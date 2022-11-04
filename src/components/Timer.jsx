import { useState } from 'react';

export default function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const handleTimerRunning = (event) => {
        if (!isRunning) {
            event.target.textContent = "Click to Stop";
            setIsRunning(!isRunning);
        } else {
            event.target.textContent = "Click to Start";
            setIsRunning(!isRunning);
        }
    };

    return (
        <>
            <button
                onClick={handleTimerRunning}
                onSubmit={(e) => e.preventDefault()}
            >
            Click to Start
            </button>
        </>
    );
}

