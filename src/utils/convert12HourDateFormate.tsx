export const convert12HourDateFormat = (_24dateTime: string | undefined) => {
  // Create a new Date object with the 24-hour time
  const date = new Date(`1970-01-01T${_24dateTime}:00`);

  // Get the hours and minutes
  let hours = date.getHours();
  const minutes = date.getMinutes();

  // Convert to 12-hour format
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Format the time as a string
  const timeString = `${hours}:${
    minutes < 10 ? "0" + minutes : minutes
  } ${period}`;

  return timeString;
};
