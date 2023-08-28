import React, { useState, useEffect } from 'react';

export const useTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const days = time.getDate() - 1;
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return time
};

export default useTime