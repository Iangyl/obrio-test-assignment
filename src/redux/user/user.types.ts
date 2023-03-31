import { APP_ROUTES } from 'utils/constants';

export type Gender = 'male' | 'female';
export type DecisionCenter = 'heart' | 'head' | 'both';

export interface IAnswers {
  relationshipStatus?: 'single' | 'in_relationship';
  children?: boolean;
  feel?: string;
  decision_center?: DecisionCenter;
}

export interface IState {
  gender: Gender | null;
  birthday: string | null;
  email: string | null;
  details: IAnswers;
}

export interface IAnswer {
  answer: string;
  text: string;
  path: APP_ROUTES;
}

export interface IQuestion {
  question: string;
  answers: IAnswer[];
}
