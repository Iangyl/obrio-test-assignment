import ZodiacSpan from 'components/ZodiacSpan/ZodiacSpan';

import styles from './LoadingHead.module.sass';

const LoadingHead = () => (
  <div className={styles.loadingHead}>
    <p className={styles.paragraph}>
      We&apos;ve helped 2,865,756* other <ZodiacSpan value="Zodiac" />{' '}
      {'gender'} to find their perfect partner and we can&apos;t wait to help
      you too!
    </p>
    <h5 className={styles.subtitle}>*as of 24 February 2023</h5>
  </div>
);

export default LoadingHead;
