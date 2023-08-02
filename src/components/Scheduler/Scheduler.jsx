import React, { useState } from "react";
import { Button, Statistic, WeekdaySelector, Divider } from "@components";
import { SchedulerTimeSlider } from "./SchedulerTimeSlider/SchedulerTimeSlider";
import { IconCloud } from "@assets";
import { renderWeekdaysText } from "@helpers";
import "./Scheduler.styles.css";

const initialWeekdays = {
  sunday: false,
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false,
  saturday: false,
};

export const Scheduler = () => {
  const [weekdays, setWeekdays] = useState(initialWeekdays);
  const [time, setTime] = useState(12);
  const [suffix, setSuffix] = useState("am");

  const weekdaysText = renderWeekdaysText(weekdays);

  return (
    <div className="scheduler">
      <div className="scheduler__content">
        <section className="scheduler__logo">
          <IconCloud style={{ color: "#497092", fontSize: "1.875rem" }} />
        </section>
        <section className="scheduler__title">
          <span>Schedule your workflow</span>
          <h2>{`Runs every hour at ${time} ${suffix}${weekdaysText}`}</h2>
        </section>
        <section className="scheduler__interval">
          <h3>Interval</h3>
          <p>How often the workflow should run</p>
          <div className="scheduler__interval-selector">
            <Statistic value={1} suffix={suffix} />
            <Button>Change</Button>
          </div>
        </section>
        <Divider />
        <section className="scheduler__weekdays">
          <h3>Days</h3>
          <p>The days of the week if it is active</p>
          <WeekdaySelector
            days={weekdays}
            onSelection={(key) => {
              setWeekdays((prev) => ({ ...prev, [key]: !prev[key] }));
            }}
          />
        </section>
        <Divider />
        <SchedulerTimeSlider
          onAfterChange={(value, suffix) => {
            setTime(value);
            setSuffix(suffix);
          }}
        />
      </div>
      <div className="scheduler__footer">
        <Button variant="primary">Next</Button>
      </div>
    </div>
  );
};
