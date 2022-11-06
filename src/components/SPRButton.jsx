
export default function SPRButton({
    time,
    setTime,
    intervalId,
    setIntervalId,
    buttonStatus,
    setButtonStatus,
    setIsRunning,
}) {
    let updatedHours = time.hours,
        updatedMinutes = time.minutes,
        updatedSeconds = time.seconds,
        updatedMilliseconds = time.milliseconds;

    const startTimer = () => {
        setButtonStatus('Pause');
        setIsRunning(1);
        countTime();
        setIntervalId(setInterval(countTime, 10));
    };

    const pauseTimer = () => {
        setButtonStatus('Resume');
        setIsRunning(2);
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
            <button 
                onClick={startTimer}
            >
            {buttonStatus}
            </button>
        </>
    );
}
