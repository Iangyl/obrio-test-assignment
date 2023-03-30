import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from 'redux/hooks';
import {
  setDecisionCenter,
  setParentStatus,
  setRelationshipStatus,
  setUsersFeel,
} from 'redux/user/userSlice';
import { answers, questions } from 'utils/constants';
import { getValueFromAnswersArray } from 'utils/helpers';

export interface IAnswer {
  answer: string;
  text: string;
}

export interface IQuestion {
  question: string;
  answers: IAnswer[];
}

const useQuestions = () => {
  const dispatch = useAppDispatch();

  const [answer, setAnswer] = useState<string>('start');
  const [question, setQuestion] = useState<IQuestion>();

  const getQuestion = useCallback(() => {
    if (answer === 'start') {
      setQuestion({
        question: questions?.first,
        answers: answers?.first,
      });
    } else if (answer === 'a') {
      if (question) {
        dispatch(
          setRelationshipStatus(
            getValueFromAnswersArray(answer, question?.answers)
          )
        );
        setQuestion({
          question: questions?.second,
          answers: answers?.second,
        });
      }
    } else if (answer === 'b') {
      if (question) {
        dispatch(
          setRelationshipStatus(
            getValueFromAnswersArray(answer, question?.answers)
          )
        );
      }
      setQuestion({
        question: questions?.third,
        answers: answers?.third,
      });
    } else if (answer === 'c' || answer === 'g') {
      if (question) {
        dispatch(
          setParentStatus(getValueFromAnswersArray(answer, question?.answers))
        );
        setQuestion({
          question: questions?.fourth,
          answers: answers?.fourth,
        });
      }
    } else if (answer === 'd' || answer === 'h') {
      if (question) {
        dispatch(
          setParentStatus(getValueFromAnswersArray(answer, question?.answers))
        );
        setQuestion({
          question: questions?.fifth,
          answers: answers?.fifth,
        });
      }
    } else if (
      answer === 'e' ||
      answer === 'f' ||
      answer === 'i' ||
      answer === 'j'
    ) {
      if (question) {
        dispatch(
          setUsersFeel(getValueFromAnswersArray(answer, question?.answers))
        );
        setQuestion({
          question: questions?.six,
          answers: answers?.six,
        });
      }
    } else if (answer === 'k' || answer === 'o' || answer === 'p') {
      if (question) {
        dispatch(
          setDecisionCenter(getValueFromAnswersArray(answer, question?.answers))
        );
        setQuestion({
          question: 'finish',
          answers: [],
        });
      }
    } else if (answer === 'q' || answer === 'r' || answer === 's') {
      if (question) {
        dispatch(
          setDecisionCenter(getValueFromAnswersArray(answer, question?.answers))
        );
        setQuestion({
          question: 'finish',
          answers: [],
        });
      }
    } else {
      setQuestion({
        question: questions.first,
        answers: answers.first,
      });
    }
  }, [answer]);

  useEffect(() => {
    getQuestion();
  }, [answer, getQuestion]);

  return { question, setAnswer };
};

export default useQuestions;
