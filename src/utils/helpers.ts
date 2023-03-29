export const getHoursList = () => {
  const hours = [];
  for (let i = 0; i <= 12; i++) {
    if (i < 10) {
      hours.push('0' + i);
    } else hours.push(i.toString());
  }

  return hours;
};

export const getMinutesList = () => {
  const minutes = [];

  for (let i = 0; i <= 59; i++) {
    if (i < 10) {
      minutes.push('0' + i);
    } else minutes.push(i.toString());
  }

  return minutes;
};
