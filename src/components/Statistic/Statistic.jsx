import React from "react";
import "./Statistic.styles.css";

export const Statistic = ({ value, suffix }) => {
  return (
    <div className="statistic">
      <span className="statistic__value">{value}</span>
      {suffix && <span className="statistic__suffix">{suffix}</span>}
    </div>
  );
};
