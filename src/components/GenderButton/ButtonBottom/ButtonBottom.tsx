import { FC } from 'react';
import { IButtonBottom } from './ButtonBottom.types';

import styles from './ButtonBottom.module.sass';

const ButtonBottom: FC<IButtonBottom> = ({ children, btnType }) => (
  <div className={`${styles.button} ${styles[btnType]}`}>{children}</div>
);

export default ButtonBottom;
