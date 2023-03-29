import { useEffect, useState } from 'react';
import DropArrowIcon from 'assets/DropArrow';

import styles from './TimeInputChunk.module.sass';

const TimeInputChunk = ({
  options,
  onSelect,
}: {
  options: string[];
  onSelect: (args: string) => void;
}) => {
  const [selectedValue, setSelectedValue] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  function toggleSelect() {
    setIsOpen(!isOpen);
  }

  function handleSelect(option: string) {
    setSelectedValue(option);
    onSelect(option);
    setIsOpen(false);
  }

  useEffect(() => onSelect(selectedValue), []);

  return (
    <div className={styles.customSelect}>
      <div className={styles.selectButton} onClick={toggleSelect}>
        {selectedValue}
        <DropArrowIcon />
      </div>
      {isOpen && (
        <ul className={styles.options}>
          {options.map((option) => (
            <li
              className={styles.option}
              key={option}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TimeInputChunk;
