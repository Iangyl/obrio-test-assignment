import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'redux/hooks';
import {
  setDecisionCenter,
  setParentStatus,
  setRelationshipStatus,
  setUsersFeel,
} from 'redux/user/userSlice';
import { answers, APP_ROUTES, questions } from 'utils/constants';

export interface IAnswer {
  answer: string;
  text: string;
  path: APP_ROUTES;
}

export interface IQuestion {
  question: string;
  answers: IAnswer[];
}

const useQuestions = (path: string) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [answer, setAnswer] = useState<IAnswer>();
  const [question, setQuestion] = useState<IQuestion>();

  const setAnswers = useCallback(() => {
    switch (path) {
      case APP_ROUTES.RELATIONSHIP_Q:
        if (answer) {
          dispatch(setRelationshipStatus(answer.text));
          window.location.pathname = answer.path;
        }
        break;
      case APP_ROUTES.PARENT_SINGLE_Q:
        if (answer) {
          dispatch(setParentStatus(answer?.text));
          window.location.pathname = answer.path;
        }
        break;
      case APP_ROUTES.PARENT_Q:
        if (answer) {
          dispatch(setParentStatus(answer?.text));
          window.location.pathname = answer.path;
        }
        break;
      case APP_ROUTES.LAST_RELATIONSHIP_Q:
        if (answer) {
          dispatch(setUsersFeel(answer?.text));
          window.location.pathname = answer.path;
        }
        break;
      case APP_ROUTES.DESCRIBING_STATEMENT_Q:
        if (answer) {
          dispatch(setUsersFeel(answer?.text));
          window.location.pathname = answer.path;
        }
        break;
      case APP_ROUTES.DECISION_CENTER_Q:
        if (answer) {
          dispatch(setDecisionCenter(answer?.text));
          window.location.pathname = answer.path;
        }
        break;
    }
  }, [answer]);

  const getQuestion = useCallback(() => {
    switch (path) {
      case APP_ROUTES.RELATIONSHIP_Q:
        setQuestion({
          question: questions?.first,
          answers: answers?.first,
        });
        break;
      case APP_ROUTES.PARENT_SINGLE_Q:
        setQuestion({
          question: questions?.second,
          answers: answers?.second,
        });
        break;
      case APP_ROUTES.PARENT_Q:
        setQuestion({
          question: questions?.third,
          answers: answers?.third,
        });
        break;
      case APP_ROUTES.LAST_RELATIONSHIP_Q:
        setQuestion({
          question: questions?.fourth,
          answers: answers?.fourth,
        });
        break;
      case APP_ROUTES.DESCRIBING_STATEMENT_Q:
        setQuestion({
          question: questions?.fifth,
          answers: answers?.fifth,
        });
        break;
      case APP_ROUTES.DECISION_CENTER_Q:
        setQuestion({
          question: questions?.six,
          answers: answers?.six,
        });
        break;
    }
  }, [answer]);

  useEffect(() => {
    setAnswers();
  }, [answer, setAnswers]);

  useEffect(() => {
    getQuestion();
  }, [path, getQuestion]);

  return { question, setAnswer };
};

export default useQuestions;
