import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';

dayjs.extend(calendar);

export function formatDate(date: Date) {
  return dayjs(date).calendar();
}
