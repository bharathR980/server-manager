export function formatLastUpdated(givenTime: number | string): string {
    const currentTime = Date.now();
    const timestamp = new Date(givenTime).getTime();
    const timeDifference = currentTime - timestamp;
    
    // Define time intervals in milliseconds
    const minuteInMs = 60 * 1000;
    const hourInMs = 60 * minuteInMs;
    const dayInMs = 24 * hourInMs;
    const weekInMs = 7 * dayInMs;
    const monthInMs = 30 * dayInMs;
    
    if (timeDifference < minuteInMs) {
      return `Last updated a few seconds ago`;
    } else if (timeDifference < hourInMs) {
      const minutes = Math.floor(timeDifference / minuteInMs);
      return `Last updated ${minutes} ${minutes === 1 ? 'min' : 'mins'} ago`;
    } else if (timeDifference < dayInMs) {
      const hours = Math.floor(timeDifference / hourInMs);
      return `Last updated ${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (timeDifference < weekInMs) {
      const days = Math.floor(timeDifference / dayInMs);
      return `Last updated ${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else if (timeDifference < monthInMs) {
      const weeks = Math.floor(timeDifference / weekInMs);
      return `Last updated ${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
    } else {
      const months = Math.floor(timeDifference / monthInMs);
      return `Last updated ${months} ${months === 1 ? 'month' : 'months'} ago`;
    }
  }
  