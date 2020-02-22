import { format, isSameDay, isSameMonth, isSameYear } from "date-fns"
import { sv } from "date-fns/locale"

export const formatPeriod = (periodStart: Date | string, periodEnd: Date | string) => {
  const periodStartDate = new Date(periodStart)
  const periodEndDate = new Date(periodEnd)
  if (isSameDay(periodStartDate, periodEndDate)) {
    return format(periodEndDate, "d MMM", { locale: sv })
  } else if (isSameMonth(periodStartDate, periodEndDate)) {
    return `${format(periodStartDate, "d", { locale: sv })}-${format(periodEndDate, "d MMM", {
      locale: sv
    })}`
  } else if (isSameYear(periodStartDate, periodEndDate)) {
    return `${format(periodStartDate, "d MMM", { locale: sv })} - ${format(periodEndDate, "d MMM", {
      locale: sv
    })}`
  } else {
    return `${format(periodStartDate, "d MMM yyyy", { locale: sv })}-${format(
      periodEndDate,
      "d MMM yyyy",
      { locale: sv }
    )}`
  }
}

export const formatWeekday = (date: Date | string) => {
  const weekday = format(new Date(date), "EEEE", { locale: sv })
  return weekday.length > 0 ? weekday.charAt(0).toUpperCase() + weekday.slice(1) : weekday
}
