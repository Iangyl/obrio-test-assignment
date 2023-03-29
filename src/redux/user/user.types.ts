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
  birthday: Date | null;
  email: string | null;
  details: IAnswers;
}
