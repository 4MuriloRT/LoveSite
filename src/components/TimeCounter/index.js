import "./timecounter.css";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const startDate = dayjs("2024-05-14");

const TimeCounter = () => {
  const [timeTogether, setTimeTogether] = useState("");

  useEffect(() => {
    const updateCounter = () => {
      const now = dayjs();
      const diff = dayjs.duration(now.diff(startDate));
      setTimeTogether(
        `${diff.months()} meses, ${diff.days()} dias, ${diff.hours()} horas, ${diff.minutes()} minutos e ${diff.seconds()} segundos`
      );
    };
    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  return <p className="time-counter">{timeTogether}</p>;
};

export default TimeCounter;