import dayjs from 'dayjs';

export function timeFormatter(time) {
  return dayjs(time).format('YYYY-MM-DD');
}
