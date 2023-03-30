import { IAnswer } from 'hooks/useQuestions';

export const getYearsList = () => {
  const years = [];
  for (let i = 1989; i <= new Date().getFullYear(); i++) {
    if (i === 1989) years.push('Year');
    years.push(i.toString());
  }

  return years.sort((a, b) => +b - +a);
};

export const getMonthsList = () => {
  const months = [];

  for (let i = 0; i <= 12; i++) {
    if (i === 0) months.push('Month');
    if (i < 10) {
      months.push('0' + i);
    } else months.push(i.toString());
  }

  return months.sort((a, b) => +b - +a);
};

export const getDaysList = (month?: string, year?: string) => {
  const yearChunk =
    !year || year?.length === 0 || Number.isNaN(Number(year))
      ? new Date().getFullYear()
      : Number(year);
  const monthChunk =
    !month || month?.length === 0 || Number.isNaN(Number(month))
      ? new Date().getMonth() + 1
      : Number(month);

  const daysInMonth = new Date(yearChunk, monthChunk, 0).getDate();
  const days = [];

  for (let day = 0; day <= daysInMonth; day++) {
    if (day === 0) days.push('Day');
    days.push('' + day);
  }

  return days.sort((a, b) => +b - +a);
};

export const getValueFromAnswersArray = (
  answer: string,
  answers: IAnswer[]
) => {
  let result = '';

  answers.forEach((item) => {
    if (item.answer === answer) result = item.text;
  });

  return result;
};

export const getZodiacSign = (value: string) => {
  const date = new Date(value);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if (month === 1) {
    if (day <= 19) {
      return 'Capricorn';
    } else {
      return 'Aquarius';
    }
  } else if (month === 2) {
    if (day <= 18) {
      return 'Aquarius';
    } else {
      return 'Pisces';
    }
  } else if (month === 3) {
    if (day <= 20) {
      return 'Pisces';
    } else {
      return 'Aries';
    }
  } else if (month === 4) {
    if (day <= 19) {
      return 'Aries';
    } else {
      return 'Taurus';
    }
  } else if (month === 5) {
    if (day <= 20) {
      return 'Taurus';
    } else {
      return 'Gemini';
    }
  } else if (month === 6) {
    if (day <= 20) {
      return 'Gemini';
    } else {
      return 'Cancer';
    }
  } else if (month === 7) {
    if (day <= 22) {
      return 'Cancer';
    } else {
      return 'Leo';
    }
  } else if (month === 8) {
    if (day <= 22) {
      return 'Leo';
    } else {
      return 'Virgo';
    }
  } else if (month === 9) {
    if (day <= 22) {
      return 'Virgo';
    } else {
      return 'Libra';
    }
  } else if (month === 10) {
    if (day <= 22) {
      return 'Libra';
    } else {
      return 'Scorpio';
    }
  } else if (month === 11) {
    if (day <= 21) {
      return 'Scorpio';
    } else {
      return 'Sagittarius';
    }
  } else if (month === 12) {
    if (day <= 21) {
      return 'Sagittarius';
    } else {
      return 'Capricorn';
    }
  }
};

export const getAge = (date: string) => {
  const today = new Date();
  const birthDate = new Date(date);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};
