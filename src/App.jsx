import { useEffect, useState } from "react";

function App() {
  let [time, setTime] = useState({
    hours: 12,
    minutes: 34,
    seconds: '00',
    ampm: "PM",
  });

  let configs;

  const updateTime = () => {
    let currentTime = new Date();
    let minutes = currentTime.getMinutes() >= 10 ? currentTime.getMinutes() : "0" + currentTime.getMinutes();
    let hours = currentTime.getHours();
    let seconds = currentTime.getSeconds() >= 10 ? currentTime.getSeconds() : "0" + currentTime.getSeconds();
    let ampm = "AM";
    if (hours >= 12) {
      hours -= 12;
      ampm = "PM";
    }
    if (hours === 0) hours = 12;
    hours = hours >= 10 ? hours : "0" + hours;

    setTime({
      hours,
      minutes,
      seconds,
      ampm,
    });
  };

  useEffect(() => {
    updateTime();
    let interval = setInterval(updateTime, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className="divider"></div>
      <div className="clock">
        <div className="hours">
          <span>{time.ampm}</span>
          {time.hours}
        </div>
        <div className="minutes">{time.minutes}</div>
      </div>
    </>
  );
}

export default App;
