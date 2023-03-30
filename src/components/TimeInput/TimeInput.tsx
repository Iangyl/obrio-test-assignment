import { useState, useEffect, useMemo, useCallback } from 'react';
import { getDaysList, getMonthsList, getYearsList } from 'utils/helpers';
import TimeInputChunk from './TimeInputChunk/TimeInputChunk';

import styles from './TimeInput.module.sass';

const TimeInput = ({ onChange }: { onChange: (args: Date) => void }) => {
  const [day, setDay] = useState<string>();
  const [month, setMonth] = useState<string>();
  const [year, setYear] = useState<string>();

  const daysList = useMemo(() => getDaysList(month, year), [month, year]);
  const monthsList = useMemo(() => getMonthsList(), []);
  const yearsList = useMemo(() => getYearsList(), []);

  const getDate = useCallback(
    (day: string, month: string, year: string) => {
      const dateObj = new Date(Number(year), Number(month), Number(day));

      return dateObj;
    },
    [day, month, year]
  );

  useEffect(() => {
    if (day && month && year) onChange(getDate(day, month, year));
  }, [day, month, year]);

  return (
    <div className={styles.timeInput}>
      <div className={styles.timeChunkContainer}>
        <TimeInputChunk options={yearsList} onSelect={setDay} />
      </div>
      <div className={styles.timeChunkContainer}>
        <TimeInputChunk options={monthsList} onSelect={setMonth} />
      </div>
      <div className={styles.timeChunkContainer}>
        <TimeInputChunk options={daysList} onSelect={setYear} />
      </div>
    </div>
  );
};

export default TimeInput;
