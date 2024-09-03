export const timeFormatter = new Intl.NumberFormat("es-CO", {
  maximumFractionDigits: 0,
  style: "decimal",
});

export function parseGameTime(time: number) {
  return `${Math.floor(time / 60)
    .toString()
    .padStart(2, "00")}:${timeFormatter
    .format(time % 60)
    .toString()
    .padStart(2, "00")}`;
}

export const gradeFormatter = new Intl.NumberFormat("es-CO", {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
  style: "decimal",
});
