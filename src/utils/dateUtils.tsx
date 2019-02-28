import { format, isSameDay, isSameMonth, isSameYear } from "date-fns"
import * as svLocale from "date-fns/locale/sv"

export const formatPeriod = (periodStart: Date, periodEnd: Date) => {
  if (isSameDay(periodStart, periodEnd)) {
    return format(periodEnd, "D MMM", { locale: svLocale })
  } else if (isSameMonth(periodStart, periodEnd)) {
    return `${format(periodStart, "D", { locale: svLocale })}-${format(periodEnd, "D MMM", {
      locale: svLocale
    })}`
  } else if (isSameYear(periodStart, periodEnd)) {
    return `${format(periodStart, "D MMM", { locale: svLocale })} - ${format(periodEnd, "D MMM", {
      locale: svLocale
    })}`
  } else {
    return `${format(periodStart, "D MMM YYYY", { locale: svLocale })}-${format(
      periodEnd,
      "D MMM YYYY",
      { locale: svLocale }
    )}`
  }
}

export const formatWeekday = (date: Date | string) => {
  const weekday = format(date, "dddd", { locale: svLocale })
  return weekday.length > 0 ? weekday.charAt(0).toUpperCase() + weekday.slice(1) : weekday
}
