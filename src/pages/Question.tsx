import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useQuestions from 'hooks/useQuestions';

import PageWrapper from 'components/PageWrapper/PageWrapper';
import QuestionBody from 'components/QuestionComponents/QuestionBody/QuestionBody';
import QuestionHead from 'components/QuestionComponents/QuestionHead/QuestionHead';
import { APP_ROUTES } from 'utils/constants';

const Question = () => {
  const navigate = useNavigate();
  const { question, setAnswer } = useQuestions();

  const handleAnswer = (answer: string) => setAnswer(answer);

  useEffect(() => {
    if (question?.question === 'finish') {
      navigate(APP_ROUTES.CONCLUSION); // next page
    }
  }, [question]);

  return (
    <PageWrapper theme="light">
      <QuestionHead question={question?.question} />
      <QuestionBody answers={question?.answers} onAnswer={handleAnswer} />
    </PageWrapper>
  );
};

export default Question;
