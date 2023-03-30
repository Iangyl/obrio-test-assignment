import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import {
  setParentStatus,
  setRelationshipStatus,
  setUsersFeel,
} from 'redux/user/userSlice';
import { answers, questions } from 'utils/constants';
import { getAge, getValueFromAnswersArray } from 'utils/helpers';

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
  const gender = useAppSelector((state) => state.gender);
  const haveChildren = useAppSelector((state) => state.details.children);
  const birthDate = useAppSelector((state) => state.birthday);

  const [answer, setAnswer] = useState<string>('start');
  const [question, setQuestion] = useState<IQuestion>();

  const getQuestion = useCallback(() => {
    switch (answer) {
      case 'start':
        setQuestion({
          question: questions?.first,
          answers: answers?.first,
        });
        break;
      case 'a':
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
        break;
      case 'b':
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
        break;
      case 'c':
        if (question) {
          dispatch(
            setParentStatus(
              getValueFromAnswersArray(answer, question?.answers) === 'Yes'
                ? true
                : false
            )
          );
          setQuestion({
            question: questions?.fourth
              .replace('{gender}', gender ?? 'gender')
              .replace('{age}', getAge(birthDate ?? new Date()).toString())
              .replace('{children}', haveChildren ? 'who have children' : ''),
            answers: answers?.fourth,
          });
        }
        break;
      case 'd':
        if (question) {
          dispatch(
            setParentStatus(
              getValueFromAnswersArray(answer, question?.answers) === 'Yes'
                ? true
                : false
            )
          );
          setQuestion({
            question: questions?.fifth
              .replace('{gender}', gender ?? 'gender')
              .replace('{age}', getAge(birthDate ?? new Date()).toString())
              .replace('{children}', haveChildren ? 'who have children' : ''),
            answers: answers?.fifth,
          });
        }
        break;
      case 'e':
        if (question) {
          dispatch(
            setUsersFeel(getValueFromAnswersArray(answer, question?.answers))
          );
          setQuestion({
            question: questions?.six,
            answers: answers?.six,
          });
        }
        break;
      case 'f':
        if (question) {
          setQuestion({
            question: 'finish',
            answers: [],
          });
        }
        break;
      default:
        setQuestion({
          question: questions.first,
          answers: answers.first,
        });
        break;
    }
  }, [answer]);

  useEffect(() => {
    getQuestion();
  }, [answer]);

  return { question, setAnswer };
};

export default useQuestions;
