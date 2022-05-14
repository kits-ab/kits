import { format, isSameDay, isSameMonth, isSameYear, parseISO } from "date-fns"
import { sv } from "date-fns/locale"

export const formatPeriod = (periodStartInput: Date | string, periodEndInput: Date | string) => {
  let periodStart =
    typeof periodStartInput === "string" ? parseISO(periodStartInput) : periodStartInput
  let periodEnd = typeof periodEndInput === "string" ? parseISO(periodEndInput) : periodEndInput
  if (isSameDay(periodStart, periodEnd)) {
    return format(periodEnd, "d MMM", { locale: sv })
  } else if (isSameMonth(periodStart, periodEnd)) {
    return `${format(periodStart, "d", { locale: sv })}-${format(periodEnd, "d MMM", {
      locale: sv
    })}`
  } else if (isSameYear(periodStart, periodEnd)) {
    return `${format(periodStart, "d MMM", { locale: sv })} - ${format(periodEnd, "d MMM", {
      locale: sv
    })}`
  } else {
    return `${format(periodStart, "d MMM yyyy", { locale: sv })}-${format(periodEnd, "d MMM yyyy", {
      locale: sv
    })}`
  }
}

export const formatWeekday = (dateInput: Date | string) => {
  let date = typeof dateInput === "string" ? parseISO(dateInput) : dateInput
  const weekday = format(date, "EEEE", { locale: sv })
  return weekday.length > 0 ? weekday.charAt(0).toUpperCase() + weekday.slice(1) : weekday
}
