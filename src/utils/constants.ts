export const questions = {
  first:
    'So we can get to know you better, tell us about your relationship status.',
  second: 'Are you a single parent?',
  third: 'Are you a parent?',
  fourth:
    'Single {gender} {age} {who have children (if have children)} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?',
  fifth:
    '{Gender} {age} {who have children (if have children)} need a slightly different approach to improve their relationship. Which statement best describes you?',
  six: 'Do you make decisions with your head or your heart?',
};

export const answers = {
  first: [
    { answer: 'a', text: 'Single' },
    { answer: 'b', text: 'In a relationship' },
  ],
  second: [
    { answer: 'c', text: 'Yes' },
    { answer: 'c', text: 'No' },
  ],
  third: [
    { answer: 'd', text: 'Yes' },
    { answer: 'd', text: 'No' },
  ],
  fourth: [
    {
      answer: 'e',
      text: 'I was unhappy with low things were going in my relationship',
    },
    {
      answer: 'e',
      text: 'I was unhappy with parts of my relationship, but some thing were working',
    },
    {
      answer: 'e',
      text: 'I was generally happy with my relationship',
    },
    {
      answer: 'e',
      text: 'I’ve never been in a relationship',
    },
  ],
  fifth: [
    {
      answer: 'e',
      text: 'I’m very unhappy with how things are going in my relationship',
    },
    {
      answer: 'e',
      text: 'I’m unhappy with parts of my relationship, but some things are working well',
    },
    {
      answer: 'e',
      text: 'I’m generally happy in my relationship',
    },
  ],
  six: [
    { answer: 'f', text: 'Heart' },
    { answer: 'f', text: 'Head' },
    { answer: 'f', text: 'Both' },
  ],
};
