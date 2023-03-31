import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'redux/hooks';
import { APP_ROUTES } from 'utils/constants';
import { IAnswer } from 'redux/user/user.types';
import { setDecisionCenter } from 'redux/user/userSlice';

import PageWrapper from 'components/PageWrapper/PageWrapper';
import QuestionBody from 'components/QuestionComponents/QuestionBody/QuestionBody';
import QuestionHead from 'components/QuestionComponents/QuestionHead/QuestionHead';

const question = {
  question: 'Do you make decisions with your head or your heart?',
  answers: [
    { answer: 'n', text: 'Heart', path: APP_ROUTES.CONCLUSION },
    { answer: 'o', text: 'Head', path: APP_ROUTES.CONCLUSION },
    { answer: 'p', text: 'Both', path: APP_ROUTES.CONCLUSION },
  ],
};

const DecisionCenter = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleAnswer = (answer: IAnswer) => {
    dispatch(setDecisionCenter(answer.text));
    navigate(answer.path);
  };

  return (
    <PageWrapper theme="light">
      <QuestionHead question={question?.question} />
      <QuestionBody answers={question?.answers} onAnswer={handleAnswer} />
    </PageWrapper>
  );
};

export default DecisionCenter;
