import React, { FC } from 'react';
import { IButton } from './Button.types';

import styles from './Button.module.sass';

const Button: FC<IButton> = ({
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

export default Button;
