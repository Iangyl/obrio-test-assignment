export type Gender = 'male' | 'female';

export interface IAnswers {
  relationshipStatus?: 'single' | 'in_relationship';
  children?: boolean;
  feel?: string;
  decision_center?: 'heart' | 'head' | 'both';
}

export interface IState {
  gender: Gender | null;
  birthday: Date | null;
  email: string | null;
  details?: IAnswers;
}
