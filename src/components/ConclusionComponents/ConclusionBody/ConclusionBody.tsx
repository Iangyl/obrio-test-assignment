import Button from 'components/Button/Button';

import styles from './ConclusionBody.module.sass';

const ConclusionBody = ({
  handleBack,
  handleNext,
}: {
  handleBack: () => void;
  handleNext: () => void;
}) => {
  return (
    <div className={styles.conclusionBody}>
      <Button btnType="outlined" onClick={handleBack}>
        Back
      </Button>
      <Button btnType="filled" onClick={handleNext}>
        Next
      </Button>
    </div>
  );
};

export default ConclusionBody;
