export type Theme = 'dark' | 'light';

export interface IPageWrapper {
  theme: Theme;
  children: JSX.Element | JSX.Element[] | string;
}
