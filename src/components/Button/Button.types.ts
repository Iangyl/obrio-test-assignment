import { CSSProperties, MouseEventHandler } from 'react';

export interface IButton {
  type?: 'submit' | 'button' | 'reset';
  children: JSX.Element | JSX.Element[] | string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: CSSProperties;
  btnType: 'common' | 'filled' | 'outlined' | 'gradient';
}
