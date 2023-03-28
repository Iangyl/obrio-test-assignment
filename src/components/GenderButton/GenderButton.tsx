import React, { FC } from 'react';
import { IButton } from './GenderButton.types';

import styles from './GenderButton.module.sass';

const GenderButton: FC<IButton> = ({
  type,
  children,
  className,
  style,
  onClick,
  btnType,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`${styles.button} ${styles[btnType]} ${className}`}
    style={style}
  >
    {children}
  </button>
);

export default GenderButton;
