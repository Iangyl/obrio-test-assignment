import { useState, useEffect, useMemo, useCallback } from 'react';
import { getHoursList, getMinutesList } from 'utils/helpers';
import TimeInputChunk from './TimeInputChunk/TimeInputChunk';

import styles from './TimeInput.module.sass';

const TimeInput = ({ onChange }: { onChange: (args: Date) => void }) => {
  const [hours, setHours] = useState<string>();
  const [minutes, setMinutes] = useState<string>();
  const [dayPart, setDayPart] = useState<string>();

  const hoursList = useMemo(() => getHoursList(), []);
  const minutesList = useMemo(() => getMinutesList(), []);

  const getTime = useCallback(
    (hours: string, minutes: string, dayPart: string) => {
      if (dayPart === 'PM' && hours !== '12') {
        hours = String(Number(hours) + 12);
      } else if (dayPart === 'AM' && hours === '12') {
        hours = '00';
      }

      const now = new Date();
      const dateStr = now.toLocaleDateString();
      const timeStr = `${dateStr} ${hours}:${minutes}:00`;
      const dateObj = new Date(timeStr);

      return dateObj;
    },
    [hours, minutes, dayPart]
  );

  useEffect(() => {
    if (hours && minutes && dayPart) onChange(getTime(hours, minutes, dayPart));
  }, [hours, minutes, dayPart]);

  return (
    <div className={styles.timeInput}>
      <div className={styles.timeChunkContainer}>
        <TimeInputChunk options={hoursList} onSelect={setHours} />
      </div>
      <div className={styles.timeChunkContainer}>
        <TimeInputChunk options={minutesList} onSelect={setMinutes} />
      </div>
      <div className={styles.timeChunkContainer}>
        <TimeInputChunk options={['AM', 'PM']} onSelect={setDayPart} />
      </div>
    </div>
  );
};

export default TimeInput;
