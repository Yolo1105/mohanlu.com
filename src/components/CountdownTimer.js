import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running && time > 0) {
      timer = setTimeout(() => setTime(time - 1), 1000);
    } else if (time === 0 && running) {
      setRunning(false);
      alert('Time is up!');
    }
    return () => clearTimeout(timer);
  }, [time, running]);

  const startTimer = () => {
    setRunning(true);
  };

  const resetTimer = () => {
    setTime(0);
    setRunning(false);
  };

  return (
    <div className="countdown-timer">
      <h2>Countdown Timer</h2>
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(Number(e.target.value))}
        placeholder="Set time in seconds"
      />
      <button onClick={startTimer}>Start</button>
      <button onClick={resetTimer}>Reset</button>
      <div style={{ position: 'fixed', top: 0, right: 0, background: 'white', padding: '10px', fontSize: '24px' }}>
        {time}s
      </div>
    </div>
  );
};

export default CountdownTimer;