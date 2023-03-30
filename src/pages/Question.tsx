import { useLocation } from 'react-router-dom';

import useQuestions, { IAnswer } from 'hooks/useQuestions';

import PageWrapper from 'components/PageWrapper/PageWrapper';
import QuestionBody from 'components/QuestionComponents/QuestionBody/QuestionBody';
import QuestionHead from 'components/QuestionComponents/QuestionHead/QuestionHead';

const Question = () => {
  const location = useLocation();
  const { question, setAnswer } = useQuestions(location.pathname);

  const handleAnswer = (answer: IAnswer) => {
    setAnswer(answer);
  };

  return (
    <PageWrapper theme="light">
      <QuestionHead question={question?.question} />
      <QuestionBody answers={question?.answers} onAnswer={handleAnswer} />
    </PageWrapper>
  );
};

export default Question;
