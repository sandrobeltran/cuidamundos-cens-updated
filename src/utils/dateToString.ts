export default function dateToString(stringDate: string): string {
  const date = new Date(stringDate);

  let string = `${date.getDate().toString().padStart(2, "00")}/${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "00")}/${date.getFullYear()}`;

  return string;
}

export function getRemainingTime(deadline: string): {
  d: number;
  h: number;
  m: number;
  message: string;
} {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const today = new Date();

  const dead = new Date(deadline);

  const remainingTime = dead.getTime() - today.getTime();

  let days = Math.floor(remainingTime / 86400000);
  let hours = Math.floor((remainingTime % 86400000) / 3600000);
  let minutes = Math.round(((remainingTime % 86400000) % 3600000) / 60000);

  let message = "";

  if (remainingTime < 0) {
    message += "Atrasada ";
  } else {
    message += "Faltan ";
  }
  if (days) {
    message += Math.abs(days) + "d ";
  }

  if (hours) {
    message += Math.abs(hours) + "h ";
  }

  if (minutes) {
    message += Math.abs(minutes) + "m";
  }

  return {
    d: days,
    h: hours,
    m: minutes,
    message,
  };
}

export function getIsoDate(dated?: Date): string {
  const rawDate = dated || new Date();
  const formattedDate = rawDate.toISOString().substring(0, 10);
  return formattedDate; // Output: "YYYY-MM-DD"
}

export function getTimeFromDate(date: Date) {
  // Get the hour and minutes
  let hours = date.getHours();
  const minutes = date.getMinutes();

  // Determine AM or PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert 24-hour time to 12-hour time
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Format minutes to always be two digits
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  // Combine into the final string
  const timeString = `${hours}:${formattedMinutes} ${ampm}`;

  return timeString; // Output example: "2:35 PM"
}
