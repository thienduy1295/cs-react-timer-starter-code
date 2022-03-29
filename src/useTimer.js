import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);

  // const isStart = useRef(); cai nay de lam gi chua biet
  const active = useRef();
  const refInterval = useRef();

  const startTimer = () => {
    refInterval.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    active.current.disabled = true;
  };
  const stopTimer = () => {
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    clearInterval(refInterval.current);
    setTime(0);
    active.current.disabled = false;
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
