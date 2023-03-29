import styles from './HomeHead.module.sass';

const HomeHead = () => (
  <div className={styles.homeHead}>
    <h1 className={styles.title}>
      Understand Yourself and Improve Relationships With Astrology
    </h1>
    <h5 className={styles.subtitle}>1-Minute Personal Assessment</h5>
    <p className={styles.paragraph}>Select your gender:</p>
  </div>
);

export default HomeHead;
