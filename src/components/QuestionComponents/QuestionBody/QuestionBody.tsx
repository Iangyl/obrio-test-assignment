import Button from 'components/Button/Button';
import { IAnswer } from 'redux/user/user.types';
import styles from './QuestionBody.module.sass';

const QuestionBody = ({
  answers,
  onAnswer,
}: {
  answers?: IAnswer[];
  onAnswer: (answer: IAnswer) => void;
}) => (
  <div className={styles.questionBody}>
    {answers?.map((answer, idx) => (
      <Button key={idx} btnType="common" onClick={() => onAnswer(answer)}>
        {answer.text}
      </Button>
    ))}
  </div>
);

export default QuestionBody;
