import { MouseEventHandler } from 'react';

import ManIcon from 'assets/Man';
import WomanIcon from 'assets/Woman';
import ArrowIcon from 'assets/Arrow';
import ButtonBottom from './ButtonBottom/ButtonBottom';

import styles from './GenderButton.module.sass';

const GenderButton = ({
  btnType,
}: {
  btnType: 'male' | 'female';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => (
  <button className={`${styles.genderBtn} ${styles[btnType]}`}>
    {btnType === 'male' ? (
      <ManIcon style={{ display: 'block' }} />
    ) : (
      <WomanIcon style={{ display: 'block' }} />
    )}
    <ButtonBottom btnType={btnType}>
      <span>{btnType === 'male' ? 'Male' : 'Female'}</span>
      <ArrowIcon style={{ transform: 'rotate(180deg)' }} />
    </ButtonBottom>
  </button>
);

export default GenderButton;
