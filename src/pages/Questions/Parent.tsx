import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { APP_ROUTES } from 'utils/constants';
import { IAnswer } from 'redux/user/user.types';
import { setParentStatus } from 'redux/user/userSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import PageWrapper from 'components/PageWrapper/PageWrapper';
import QuestionBody from 'components/QuestionComponents/QuestionBody/QuestionBody';
import QuestionHead from 'components/QuestionComponents/QuestionHead/QuestionHead';

const questions = [
  {
    question: 'Are you a single parent?',
    answers: [
      { answer: 'c', text: 'Yes', path: APP_ROUTES.LAST_RELATIONSHIP_Q },
      { answer: 'd', text: 'No', path: APP_ROUTES.LAST_RELATIONSHIP_Q },
    ],
  },
  {
    question: 'Are you a parent?',
    answers: [
      { answer: 'e', text: 'Yes', path: APP_ROUTES.DESCRIBING_STATEMENT_Q },
      { answer: 'f', text: 'No', path: APP_ROUTES.DESCRIBING_STATEMENT_Q },
    ],
  },
];

const Parent = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const relationshipStatus = useAppSelector(
    (state) => state.details.relationshipStatus
  );

  const question = useMemo(() => {
    if (relationshipStatus === 'single') return questions[0];
    else return questions[1];
  }, [relationshipStatus]);

  const handleAnswer = (answer: IAnswer) => {
    dispatch(setParentStatus(answer.text));
    navigate(answer.path);
  };

  return (
    <PageWrapper theme="light">
      <QuestionHead question={question?.question} />
      <QuestionBody answers={question?.answers} onAnswer={handleAnswer} />
    </PageWrapper>
  );
};

export default Parent;
