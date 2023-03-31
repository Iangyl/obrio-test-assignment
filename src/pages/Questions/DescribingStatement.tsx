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
    '{Gender} {age} {children} need a slightly different approach to improve their relationship. Which statement best describes you?',
  answers: [
    {
      answer: 'k',
      text: 'I’m very unhappy with how things are going in my relationship',
      path: APP_ROUTES.DECISION_CENTER_Q,
    },
    {
      answer: 'l',
      text: 'I’m unhappy with parts of my relationship, but some things are working well',
      path: APP_ROUTES.DECISION_CENTER_Q,
    },
    {
      answer: 'm',
      text: 'I’m generally happy in my relationship',
      path: APP_ROUTES.DECISION_CENTER_Q,
    },
  ],
};

const DescribingStatement = () => {
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

export default DescribingStatement;
