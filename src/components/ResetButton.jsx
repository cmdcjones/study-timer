
export default function ResetButton({
    time,
    setTime,
    isRunning,
    setIsRunning,
    intervalId,
    buttonStatus,
    setButtonStatus
}) {
    const resetTimer = () => {
        clearInterval(intervalId);
        setButtonStatus('Start');
        setIsRunning(0);
        setTime({
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
        });
    };

    return (
            <button
                onClick={resetTimer}
            >
            Reset
            </button>
    );
}