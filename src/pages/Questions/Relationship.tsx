import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'redux/hooks';
import { APP_ROUTES } from 'utils/constants';
import { IAnswer } from 'redux/user/user.types';
import { setRelationshipStatus } from 'redux/user/userSlice';

import PageWrapper from 'components/PageWrapper/PageWrapper';
import QuestionBody from 'components/QuestionComponents/QuestionBody/QuestionBody';
import QuestionHead from 'components/QuestionComponents/QuestionHead/QuestionHead';

const question = {
  question:
    'So we can get to know you better, tell us about your relationship status.',
  answers: [
    { answer: 'a', text: 'Single', path: APP_ROUTES.PARENT_Q },
    { answer: 'b', text: 'In a relationship', path: APP_ROUTES.PARENT_Q },
  ],
};

const Relationship = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleAnswer = (answer: IAnswer) => {
    dispatch(setRelationshipStatus(answer.text));
    navigate(answer.path);
  };

  return (
    <PageWrapper theme="light">
      <QuestionHead question={question?.question} />
      <QuestionBody answers={question?.answers} onAnswer={handleAnswer} />
    </PageWrapper>
  );
};

export default Relationship;
