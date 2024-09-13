// src/utils/dateUtils.ts

import {
  parseISO,
  format,
  isValid,
  differenceInDays,
  startOfWeek,
  endOfWeek,
  isWithinInterval,
  getMonth,
  addDays,
  addMonths,
} from "date-fns";
import { enUS } from "date-fns/locale";

export const dateUtils = {
  parse(dateString: string): Date | null {
    const parsedDate = parseISO(dateString);
    return isValid(parsedDate) ? parsedDate : null;
  },

  format(date: Date | string, formatString: string = "dd/MM/yyyy"): string {
    const parsedDate = typeof date === "string" ? this.parse(date) : date;
    if (!parsedDate) return "Date invalide";
    return format(parsedDate, formatString, { locale: enUS });
  },

  formatWithTime(
    date: Date | string,
    formatString: string = "dd/MM/yyyy HH:mm"
  ): string {
    return this.format(date, formatString);
  },

  getDaysDifference(dateString: Date | string): number {
    const parsedDate =
      typeof dateString === "string" ? this.parse(dateString) : dateString;
    return differenceInDays(parsedDate, new Date());
  },

  isOverdue(dateString: string): boolean {
    const parsedDate = this.parse(dateString);
    if (!parsedDate) return false;
    return parsedDate < new Date();
  },

  // You can add more useful methods here
  getToday(date: Date | string = new Date()): string {
    return `${format(date, "yyyy-MM-dd")}T${format(date, "HH:mm")}`;
  },

  isInCurrentMonth(date: Date | string): boolean {
    const parsedDate = typeof date === "string" ? this.parse(date) : date;
    if (!parsedDate) return false;
    const currentDate = new Date();
    return (
      getMonth(parsedDate) === getMonth(currentDate) &&
      parsedDate.getFullYear() === currentDate.getFullYear()
    );
  },

  isInCurrentWeek(date: Date | string): boolean {
    const parsedDate = typeof date === "string" ? this.parse(date) : date;
    if (!parsedDate) return false;
    const currentDate = new Date();
    const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 }); // Start week on Monday
    const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 }); // End week on Sunday
    return isWithinInterval(parsedDate, { start: weekStart, end: weekEnd });
  },

  isInNextWeek(date: Date | string): boolean {
    const parsedDate = typeof date === "string" ? this.parse(date) : date;
    if (!parsedDate) return false;
    const currentDate = new Date();
    const thisWeekEnd = endOfWeek(currentDate, { weekStartsOn: 1 });
    const nextWeekEnd = addDays(thisWeekEnd, 7);
    return isWithinInterval(parsedDate, {
      start: thisWeekEnd,
      end: nextWeekEnd,
    });
  },
  isInNextMonth(date: Date | string): boolean {
    const parsedDate = typeof date === "string" ? this.parse(date) : date;
    if (!parsedDate) return false;
    const currentDate = new Date();
    const currentMonth = getMonth(currentDate);
    const nextMonth = getMonth(addMonths(currentDate, 1));
    return getMonth(parsedDate) === nextMonth;
  },
};
