export const renderWeekdaysText = (weekdays) => {
  if (Object.keys(weekdays).every((key) => weekdays[key])) return ", everyday";
  if (Object.keys(weekdays).every((key) => !weekdays[key])) return "";
  if (
    !weekdays.monday &&
    !weekdays.tuesday &&
    !weekdays.wednesday &&
    !weekdays.thursday &&
    !weekdays.friday &&
    weekdays.saturday &&
    weekdays.sunday
  )
    return ", only on weekends";
  if (
    weekdays.monday &&
    weekdays.tuesday &&
    weekdays.wednesday &&
    weekdays.thursday &&
    weekdays.friday &&
    !weekdays.saturday &&
    !weekdays.sunday
  )
    return ", on weekdays";
  return `, on ${Object.keys(weekdays)
    .filter((key) => weekdays[key])
    .join(", ")}`;
};
