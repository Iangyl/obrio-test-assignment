import React, { FC } from 'react';
import { IEmailField } from './EmailField.types';

import styles from './EmailField.module.sass';

const EmailField: FC<IEmailField> = ({
  value,
  onChange,
  placeholder,
  className,
  style,
}) => {
  return (
    <input
      type="email"
      value={value}
      onChange={onChange}
      placeholder={placeholder ?? 'Email'}
      className={`${styles.email} ${className}`}
      style={style}
    />
  );
};

export default EmailField;
