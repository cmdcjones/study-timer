import { useState } from 'react';

export default function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    return (
        <>
            <h1>Hello world!</h1>
        </>
    );
}

