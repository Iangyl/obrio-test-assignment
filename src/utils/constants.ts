export enum APP_ROUTES {
  HOME = '/',
  PROFILE = '/profile',
  LOADING = '/loading',
  CONCLUSION = '/conclusion',
  SUMMARY = '/summary',

  /* Question pages */

  RELATIONSHIP_Q = '/questions/relationship_status',
  PARENT_SINGLE_Q = '/questions/single_parent',
  PARENT_Q = '/questions/parent',
  LAST_RELATIONSHIP_Q = '/questions/last_relationship',
  DESCRIBING_STATEMENT_Q = '/questions/describe_yourself',
  DECISION_CENTER_Q = '/questions/decision_center',
}

export const questions = {
  first:
    'So we can get to know you better, tell us about your relationship status.',
  second: 'Are you a single parent?',
  third: 'Are you a parent?',
  fourth:
    'Single {gender} {age} {children} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?',
  fifth:
    '{Gender} {age} {children} need a slightly different approach to improve their relationship. Which statement best describes you?',
  six: 'Do you make decisions with your head or your heart?',
};

export const answers = {
  first: [
    { answer: 'a', text: 'Single', path: APP_ROUTES.PARENT_SINGLE_Q },
    { answer: 'b', text: 'In a relationship', path: APP_ROUTES.PARENT_Q },
  ],
  second: [
    { answer: 'c', text: 'Yes', path: APP_ROUTES.LAST_RELATIONSHIP_Q },
    { answer: 'd', text: 'No', path: APP_ROUTES.LAST_RELATIONSHIP_Q },
  ],
  third: [
    { answer: 'e', text: 'Yes', path: APP_ROUTES.DESCRIBING_STATEMENT_Q },
    { answer: 'f', text: 'No', path: APP_ROUTES.DESCRIBING_STATEMENT_Q },
  ],
  fourth: [
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
  fifth: [
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
  six: [
    { answer: 'n', text: 'Heart', path: APP_ROUTES.CONCLUSION },
    { answer: 'o', text: 'Head', path: APP_ROUTES.CONCLUSION },
    { answer: 'p', text: 'Both', path: APP_ROUTES.CONCLUSION },
  ],
};

export const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
