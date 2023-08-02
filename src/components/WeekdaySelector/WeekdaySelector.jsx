import React from "react";
import "./WeekdaySelector.styles.css";

export const WeekdaySelector = ({ days, onSelection }) => {
  return (
    <div className="weekday-selector">
      {Object.keys(days).map((key, index) => {
        return (
          <button
            key={index}
            className={`weekday-selector__button ${days[key] ? "active" : ""}`}
            onClick={() => onSelection(key)}
          >
            {key.slice(0, 3)}
          </button>
        );
      })}
    </div>
  );
};
