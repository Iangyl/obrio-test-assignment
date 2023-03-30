import styles from './QuestionHead.module.sass';

const QuestionHead = ({ question }: { question?: string }) => (
  <div className={styles.questionHead}>
    <h1 className={styles.title}>{question}</h1>
  </div>
);

export default QuestionHead;
