// src/utils/dateUtils.ts

import {
  parseISO,
  format,
  isValid,
  differenceInDays,
  startOfWeek,
  endOfWeek,
  isWithinInterval,
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
};
