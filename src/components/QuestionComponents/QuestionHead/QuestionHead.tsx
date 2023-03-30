import { useAppSelector } from 'redux/hooks';
import { getAge } from 'utils/helpers';
import styles from './QuestionHead.module.sass';

const QuestionHead = ({ question }: { question?: string }) => {
  const gender = useAppSelector((state) => state.gender);
  const haveChildren = useAppSelector((state) => state.details.children);
  const birthDate = useAppSelector((state) => state.birthday);

  return (
    <div className={styles.questionHead}>
      <h1 className={styles.title}>
        {question
          ?.replace('{gender}', gender ?? 'gender')
          .replace(
            '{age}',
            getAge(birthDate ?? new Date().toString()).toString()
          )
          .replace('{children}', haveChildren ? 'who have children' : '')}
      </h1>
    </div>
  );
};

export default QuestionHead;
