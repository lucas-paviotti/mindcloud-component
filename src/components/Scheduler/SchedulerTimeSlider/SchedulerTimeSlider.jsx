import React, { useState, useMemo, useCallback } from "react";
import { Button, Statistic } from "@components";
import ReactSlider from "react-slider";

export const SchedulerTimeSlider = ({ onAfterChange }) => {
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [suffix, setSuffix] = useState("am");

  const handleChange = useCallback((value) => {
    const totalMinutes = value * 5;
    const totalHours = Math.floor(totalMinutes / 60) % 24;
    const remainderMinutes = totalMinutes % 60;
    setHour(totalHours % 12 || 12);
    setMinute(remainderMinutes);
    setSuffix(totalHours < 12 ? "am" : "pm");
  }, []);

  const formattedTime = useMemo(() => {
    const formattedMinute = minute < 10 ? `0${minute}` : `${minute}`;
    return `${hour}:${formattedMinute}`;
  }, [hour, minute]);

  return (
    <section className="scheduler__time">
      <h3>Time</h3>
      <p>Which part of the day to run</p>
      <div className="scheduler__time-selector">
        <Statistic value={formattedTime} suffix={suffix} />
        <Button>Remove</Button>
      </div>
      <ReactSlider
        className="scheduler__time-slider"
        markClassName="scheduler__time-slider-mark"
        thumbClassName="scheduler__time-slider-thumb"
        trackClassName="scheduler__time-slider-track"
        max={288}
        step={1}
        onChange={handleChange}
        onAfterChange={() => {
          onAfterChange(formattedTime, suffix);
        }}
      />
    </section>
  );
};
