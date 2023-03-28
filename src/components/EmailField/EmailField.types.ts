import { CSSProperties, ChangeEventHandler } from 'react';

export interface IEmailField {
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  className?: string;
  style?: CSSProperties;
}
