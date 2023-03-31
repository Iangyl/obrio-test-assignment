import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'redux/hooks';
import { APP_ROUTES } from 'utils/constants';
import { IAnswer } from 'redux/user/user.types';
import { setUsersFeel } from 'redux/user/userSlice';

import PageWrapper from 'components/PageWrapper/PageWrapper';
import QuestionBody from 'components/QuestionComponents/QuestionBody/QuestionBody';
import QuestionHead from 'components/QuestionComponents/QuestionHead/QuestionHead';

const question = {
  question:
    'Single {gender} {age} {children} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?',
  answers: [
    {
      answer: 'g',
      text: 'I was unhappy with low things were going in my relationship',
      path: APP_ROUTES.DECISION_CENTER_Q,
    },
    {
      answer: 'h',
      text: 'I was unhappy with parts of my relationship, but some thing were working',
      path: APP_ROUTES.DECISION_CENTER_Q,
    },
    {
      answer: 'i',
      text: 'I was generally happy with my relationship',
      path: APP_ROUTES.DECISION_CENTER_Q,
    },
    {
      answer: 'j',
      text: 'I’ve never been in a relationship',
      path: APP_ROUTES.DECISION_CENTER_Q,
    },
  ],
};

const LastRelationship = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleAnswer = (answer: IAnswer) => {
    dispatch(setUsersFeel(answer.text));
    navigate(answer.path);
  };

  return (
    <PageWrapper theme="light">
      <QuestionHead question={question?.question} />
      <QuestionBody answers={question?.answers} onAnswer={handleAnswer} />
    </PageWrapper>
  );
};

export default LastRelationship;
