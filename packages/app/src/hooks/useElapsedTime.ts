import { useCallback } from 'react';

function useElapsedTime() {
  const getYearsDiff = useCallback((nowDate: Date, fromDate: Date) => {
    const years = nowDate.getFullYear() - fromDate.getFullYear();
    return years <= 0 ? 0 : years;
  }, []);

  const getMonthsDiff = useCallback((nowDate: Date, fromDate: Date, years: number) => {
    let months = nowDate.getMonth() - fromDate.getMonth() +
      (12 * (nowDate.getFullYear() - fromDate.getFullYear()));
    months = months - (years * 12);
    return months < 0 ? months + 12 : months;
  }, []);

  const getElapsedTime = useCallback((nowDate: Date, fromDate: Date) => {
    let result = '';
    const years = getYearsDiff(nowDate, fromDate);
    const months = getMonthsDiff(nowDate, fromDate, years);
    result += years > 0
      ? `${years} ${years > 1 ? 'years' : 'year'}` : '';
    result += months > 0
      ? ` ${months} ${months > 1 ? 'months' : 'month'}` : '';
    return result;
  },
    [
      getYearsDiff,
      getMonthsDiff
    ]
  );

  return getElapsedTime;
}

export default useElapsedTime;