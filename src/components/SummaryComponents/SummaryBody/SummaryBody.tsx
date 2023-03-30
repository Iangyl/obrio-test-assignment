import Button from 'components/Button/Button';
import EmailField from 'components/EmailField/EmailField';
import styles from './SummaryBody.module.sass';

const SummaryBody = ({
  onClick,
  onChange,
}: {
  onClick: () => void;
  onChange: (value: string) => void;
}) => (
  <div className={styles.summaryBody}>
    <h1 className={styles.title}>
      Enter your email to see how you can grow with Nebula
    </h1>
    <div>
      <EmailField onChange={(event) => onChange(event.target.value)} />
    </div>
    <p className={styles.paragraph}>
      *Nebula does not share any personal information. We&apos;ll email you a
      copy of your program for convenient access.
    </p>
    <p className={styles.paragraph}>
      By continuing I agree with <a>Privacy policy</a> and <a>Terms of use</a>.
    </p>
    <div>
      <Button btnType="gradient" onClick={onClick}>
        Continue
      </Button>
    </div>
  </div>
);

export default SummaryBody;
